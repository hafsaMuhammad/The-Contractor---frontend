import { TruckIcon, ShieldCheckIcon, BanknotesIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

export default function WhyChoose() {
  const features = [
    { icon: TruckIcon, title: "Free Delivery", desc: "Fast and reliable delivery to your site." },
    { icon: ShieldCheckIcon, title: "Fully Insured", desc: "All rentals come with full insurance coverage." },
    { icon: BanknotesIcon, title: "Zero Deposit", desc: "Rent without heavy upfront payments." },
    { icon: BriefcaseIcon, title: "10+ Years Experience", desc: "Trusted partner in the construction industry." },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose The Contractor?</h2>
        <p className="text-gray-600 mb-10">We provide more than just product rental – we’re your construction project partner.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <item.icon className="h-12 w-12 text-[#6bc3cf] mb-4" />
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
