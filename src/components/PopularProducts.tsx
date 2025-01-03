import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

const popularProducts = [
  {
    id: 1,
    name: "Enterprise LaserJet Pro",
    price: 599.99,
    description: "High-speed professional printer for large offices",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=500",
    category: "printers"
  },
  {
    id: 6,
    name: "Premium Color Pack",
    price: 89.99,
    description: "High-yield color cartridge set",
    image: "https://images.unsplash.com/photo-1563199284-752b7b17578a?auto=format&fit=crop&q=80&w=500",
    category: "cartridges"
  },
  {
    id: 2,
    name: "ColorJet X3000",
    price: 449.99,
    description: "Advanced color laser printer with networking",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=500",
    category: "printers"
  },
  {
    id: 7,
    name: "XL Black Cartridge",
    price: 49.99,
    description: "Extended life black cartridge",
    image: "https://images.unsplash.com/photo-1563199284-752b7b17578a?auto=format&fit=crop&q=80&w=500",
    category: "cartridges"
  }
];

const PopularProducts = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: typeof popularProducts[0]) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Popular Products</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our most popular printers and cartridges, trusted by businesses worldwide
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularProducts.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-primary">${product.price}</p>
              </CardContent>
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

export default PopularProducts;