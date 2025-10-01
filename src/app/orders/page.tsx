"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useCart } from "../components/cart-context";
import { API_URL } from "../utils/api";
import { useRouter } from "next/navigation";


export default function OrderPage() {
  const { cartItems, clearCart } = useCart();


  const [form, setForm] = useState({
    contact_name: "",
    contact_phone: "",
    location_text: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${API_URL}/me/`, {
        headers: {
          "Authorization": `Token ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setForm((prev) => ({
            ...prev,
            contact_name: data.full_name || "",
            contact_phone: data.phone || "",
            location_text: data.default_location_text || "",

            
          }));
        })
        .catch((err) => console.error("Profile fetch error", err));
    }
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // setMessage(null);

    try {
      const orderPayload = {
        ...form,
        items: cartItems.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
        })),
      };

      const token = localStorage.getItem("token");

      const res = await fetch(`${API_URL}/orders/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" ,  
          ...(token ? { "Authorization": `Token ${token}` } : {}),
        },
        body: JSON.stringify(orderPayload),
      });

      if (!res.ok) {
        const errorText = await res.text(); 
        throw new Error(errorText);
      }
      // setMessage(`✅ Order submitted successfully! Order ID: ${data.id}`);
    router.push("/order-success");
    clearCart();
      
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 h-screen">
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* LEFT SIDE - FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-6 rounded-lg shadow lg:col-span-2"
          >
            <h2 className="text-xl font-semibold mb-6">Complete Your Order</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="contact_name"
                placeholder="Name"
                value={form.contact_name}
                onChange={handleChange}
                required
                className="border border-gray-200 rounded-lg px-3 py-2 w-full  col-span-2"
              />
              <input
                type="text"
                name="contact_phone"
                placeholder="Phone"
                value={form.contact_phone}
                onChange={handleChange}
                required
                className="border border-gray-200 rounded-lg px-3 py-2 w-full  col-span-2"
              />
              <input
                type="text"
                name="location_text"
                placeholder="Address"
                value={form.location_text}
                onChange={handleChange}
                required
                className="border border-gray-200 rounded-lg px-3 py-2 w-full col-span-2"
              />
            </div>
            <textarea
              name="note"
              placeholder="Additional Notes"
              value={form.note || ""}
              onChange={handleChange}
              className="border border-gray-200 rounded-lg px-3 py-2 w-full mb-4"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6bc3cf] text-white py-2 rounded hover:bg-[#3b7c8b] disabled:bg-gray-400"
            >
              {loading ? "Submitting..." : "Submit Order"}
            </button>

            {message && <p className="mt-3 text-center">{message}</p>}
          </form>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <div className="bg-white shadow-md rounded-lg p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="space-y-2 text-gray-700">
              {cartItems.map((item) => (
                <div key={item.product_id} className="flex justify-between border-b pb-2">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>{(item.price * item.quantity).toFixed(2)} EGP</span>
                </div>
              ))}

              <div className="flex justify-between border-t pt-3 font-semibold text-lg">
                <span>Total</span>
                <span className="text-[#3b7c8b]">{total.toFixed(2)} EGP</span>
              </div>
            </div>

            <ul className="text-xs text-gray-500 mt-4 space-y-1">
              <li>• Free delivery within 25 miles</li>
              <li>• Equipment includes full insurance</li>
              <li>• 24/7 technical support included</li>
              <li>• We’ll contact you to confirm details</li>
            </ul>
          </div>
        </>
      )}
     

    </div>
    
  );
}
