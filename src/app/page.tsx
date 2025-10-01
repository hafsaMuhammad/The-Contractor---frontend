import WhyChoose from "./components/choose";
import FeaturedEquipment from "./components/FeaturedEquipment";
import Footer from "./components/Footer";
import Header from "./components/theheader"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
 
      <Header/>
      <WhyChoose />
      <FeaturedEquipment />
      <Footer/>

    </div>
  );
}
