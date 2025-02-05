import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Find the Best Deals on Top Products</h1>
      <p className="text-lg text-gray-600 mb-6">
        Shop the latest collections with unbeatable discounts. Limited-time offers!
      </p>
      
      <Link
        to="/products"
        className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-all"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Hero;
