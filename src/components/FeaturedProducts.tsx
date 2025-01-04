import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, Wrench, Clock } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: 11,
    name: "24/7 Priority Support",
    price: 199.99,
    description: "Round-the-clock technical assistance with priority response times",
    icon: Clock,
  },
  {
    id: 12,
    name: "Annual Maintenance",
    price: 299.99,
    description: "Comprehensive yearly maintenance package with preventive care",
    icon: Wrench,
  },
  {
    id: 13,
    name: "Business Support",
    price: 399.99,
    description: "Complete business support solution with dedicated account manager",
    icon: Printer,
  },
];

const FeaturedProducts = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      category: "support"
    }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Premium Support Packages</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose from our carefully curated support packages designed to keep your printing operations running smoothly
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <Link to={`/product/${product.id}`}>
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    <product.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-center">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-center text-primary">${product.price}</p>
                </CardContent>
              </Link>
              <CardFooter className="mt-auto">
                <Button 
                  className="w-full"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;