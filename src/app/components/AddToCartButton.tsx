"use client";

import { useState } from "react";
import { useCart } from "../hooks/useCart";
import type { Product } from "../types";

export default function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert("Producto añadido al carrito");
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <button
          className="bg-gray-200 px-2 py-1 rounded-l"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
        >
          -
        </button>
        <span className="bg-gray-100 px-4 py-1">{quantity}</span>
        <button
          className="bg-gray-200 px-2 py-1 rounded-r"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <button
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
        onClick={handleAddToCart}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
