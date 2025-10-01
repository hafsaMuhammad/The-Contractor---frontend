"use client";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// 0F172A
export default function Contact() {
  return (
    <div className="bg-[#0c2132] text-gray-300 " id="contact">

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">

          <Image
            src="/logo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full object-cover border border-gray-300 shadow-md p-1"
            />
          </div>
          <p className="text-gray-400">
            Your trusted partner for construction product rental and supply.
            Professional service, quality product, competitive rates.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2"><PhoneIcon className="h-5 w-5" /> (+20) 0112324</li>
            <li className="flex items-center gap-2"><EnvelopeIcon className="h-5 w-5" /> info@contractor.com</li>
            <li className="flex items-center gap-2"><MapPinIcon className="h-5 w-5" /> 123 Industrial Blvd, City, ST 12345</li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-white font-semibold mb-4">Business Hours</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2"><ClockIcon className="h-5 w-5" /> Mon - Fri: 7:00 AM - 6:00 PM</li>
            <li className="flex items-center gap-2"><ClockIcon className="h-5 w-5" /> Saturday: 8:00 AM - 4:00 PM</li>
            <li className="flex items-center gap-2"><ClockIcon className="h-5 w-5" /> Sunday: Closed</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Product Catalog</a></li>
            <li><a href="#">Rental Terms</a></li>
            <li><a href="#">Safety Guidelines</a></li>
            <li> <a href="#">Customer Support</a></li>
            <li><a href="#">Emergency Service</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
