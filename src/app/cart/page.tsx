"use client";

import { useCart } from "../hooks/useCart";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="py-4 flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Cantidad: {item.quantity}</p>
                  <p className="text-gray-600">
                    Precio: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <Link
              href="/checkout"
              className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark"
            >
              Proceder al pago
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
