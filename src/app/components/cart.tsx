"use client";
import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "./cart-context";
import Link from "next/link";


export default function CartPage() {
  const { cartItems, cartCount, addToCart, removeFromCart, clearCart } = useCart();

  // Calculate total for summary
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-xl font-semibold mb-6">Shopping Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product_id}
                className="border rounded-lg p-4 flex items-center justify-between shadow-sm border-gray-300"
              >
                {/* Product Info */}
                <div className="flex items-start space-x-4">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded">
                      No Image
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                    <span className="text-xs bg-gray-200 px-2 py-1 rounded mt-1 inline-block">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-end space-y-2">
                  <p className="font-semibold">EGP {item.price} /day</p>
                  <div className="flex items-center border rounded">
                    <button
                      className="px-2 py-1"
                      onClick={() =>
                        removeFromCart(item.product_id, "decrease")
                      }
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      className="px-2 py-1"
                      onClick={() =>
                        addToCart({
                          ...item,
                          quantity: 1, // increase by 1
                        })
                      }
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    Subtotal: {(item.price * item.quantity).toFixed(2)} EGP
                  </p>
                  <Trash2
                    className="text-red-500 cursor-pointer"
                    onClick={() => removeFromCart(item.product_id, "remove")}
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="border rounded-lg p-6 shadow-sm h-fit border-gray-300">
          <h3 className="font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Items ({cartCount})</span>
            <span>{total.toFixed(2)} EGP</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span className="text-green-500">Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold mb-4">
            <span>Total (per day)</span>
            <span className="text-[#3b7c8b]">{total.toFixed(2)} EGP</span>
          </div>
          <Link href="/orders">
            <button className="w-full bg-[#6bc3cf] hover:bg-[#3b7c8b] text-white font-medium py-2 px-4 rounded-lg">
                Proceed to Order
            </button>
          </Link>
          <p className="text-xs text-gray-500 mt-2">
            Prices are per day. Final cost will be calculated based on rental
            duration.
          </p>
        </div>
      </div>
    </div>
  );
}
