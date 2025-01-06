import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Support from "@/components/Support";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Categories />
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