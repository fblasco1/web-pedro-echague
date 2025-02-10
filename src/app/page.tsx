import ProductList from "@/app/components/ProductList";
import { products } from "@/app/constants/product";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Guerreros Store</h1>
      <ProductList products={products} />
    </main>
  );
}
