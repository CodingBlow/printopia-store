import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import FeaturedProducts from "@/components/FeaturedProducts";
import Support from "@/components/Support";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PopularProducts />
        <FeaturedProducts />
        <Testimonials />
        <Support />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;