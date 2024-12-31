import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Professional Laser Printer",
    price: 299.99,
    description: "High-quality laser printer for office use",
    category: "Printers"
  },
  {
    id: 2,
    name: "Ink Cartridge Set",
    price: 49.99,
    description: "Compatible ink cartridges for laser printers",
    category: "Accessories"
  },
  {
    id: 3,
    name: "Premium Support Package",
    price: 99.99,
    description: "1-year premium technical support",
    category: "Support"
  }
];

const Products = () => {
  const { addToCart, items } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Our Products</h1>
          <Button variant="outline" className="gap-2">
            <ShoppingCart className="h-5 w-5" />
            Cart ({items.length})
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Printer className="h-6 w-6" />
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-bold mt-2">${product.price}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button 
                  className="w-full"
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price
                  })}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;