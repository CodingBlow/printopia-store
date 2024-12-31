import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">PrintTech</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/products" className="text-gray-700 hover:text-primary transition-colors">Products</a>
            <a href="/support" className="text-gray-700 hover:text-primary transition-colors">Support</a>
            <a href="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
            <a href="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;