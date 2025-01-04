import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductDescription from "@/components/ProductDescription";
import SimilarProducts from "@/components/SimilarProducts";
import { categories } from './Products';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Find the product from all categories
  const product = categories.flatMap(cat => cat.products).find(p => p.id === Number(id));
  
  if (!product) {
    return <div>Product not found</div>;
  }

  // Find category of the product
  const productCategory = categories.find(cat => 
    cat.products.some(p => p.id === product.id)
  );

  // Get similar products (from same category, excluding current product)
  const similarProducts = productCategory
    ? productCategory.products.filter(p => p.id !== product.id).slice(0, 4)
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProductDescription product={product} category={productCategory?.name || ""} />
        <SimilarProducts products={similarProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;