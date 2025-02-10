import { notFound } from "next/navigation";
import AddToCartButton from "../../components/AddToCartButton";
import { products } from "@/app/constants/product";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
