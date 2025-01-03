import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import PopularProducts from "@/components/PopularProducts";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <PopularProducts />
        <FeaturedProducts />
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default Index;