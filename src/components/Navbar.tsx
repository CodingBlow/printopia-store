import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { updateQuantity, clearCart } from "@/store/cartSlice";
import CartItem from "./CartItem";
import { toast } from "./ui/use-toast";
import CheckoutForm from "./CheckoutForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              Monto-Print
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/products"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="/blog"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </a>
            <a
              href="/setup-guide"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Setup Guide
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
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
                    <p className="text-muted-foreground">Your cart is empty</p>
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
                              className="w-full"
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
