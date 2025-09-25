"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { API_URL } from "./utils/api";

type Product = {
  id: number;
  name: string;
  price_per_unit: number;
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/products/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Parsed JSON:", data);
        setProducts(data.products || []);
      })
      .catch(console.error);
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          🏗️ Available Construction Equipment
        </h1>
        <p className="mt-2 text-gray-500">
          Browse our wide range of tools and machines for your projects
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-12">
        <div className="w-full sm:w-2/3 lg:w-1/2">
          <input
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-5 py-3 shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-transform transform hover:-translate-y-1"
          >
            {/* Placeholder image (replace with product image if available) */}
            <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              Image Placeholder
            </div>

            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 truncate">
                {p.name}
              </h2>
              <p className="text-gray-600 mt-1">{p.price_per_unit} EGP</p>

              <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg font-medium hover:bg-yellow-600 transition">
                View Details →
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
