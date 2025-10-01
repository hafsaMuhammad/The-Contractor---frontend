"use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { API_URL } from "../../utils/api";

// type Product = {
//   id: number;
//   name: string;
//   price_per_unit: number;
//   description?: string;
// };

// export default function ProductPage() {
//   const { id } = useParams<{ id: string }>();
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     if (id) {
//       fetch(`${API_URL}/products/${id}/`)
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("API response for single product:", data);
//           setProduct(data.product);
//         })
//         .catch(console.error);


//     }
//   }, [id]);

//   if (!product) {
//     return (
//       <div className="text-center text-gray-500 py-20">
//         Loading product details...
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
//       {/* Title */}
//       <h1 className="text-3xl font-bold text-gray-900 mb-4">
//         {product.name}
//       </h1>

//       {/* Description */}
//       <p className="text-gray-600 mb-6 leading-relaxed">
//         {product.description || "No description available for this product."}
//       </p>

//       {/* Price */}
//       <div className="text-2xl font-semibold text-blue-600 mb-6">
//         💰 {product.price_per_unit} EGP
//       </div>

//       {/* Actions */}
//       <div className="flex gap-4">
//         <Link
//           href={`/orders/${product.id}`}
//           className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           Place Order
//         </Link>
//         <Link
//           href="/"
//           className="border border-gray-300 px-6 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition"
//         >
//           Back to Products
//         </Link>
//       </div>
//     </div>
//   );
// }


import EquipmentDetail from "../../components/EquipmentDetails";

export default function Product() {
  return (
    <div className="bg-[#0F172A] text-gray-300">
        <EquipmentDetail/>
     
    </div>
  );
}
