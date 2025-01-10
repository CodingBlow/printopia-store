import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDescription from "@/components/ProductDescription";
import SimilarProducts from "@/components/SimilarProducts";
import PrinterSupportPopup from "@/components/PrinterSupportPopup";
import { categories } from './Products';

const ProductDetail = () => {
  const { id } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Find the product from all categories
  const product = categories.flatMap(cat => cat.products).find(p => p.id === Number(id));
  
  // Find category of the product
  const productCategory = categories.find(cat => 
    cat.products.some(p => p.id === product.id)
  );

  // Get similar products (from same category, excluding current product)
  const similarProducts = productCategory
    ? productCategory.products.filter(p => p.id !== product.id).slice(0, 4)
    : [];

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 2000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once when component mounts

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProductDescription product={product} category={productCategory?.name || ""} />
        <SimilarProducts products={similarProducts} />
        <PrinterSupportPopup 
          isOpen={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;