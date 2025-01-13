import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import XLBlack from "../images/6.png";
import Premiumcartige from "../images/5.png";
import premuim from "../images/1.png";
import colorjet from "../images/2.png";

const popularProducts = [
  {
    id: 1,
    name: "Enterprise LaserJet Pro",
    price: 599.99,
    description: "High-speed professional printer with advanced networking capabilities. Perfect for businesses with high-volume printing needs.",
    image: premuim,
    category: "printers",
    features: ["Up to 45 ppm", "Automatic duplex printing", "500-sheet input tray", "Network-ready"]
  },
  {
    id: 2,
    name: "ColorJet X3000",
    price: 449.99,
    description: "Professional color laser printer for stunning outputs. Ideal for marketing materials and presentations.",
    image: colorjet,
    category: "printers",
    features: ["4800 x 1200 dpi", "Wireless printing", "Touch screen display", "Energy efficient"]
  },
  {
    id: 6,
    name: "Premium Color Pack",
    price: 89.99,
    description: "High-yield color cartridge set for professional printing needs. Long-lasting and vibrant colors.",
    image: Premiumcartige,
    category: "cartridges",
    features: ["6,000 page yield", "Fade-resistant", "Smudge-proof", "Eco-friendly"]
  },
  {
    id: 7,
    name: "XL Black Cartridge",
    price: 49.99,
    description: "Extended life black cartridge for maximum printing efficiency. Perfect for text-heavy documents.",
    image: XLBlack,
    category: "cartridges",
    features: ["10,000 page yield", "Quick-dry formula", "Sharp text quality", "Cost-effective"]
  }
];

const PopularProducts = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: typeof popularProducts[0]) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of high-quality printers and supplies designed to meet your professional needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <Link to={`/product/${product.id}`}>
                  <CardHeader>
                    <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-2xl font-bold text-primary mt-4">${product.price}</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;