"use client";
import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <section className="bg-blue-800 text-white header">
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
            <div className="flex items-center text-center space-x-4 space-y-5">
            <Image
                src="/logo-draw.jpg"
                alt="logo"
                width={60}
                height={60}
                className="object-cover border border-gray-300 shadow-md "
            />
            <div className="flex flex-col">
                <h3 className="text-l md:text-lg font-bold leading-tight font-light uppercase logo-name">
                    The Contractor
                </h3>
                <p className="mt-1 text-sm text-blue-100 uppercase">
                    Home Improvement
                </p>
            </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Professional Construction <br /> Product Rental
            </h1>

            <p className="mt-4 text-lg text-blue-100">
            Get the right equipment for your construction project. Quality
            machinery, competitive rates, and reliable service you can trust.
            </p>

            <div className="mt-6 flex gap-4">
            <Link href="/products">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md header-btn">
                    Browse Products
                </button>
            </Link>
            <a href="#contact">
                <button className="bg-white text-gray-800 font-medium px-6 py-3 rounded-md hover:bg-[#ddd]">
                    Contact Us
                </button>
            </a>
            </div>
        </div>

        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
            src="/header2.jpg" 
            alt="Excavator"
            width={600}
            height={400}
            className="object-cover"
            />
        </div>
        </div>
</section> 
  );
}



