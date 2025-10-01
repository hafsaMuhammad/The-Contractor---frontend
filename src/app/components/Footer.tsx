"use client";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Contact from "./contact";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      {/* Top CTA Section */}
      <div className="bg-[#1E3A8A] text-center py-10 bg-gray-50">
        <h2 className="text-2xl font-bold text-black">Ready to Get Started?</h2>
        <p className="mt-2 text-gray-500">Contact us today for Products availability and pricing</p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#6bc3cf] hover:bg-[#3b7c8b] text-white px-6 py-2 rounded-lg font-semibold shadow-md">
            Call (+20) 01132781
          </button>
         
        </div>
      </div>

    <Contact/>
    </footer>
  );
}
