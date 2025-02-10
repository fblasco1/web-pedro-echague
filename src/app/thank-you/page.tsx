import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-6">¡Gracias por tu pedido!</h1>
      <p className="mb-4">
        Hemos recibido tu pedido y te enviaremos un correo electrónico con los
        detalles de la confirmación.
      </p>
      <p className="mb-8">
        Nos pondremos en contacto contigo pronto para coordinar la entrega.
      </p>
      <Link
        href="/"
        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark"
      >
        Volver a la tienda
      </Link>
    </div>
  );
}
