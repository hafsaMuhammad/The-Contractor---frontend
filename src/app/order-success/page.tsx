"use client";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function OrderSuccess() {
  const [orderRef, setOrderRef] = useState("");

  useEffect(() => {
    // Generate random order reference if not provided
    const ref = "ORD" + Math.floor(100000 + Math.random() * 900000);
    setOrderRef(ref);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">

      {/* Icon */}
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Order Submitted!
      </h1>

      {/* Message */}
      <p className="text-gray-600 text-center mb-6 max-w-md">
        Thank you for your order. We&apos;ll contact you within 24 hours to confirm the
        details and arrange delivery.
      </p>

      <Link href="/" className="text-sm text-gray-600 hover:underline mt-1">
          ← Back to Home
      </Link>

    </div>
  );
}
