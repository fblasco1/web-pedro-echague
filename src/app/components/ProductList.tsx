import Link from "next/link";
import type { Product } from "@/app/types";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="border rounded-lg p-4 hover:shadow-lg transition"
        >
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </Link>
      ))}
    </div>
  );
}
