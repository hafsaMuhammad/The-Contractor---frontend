"use client";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./cart-context"



export default function Navbar() {
    const { cartCount  } = useCart();
  return (
//     <nav className="w-full shadow-md  border-b border-gray-700">
//         <div className="bg-[#0c2132] text-white py-4 px-8 flex justify-between items-center">
//             <Link href="/">
//                 <h1 className="text-lg font-semibold flex items-center gap-2">
//                 <img
//                     src="logo-draw.jpg"
//                     alt="contractor Logo"
//                     className="w-8 h-8 object-contain"
//                 />
//                 The Contractor
//                 </h1>
//             </Link>
//             <nav className="flex gap-6 text-sm">
        
//                 <Link href="/" className="hover:text-[#6bc3cf]">
//                     Home
//                 </Link>
//                 <Link href="/products" className="hover:text-[#6bc3cf]">
//                     Products
//                 </Link>
//                 <Link href="/about" className="hover:text-[#6bc3cf]">
//                     About
//                 </Link>
//                 <Link href="/contact" className="hover:text-[#6bc3cf]">
//                     Contact
//                 </Link>
//             </nav>
//             <div className="flex items-center gap-4">
//             <Link href="/cart">
//   <button className="relative">
//     🛒
//     {cartCount > 0 && (
//       <span className="absolute -top-2 -right-2 bg-[#6bc3cf] text-xs rounded-full px-1.5">
//         {cartCount}
//       </span>
//     )}
//   </button>
// </Link>

//                 <Link href="/auth">
//                     <button >👤</button>
//                 </Link>
//             </div>
//       </div>
//     </nav>


<nav className="w-full shadow-md border-b border-gray-700">
  <div className="bg-[#0c2132] text-white py-4 px-4 sm:px-8 flex justify-between items-center">
    {/* Logo */}
    <Link href="/">
      <h1 className="text-lg font-semibold flex items-center gap-2">
        <img
          src="/logo-draw.jpg"
          alt="contractor Logo"
          className="w-8 h-8 object-contain"
        />
        <span className="hidden sm:inline">The Contractor</span>
      </h1>
    </Link>

    {/* Links for medium+ screens */}
    <nav className="hidden md:flex gap-6 text-sm">
      <Link href="/" className="hover:text-[#6bc3cf]">Home</Link>
      <Link href="/products" className="hover:text-[#6bc3cf]">Products</Link>
      <Link href="/about" className="hover:text-[#6bc3cf]">About</Link>
      <Link href="/contact" className="hover:text-[#6bc3cf]">Contact</Link>
    </nav>

    {/* Icons */}
    <div className="flex items-center gap-4">
      <Link href="/cart">
        <button className="relative">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#6bc3cf] text-xs rounded-full px-1.5">
              {cartCount}
            </span>
          )}
        </button>
      </Link>
      <Link href="/auth">
        <button>👤</button>
      </Link>

      {/* Hamburger for mobile */}
      <button className="md:hidden text-xl ml-2">
        ☰
      </button>
    </div>
  </div>

  {/* Mobile menu (hidden by default) */}
  <div className="md:hidden bg-[#0c2132] text-white px-4 py-2 flex flex-col gap-2">
    <Link href="/" className="hover:text-[#6bc3cf]">Home</Link>
    <Link href="/products" className="hover:text-[#6bc3cf]">Products</Link>
    <Link href="/about" className="hover:text-[#6bc3cf]">About</Link>
    <Link href="/contact" className="hover:text-[#6bc3cf]">Contact</Link>
  </div>
</nav>

  );
}


