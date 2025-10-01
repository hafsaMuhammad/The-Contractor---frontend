"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { API_URL } from "../utils/api";
import Image from "next/image";
import { useCart } from "./cart-context";





type Category = {
  id: number;
  name: string;
  created_at?: string;
  updated_at?: string;
};

type Unit = {
  id: number;
  name: string;
  created_at?: string;
  updated_at?: string;
};
type Option = {
  id: number;
  name: string;
  price: number;
};

type Product = {
  id: number;
  name: string;
  price_per_unit: number;
  available_quantity: number;
  description: string;
  image?: string;
  category: Category | string; 
  unit : Unit | string; 
  options: Option[];
};



export default function EquipmentDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);



  useEffect(() => {
    if (id) {
      fetch(`${API_URL}/products/${id}/`)
        .then((res) => res.json())
        .then((data) => {
          console.log("API response for single product:", data);
          setProduct(data.product);
        })
        .catch(console.error);


    }
  }, [id]);

  if (!product) {
    return (
      <div className="text-center text-gray-500 py-20">
        Loading product details...
      </div>
    );
  }


  const displayPrice = selectedOption ? selectedOption.price : product.price_per_unit;


  return (
    <div className="min-h-screen bg-white">

      <div className="max-w-6xl mx-auto px-6 py-6">
        <Link href="/products" className="text-sm text-gray-600 hover:underline">
          ← Back to Products
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Left: Image */}

          <div className="relative w-full aspect-[4/3]">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No Image
                </div>
              )}

              {product.category && typeof product.category === "object" && (
                <span className="absolute top-3 left-3 bg-[#6bc3cf] text-white text-xs px-2 py-1 rounded">
                  {product.category.name}
                </span>
              )}
          </div>


          {/* Right: Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-medium text-gray-800">{product.name}</h2>
              {product.unit && typeof product.unit === "object" && (
                <p className="text-l font-medium text-gray-500">
                  {product.unit.name}
                </p>
              )}
              <p className="text-gray-600 mt-2">
               {product.description}
              </p>

              <p className="text-2xl font-base text-[#3b7c8b] mt-4">EGP {product.price_per_unit}/day</p>
           
            


              <p className="text-sm text-gray-500">
                {product.available_quantity == 0 ? (
                  <span className="text-red-600 font-semibold">Out of Stock</span>
                ) : (
                  <>
                    {product.available_quantity} units available
                    {product.available_quantity < 5 && (
                      <span className="ml-2 bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs">
                        Low Stock
                      </span>
                    )}
                  </>
                )}
              </p>

              {/* Rental Info Box */}
              <div className="mt-6 border rounded-lg p-4 space-y-3 text-sm text-gray-700">
                <p>✅ Free delivery within 25 miles</p>
                <p>✅ Full insurance coverage included</p>
                <p>✅ 24/7 technical support</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button              
                onClick={() =>
                  addToCart({
                    product_id: product.id,
                    name: product.name,
                    price: Number(product.price_per_unit),
                    quantity: 1,
                    description: product.description,
                    category: typeof product.category === "object" ? product.category.name : product.category,
                    image: product.image,
                  })
                }
                disabled={product.available_quantity == 0} 
                className="flex-1 border rounded-lg py-2 hover:bg-gray-100 text-gray-500">
                Add to Cart
              </button>
              <Link
                href="/cart"
                className="flex-1 bg-[#6bc3cf] text-white rounded-lg py-2 hover:bg-[#3b7c8b] text-center"
                onClick={() =>
                  addToCart({
                    product_id: product.id,
                    name: product.name,
                    price: Number(product.price_per_unit),
                    quantity: 1,
                    description: product.description,
                    category:
                      typeof product.category === "object"
                        ? product.category.name
                        : product.category,
                    image: product.image,
                  })
                }
              >
                Order Now
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
