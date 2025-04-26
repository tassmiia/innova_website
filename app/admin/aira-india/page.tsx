"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Trash } from "lucide-react";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  company: string;
};

export default function AiraIndiaAdmin() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/admin/products?company=aira-india");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/admin/products/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setProducts(products.filter((p) => p._id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Aira India Products</h1>
        <Link
          href="/admin/products?company=aira-india" // 🔁 this is the key
          className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" /> Add Product
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-blue-600 font-bold mt-1">₹{product.price}</p>
            <button
              onClick={() => handleDelete(product._id)}
              className="text-red-500 hover:text-red-700 mt-3"
            >
              <Trash className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
