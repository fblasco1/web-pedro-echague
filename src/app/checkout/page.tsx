"use client";

import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "transfer", // Nuevo campo para el método de pago
  });
  const [comprobante, setComprobante] = useState<File | null>(null);
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setComprobante(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const order = {
      ...formData,
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };

    const formDataToSend = new FormData();
    formDataToSend.append("order", JSON.stringify(order));
    if (comprobante) {
      formDataToSend.append("comprobante", comprobante);
    }

    try {
      const response = await fetch("/api/submit-order", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        clearCart();
        router.push("/thank-you");
      } else {
        throw new Error("Error al enviar la orden");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al procesar tu orden. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Finalizar Compra</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-2">
            Dirección
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block mb-2">
            Método de pago
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="transfer">Transferencia bancaria</option>
          </select>
        </div>
        {formData.paymentMethod === "transfer" && (
          <div className="mb-4">
            <label htmlFor="comprobante" className="block mb-2">
              Comprobante de pago
            </label>
            <input
              type="file"
              id="comprobante"
              name="comprobante"
              onChange={handleFileChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
        >
          Realizar Pedido
        </button>
      </form>
    </div>
  );
}
