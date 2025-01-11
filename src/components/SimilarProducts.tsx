import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from 'react-router-dom';

interface SimilarProductsProps {
  products: Array<{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  }>;
}

const SimilarProducts = ({ products }: SimilarProductsProps) => {
  const { addToCart } = useCart();

  if (products.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Similar Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <Link to={`/product/${product.id}`}>
              <CardHeader>
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
            </Link>
            <CardContent>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-primary">${product.price}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button 
                className="w-full"
                onClick={() => addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image
                })}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;