"use client";

import { useState } from "react";
import { API_URL } from "../utils/api";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    full_name: "",
    phone: "",
  });
  const [msg, setMsg] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      setMsg("Account created ✅");
    } else {
      setMsg("Error: " + JSON.stringify(data));
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Sign Up</h1>
      <form className="flex flex-col gap-2 max-w-sm" onSubmit={handleRegister}>
        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Full Name"
          value={form.full_name}
          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="border p-2"
        />
        <button type="submit" className="bg-green-600 text-white py-2 rounded">
          Register
        </button>
      </form>
      {msg && <p className="mt-2">{msg}</p>}
    </div>
  );
}
