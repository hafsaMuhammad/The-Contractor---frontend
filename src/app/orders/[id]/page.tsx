"use client";

import { useState } from "react";
import { API_URL, getAuthHeaders } from "../../utils/api";

type OrderItem = {
  product_id: string;
  quantity: number;
};

type OrderForm = {
  contact_name: string;
  contact_phone: string;
  location_text: string;
  latitude?: number;
  longitude?: number;
  note?: string;
  items: OrderItem[];
};

export default function OrderPage() {
  const [form, setForm] = useState<OrderForm>({
    contact_name: "",
    contact_phone: "",
    location_text: "",
    latitude: undefined,
    longitude: undefined,
    note: "",
    items: [{ product_id: "", quantity: 1 }],
  });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/orders/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders(),
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setMsg("Order placed successfully ✅");
      setForm({
        contact_name: "",
        contact_phone: "",
        location_text: "",
        latitude: undefined,
        longitude: undefined,
        note: "",
        items: [{ product_id: "", quantity: 1 }],
      });
    } else {
      const data = await res.json();
      setMsg("Error: " + JSON.stringify(data));
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Place an Order</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
        <input
          placeholder="Name"
          value={form.contact_name}
          onChange={(e) => setForm({ ...form, contact_name: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Phone"
          value={form.contact_phone}
          onChange={(e) => setForm({ ...form, contact_phone: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Location"
          value={form.location_text}
          onChange={(e) => setForm({ ...form, location_text: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Product ID"
          value={form.items[0].product_id}
          onChange={(e) =>
            setForm({
              ...form,
              items: [{ ...form.items[0], product_id: e.target.value }],
            })
          }
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={form.items[0].quantity}
          onChange={(e) =>
            setForm({
              ...form,
              items: [{ ...form.items[0], quantity: parseInt(e.target.value) }],
            })
          }
          className="border p-2"
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded mt-2"
        >
          Submit Order
        </button>
      </form>
      {msg && <p className="mt-2">{msg}</p>}
    </div>
  );
}
