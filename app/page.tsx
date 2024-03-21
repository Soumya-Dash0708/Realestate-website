import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Newlist from "@/components/Newlist";
import Card from "@/components/Card";

import Accordion from "@/components/Accordion";
import Contactinfo from "@/components/Contactinfo";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Login from "@/components/Login";
import Review from "@/components/Review";

export default function Home() {
  return (
    <main>
      <div className="h-full bg-banner-bg bg-cover bg-center">
        <div className="h-full bg-[#1B1212] opacity-70 text-white">
          <Navbar />
          <Banner />
        </div>
      </div>

      <Mission />
      <br />
      <Newlist />
      <br />
      <br />
      <Card />
      <Review />
      <Accordion />
      <Contactinfo />
      <Newsletter />
      <Footer />
      {/* <Login/> */}
    </main>
  );
}
