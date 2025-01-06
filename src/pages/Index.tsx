import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Support from "@/components/Support";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import QuickSetup from "@/components/QuickSetup";
import LatestNews from "@/components/LatestNews";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <QuickSetup />
        <FeaturedProducts />
        <Testimonials />
        <LatestNews />
        <Support />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;