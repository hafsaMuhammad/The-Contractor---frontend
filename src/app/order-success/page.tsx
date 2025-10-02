import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function OrderSuccess({ searchParams }: { searchParams: { orderId?: string } }) {
  const orderId = searchParams?.orderId;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />

      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Order Submitted!
      </h1>

      <p className="text-gray-600 text-center mb-6 max-w-md">
        Thank you for your order. We&apos;ll contact you within 24 hours to confirm the
        details and arrange delivery.
      </p>

      <div className="mt-6 inline-block rounded-lg bg-gray-100 px-6 py-3 mb-3">
        <p className="text-sm font-medium text-gray-600">Order Number</p>
        <p className="mt-1 text-lg font-semibold text-[#3b7c8b]">
          #{orderId}
        </p>
      </div>

      <Link href="/" className="text-sm text-gray-600 hover:underline mt-1">
        ← Back to Home
      </Link>
    </div>
  );
}
