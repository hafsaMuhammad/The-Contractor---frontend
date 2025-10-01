"use client";
import { useState } from "react";
import { API_URL } from "../utils/api";
import { useUser } from "../hooks/useUser"; 
import Profile from "../components/profile"
import { Eye, EyeOff } from "lucide-react";


export default function AuthPage() {
  const { user, loading } = useUser();

  
  const [tab, setTab] = useState<"login" | "register">("login");

  const [showPassword, setShowPassword] = useState(false);


  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    full_name: "",
    default_location_text: "",
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
      window.location.href = "/profile";
    } else {
      setMsg("Error: " + JSON.stringify(data));
    }
  };


  const [loginform, setloginForm] = useState({ username: "", password: "" });
  const [loginmsg, setloginMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginform),
    });

    const login_data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", login_data.token);
      setloginMsg("Logged in ✅");
      window.location.href = "/profile";
    } else {
      setloginMsg("Error: " + login_data.detail);
    }
  };
  
  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }



  if (user) {
    return (

      <>
      <Profile/>
      </>

    );
  }




  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
        {/* Title */}
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          Welcome to The Contractor
        </h1>
        <p className="text-center text-gray-500 text-sm mb-6">
          Login or create an account to get started
        </p>

        {/* Tabs */}
        <div className="flex mb-6 bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setTab("login")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
              tab === "login"
                ? "bg-white shadow text-[#6bc3cf]"
                : "text-gray-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setTab("register")}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
              tab === "register"
                ? "bg-white shadow text-[#6bc3cf]"
                : "text-gray-600"
            }`}
          >
            Register
          </button>
        </div>

        {/* Forms */}
        {tab === "login" ? (
          <div>
          <form className="space-y-4"  onSubmit={handleLogin} >
            <div>
              <label className="text-sm text-gray-600">Username</label>
              <input
                type="text"
                placeholder="Enter your Username"
                value={loginform.username}
                onChange={(e) => setloginForm({ ...loginform, username: e.target.value })}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6bc3cf] text-sm"
              />
            </div>
            <div className="relative">
              <label className="text-sm text-gray-600">Password</label>
              <input
                type= {showPassword ? "text" : "password"} 
                placeholder="Enter your password"
                value={loginform.password}
                onChange={(e) => setloginForm({ ...loginform, password: e.target.value })}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6bc3cf] text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#6bc3cf] text-white rounded-md hover:bg-[#3b7c8b] transition"
            >
              Login
            </button>
          </form>
          {loginmsg && <p className="mt-2">{loginmsg}</p>}
          
            

          </div>
        ) : (
          <div>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="text-sm text-gray-600">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6bc3cf] text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6bc3cf] text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6bc3cf] text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6bc3cf] text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Adress</label>
              <input
                type="text"
                placeholder="Enter your address"
                value={form.default_location_text}
                onChange={(e) => setForm({ ...form, default_location_text: e.target.value })}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6bc3cf] text-sm"
              />
            </div>
            <div className="relative">
              <label className="text-sm text-gray-600">Password</label>
              <input
                type= {showPassword ? "text" : "password"} 
                placeholder="Create a password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6bc3cf] text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#6bc3cf] text-white rounded-md hover:bg-[#3b7c8b] transition"
            >
              Create Account
            </button>
          </form>
          {msg && <p className="mt-2">{msg}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
