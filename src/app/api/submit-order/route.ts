import { NextResponse } from "next/server"
import { google } from "googleapis"
import { Resend } from "resend"
import type { drive_v3 } from "googleapis"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    const formData = await request.formData()
    const orderJson = formData.get("order") as string
    const order = JSON.parse(orderJson)
    const comprobante = formData.get("comprobante") as File

    try {
        // Subir comprobante a Google Drive
        const driveLink = await uploadToDrive(comprobante)

        // Guardar en Google Sheets
        await saveToGoogleSheets(order, driveLink)

        // Enviar email de confirmación
        await sendConfirmationEmail(order, driveLink)

        return NextResponse.json({ message: "Orden procesada con éxito" }, { status: 200 })
    } catch (error) {
        console.error("Error al procesar la orden:", error)
        return NextResponse.json({ message: "Error al procesar la orden" }, { status: 500 })
    }
}

async function uploadToDrive(file: File): Promise<string> {
    const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(process.env.GOOGLE_DRIVE_CREDENTIALS || ""),
        scopes: ["https://www.googleapis.com/auth/drive.file"],
    })

    const drive = google.drive({ version: "v3", auth })

    const fileMetadata: drive_v3.Schema$File = {
        name: file.name,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID], // ID de la carpeta en Drive donde se guardarán los comprobantes
    }

    const media = {
        mimeType: file.type,
        body: file.stream(),
    }

    const driveResponse = await drive.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: "id, webViewLink",
    })

    return driveResponse.data.webViewLink || ""
}

async function saveToGoogleSheets(order: any, driveLink: string) {
    const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS || ""),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    const values = [
        [
            new Date().toISOString(),
            order.name,
            order.email,
            order.address,
            JSON.stringify(order.items),
            order.total,
            driveLink,
        ],
    ]

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_ID,
        range: "Pedidos!A:G",
        valueInputOption: "RAW",
        requestBody: { values },
    })
}

async function sendConfirmationEmail(order: any, driveLink: string) {
    await resend.emails.send({
        from: "Tienda del Club <noreply@tuclub.com>",
        to: order.email,
        subject: "Confirmación de Pedido",
        html: `
      <h1>Gracias por tu pedido, ${order.name}!</h1>
      <p>Hemos recibido tu pedido y lo estamos procesando. Aquí están los detalles de tu compra:</p>
      <ul>
        ${order.items.map((item: any) => `<li>${item.name} - Cantidad: ${item.quantity} - Precio: $${item.price.toFixed(2)}</li>`).join("")}
      </ul>
      <p>Total: $${order.total.toFixed(2)}</p>
      <p>Hemos recibido tu comprobante de pago. Puedes verlo <a href="${driveLink}">aquí</a>.</p>
      <p>Te contactaremos pronto para coordinar la entrega.</p>
      <p>Gracias por comprar en la Tienda del Club!</p>
    `,
    })
}

