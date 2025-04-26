"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  link?: string;
}

export default function FirstSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetch only Atlas Copco products
        const res = await fetch("/api/admin/products?company=atlas-copco");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="py-16 px-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#002e5d] to-[#005b8c] text-white text-center py-20 mb-12 sticky top-0 z-20">
        <h2 className="text-4xl font-bold mb-4">
          Explore Atlas Copco Products
        </h2>
        <p className="text-lg font-light">
          Innovative compressed air & industrial equipment engineered for
          excellence
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            key={product._id}
            href={product.link || "#"}
            className="bg-white border rounded-lg p-4 shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105"
          >
            <div className="w-full aspect-square relative mb-6 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain rounded-lg transition-all duration-300 transform hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#2b1c50]">
              {product.name}
            </h3>
            <p className="text-sm text-gray-700">{product.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
