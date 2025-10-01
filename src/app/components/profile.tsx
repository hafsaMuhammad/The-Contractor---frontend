"use client";
import { useState } from "react";
import { API_URL } from "../utils/api";
import { useUser } from "../hooks/useUser"; 


export default function Profile() {
    const { user, loading } = useUser();
    if (loading) {
        return <p className="text-center py-20">Loading...</p>;
      }

      



  if (user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 container mx-auto py-10 px-4  h-screen">
        <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8 text-left space-y-4 p-6 shadow ">
          <h2 className="text-xl font-semibold mb-6 text-[#333]">Account Info</h2>
          <label className="text-sm text-gray-600">Username</label>
          <p className="border border-gray-200 rounded-lg px-3 py-2 w-full"> {user.username}</p>
          <label className="text-sm text-gray-600">Full Name</label>
          <p className="border border-gray-200 rounded-lg px-3 py-2 w-full"> {user.full_name}</p>
          <label className="text-sm text-gray-600">Phone:</label>
          <p  className="border border-gray-200 rounded-lg px-3 py-2 w-full">{user.phone}</p>
          <label className="text-sm text-gray-600">Location:</label>
          <p className="border border-gray-200 rounded-lg px-3 py-2 w-full"> {user.default_location_text || "Not set"}</p>

          <button
            className="mt-4 w-full py-2 bg-[#6bc3cf] text-white rounded-md hover:bg-[#3b7c8b] transition"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload(); 
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

}