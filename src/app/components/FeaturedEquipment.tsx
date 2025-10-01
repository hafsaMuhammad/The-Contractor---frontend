"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { API_URL } from "../utils/api";
import { useCart } from "./cart-context";



type Category = {
  id: number;
  name: string;
  created_at?: string;
  updated_at?: string;
};

type Product = {
  id: number;
  name: string;
  price_per_unit: number;
  available_quantity: number;
  description: string;
  image?: string;
  category: Category | string; 
};




export default function FeaturedEquipment() {


  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${API_URL}/products/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Parsed JSON:", data);
        setProducts(data.products || []);
      })
      .catch(console.error);
  }, []);


  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | "">("");

  useEffect(() => {
    fetch(`${API_URL}/categories/`)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories || []))
      .catch(console.error);
  }, []);

  // Filtered products
  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "" || (typeof p.category === "object" && p.category.id === selectedCategory);
    return matchesSearch && matchesCategory;
  });




  return (
    <section className="py-16 bg-white">


      <div className="mb-6 flex flex-col sm:flex-row gap-4 ">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-3  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6bc3cf] bg-gray-50"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value === "" ? "" : Number(e.target.value))}
          className="w-64 p-3  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6bc3cf] bg-gray-50"
        >
          <option value="" >All Categories</option>
          {categories.map((c) => (
            <option className="text-gray-500" key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="pl-4">

        <h2 className="text-xl md:text-2xl font-base mb-2 text-black">Available Products</h2>
        <p className="text-gray-600 mb-10">Professional-grade construction product available for rent</p>
      </div>



      <div className="container mx-auto px-6 ">
       

      {/* Grid of products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-[#fff] border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col"
          >
            {/* Product image */}
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-200"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No Image
                </div>
              )}
              {p.category && typeof p.category === "object" && (
                <span className="absolute top-3 left-3 bg-[#3b7c8b] text-white text-xs px-2 py-1 rounded">
                  {p.category.name}
                </span>
              )}

            {p.available_quantity == 0 ? (
              <span className="absolute top-3 right-3 bg-gray-400 text-white text-xs px-2 py-1 rounded">
                Out of Stock
              </span>
            ) : p.available_quantity < 5 ? (
              <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                Low Stock
              </span>
            ) : null}

            </div>

            {/* Product content */}
            <div className="p-4 flex-1 flex flex-col">
              <div >
                <h3 className="text-lg font-light mb-2">{p.name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {p.description}
                </p>
              </div>
              <div className="flex items-center justify-between mb-3 pt-3 mt-auto">
                <span className="text-base font-light text-[#3b7c8b]">
                  EGP {p.price_per_unit}/day
                </span>
                <span className="text-sm text-gray-500">
                  {p.available_quantity} available
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 pt-0 flex gap-7">
            <Link
            key={p.id}
            href={`/products/${p.id}`} >
              <button
               
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100 transition"
              >
                View Details
              </button>
              </Link>

              <button
                onClick={() =>
                  addToCart({
                    product_id: p.id,
                    name: p.name,
                    price: Number( p.price_per_unit),
                    quantity: 1,
                    description: p.description,
                    category: typeof p.category === "object" ? p.category.name : p.category,
                    image: p.image,
                  })
              }
                disabled={p.available_quantity == 0}
                className="flex-1 bg-[#6bc3cf] text-white rounded-md px-4 py-2 text-sm hover:bg-[#3b7c8b] disabled:bg-gray-400 transition"
              >
                Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No products found.
        </p>
      )}


      </div> 
    </section>
  );
}



