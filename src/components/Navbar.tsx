import { useState } from "react";
import { Search, ShoppingCart, Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { updateQuantity, clearCart } from "@/store/cartSlice";
import CartItem from "./CartItem";
import { toast } from "./ui/use-toast";
import CheckoutForm from "./CheckoutForm";
import logo from "../images/Screenshot 2025-01-29 173923.png"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector((state: RootState) => state.cart.total);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleCheckoutSubmit = (data: any) => {
    console.log("Order details:", {
      items: cartItems,
      total: cartTotal,
      ...data,
    });
    toast({
      title: "Order placed successfully!",
      description:
        "Thank you for your purchase. We'll process your order shortly.",
    });
    dispatch(clearCart());
    setShowCheckoutForm(false);
  };

  const handleCheckoutClick = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out.",
        variant: "destructive",
      });
      return;
    }
    setShowCheckoutForm(true);
  };

  return (
    <div className="border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-red-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center h-8 text-white text-sm">
            {/* <a
              href="tel:1-800-652-2666"
              className="flex items-center gap-1 hover:text-gray-200"
            >
              <Phone className="h-3 w-3" />
              1-800-652-2666
            </a> */}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/products"
                className="text-gray-800 hover:text-red-600 font-medium"
              >
                Printers
              </Link>
              <Link
                to="/setup-guide"
                className="text-gray-800 hover:text-red-600 font-medium"
              >
                Support
              </Link>
              <Link
                to="/blog"
                className="text-gray-800 hover:text-red-600 font-medium"
              >
                Resources
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-red-600 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <form
                onSubmit={handleSearch}
                className="relative hidden md:block"
              >
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-64 pl-4 pr-10 py-2 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:ring-red-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 text-gray-400 hover:text-red-600"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </form>

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative hover:text-red-600"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {cartItems.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItems.length}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8">
                    {cartItems.length === 0 ? (
                      <p className="text-gray-500">Your cart is empty</p>
                    ) : (
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <CartItem
                            key={item.id}
                            {...item}
                            onQuantityChange={handleQuantityChange}
                          />
                        ))}
                        <div className="pt-4 border-t">
                          <div className="flex justify-between font-medium mb-4">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                          </div>
                          <Dialog
                            open={showCheckoutForm}
                            onOpenChange={setShowCheckoutForm}
                          >
                            <DialogTrigger asChild>
                              <Button
                                className="w-full bg-red-600 hover:bg-red-700 text-white"
                                onClick={handleCheckoutClick}
                              >
                                Checkout
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Checkout</DialogTitle>
                              </DialogHeader>
                              <CheckoutForm onSubmit={handleCheckoutSubmit} />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/products"
                className="text-gray-800 hover:text-red-600 font-medium"
              >
                Printers
              </Link>
              <Link
                to="/setup-guide"
                className="text-gray-800 hover:text-red-600 font-medium"
              >
                Support
              </Link>
              <Link
                to="/blog"
                className="text-gray-800 hover:text-red-600 font-medium"
              >
                Resources
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-red-600 font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
