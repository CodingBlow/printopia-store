import React from 'react';
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";

interface ProductDescriptionProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  };
  category: string;
}

const ProductDescription = ({ product, category }: ProductDescriptionProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="space-y-6 order-2 md:order-1">
        <div>
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold text-primary mt-2">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <div className="prose max-w-none">
          <p className="text-gray-600">{product.description}</p>
          <ul className="mt-4 space-y-2">
            <li>Professional grade quality</li>
            <li>1-year warranty included</li>
            <li>Free technical support</li>
            <li>Next-day delivery available</li>
          </ul>
        </div>
        <Button 
          size="lg"
          className="w-full md:w-auto"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
      <div className="space-y-4 order-1 md:order-2">
        <div className="aspect-square overflow-hidden rounded-lg border bg-white">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;