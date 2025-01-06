import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Support from "@/components/Support";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import QuickSetup from "@/components/QuickSetup";
import BusinessSolutions from "@/components/BusinessSolutions";
import LatestNews from "@/components/LatestNews";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Categories />
        <BusinessSolutions />
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