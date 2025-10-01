"use client";
import Image from "next/image";


export default function Aboutus() {
  return (
<div className="bg-[#0c2132]  h-screen   ">

  <div className="container mx-auto px-6 py-16 items-center bg-[#0c2132] ">
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
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white ">
                Professional Construction <br /> Product Rental
            </h1>

            <p className="mt-4 text-lg text-blue-100">
            Get the right equipment for your construction project. Quality
            machinery, competitive rates, and reliable service you can trust.
            </p>
    </div>
  </div>
</div>
  );
}
