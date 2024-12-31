import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Printer, ShoppingCart, Package, Wrench, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CartItem from "@/components/CartItem";
import CheckoutForm, { CheckoutFormData } from "@/components/CheckoutForm";
import OrderSuccess from "@/components/OrderSuccess";

const categories = [
  {
    id: "printers",
    name: "Professional Laser Printers",
    icon: Printer,
    products: [
      {
        id: 1,
        name: "Enterprise LaserJet Pro",
        price: 599.99,
        description: "High-speed professional printer for large offices",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=500"
      },
      {
        id: 2,
        name: "ColorJet X3000",
        price: 449.99,
        description: "Advanced color laser printer with networking",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=500"
      },
      {
        id: 3,
        name: "SmartPrint 5000",
        price: 699.99,
        description: "Smart-enabled professional printer",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=500"
      },
      {
        id: 4,
        name: "WorkForce Pro",
        price: 529.99,
        description: "Reliable workplace printer solution",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=500"
      },
      {
        id: 5,
        name: "EcoJet Premium",
        price: 399.99,
        description: "Eco-friendly professional printer",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=500"
      }
    ]
  },
  {
    id: "cartridges",
    name: "Ink Cartridge Sets",
    icon: Package,
    products: [
      {
        id: 6,
        name: "Premium Color Pack",
        price: 89.99,
        description: "High-yield color cartridge set",
        image: "https://images.unsplash.com/photo-1563199284-752b7b17578a?auto=format&fit=crop&q=80&w=500"
      },
      {
        id: 7,
        name: "XL Black Cartridge",
        price: 49.99,
        description: "Extended life black cartridge",
        image: "https://images.unsplash.com/photo-1563199284-752b7b17578a?auto=format&fit=crop&q=80&w=500"
      },
      {
        id: 8,
        name: "Office Value Pack",
        price: 129.99,
        description: "Complete office cartridge set",
        image: "https://images.unsplash.com/photo-1563199284-752b7b17578a?auto=format&fit=crop&q=80&w=500"
      },
      {
        id: 9,
        name: "Photo Print Pack",
        price: 69.99,
        description: "Photo-quality ink cartridges",
        image: "https://images.unsplash.com/photo-1563199284-752b7b17578a?auto=format&fit=crop&q=80&w=500"
      },
      {
        id: 10,
        name: "Economy Pack",
        price: 79.99,
        description: "Value cartridge bundle",
        image: "https://images.unsplash.com/photo-1563199284-752b7b17578a?auto=format&fit=crop&q=80&w=500"
      }
    ]
  },
  {
    id: "support",
    name: "Premium Support Packages",
    icon: Wrench,
    products: [
      {
        id: 11,
        name: "24/7 Priority Support",
        price: 199.99,
        description: "Round-the-clock technical assistance",
        image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=500"
      },
      {
        id: 12,
        name: "Annual Maintenance",
        price: 299.99,
        description: "Yearly maintenance and support package",
        image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=500"
      },
      {
        id: 13,
        name: "Business Support",
        price: 399.99,
        description: "Comprehensive business support solution",
        image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=500"
      },
      {
        id: 14,
        name: "Remote Assistance",
        price: 149.99,
        description: "Remote troubleshooting and support",
        image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=500"
      },
      {
        id: 15,
        name: "Setup Service",
        price: 99.99,
        description: "Professional printer setup service",
        image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=500"
      }
    ]
  }
];

const Products = () => {
  const { addToCart, items, removeFromCart, clearCart, checkout } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    const item = items.find(i => i.id === id);
    if (item) {
      removeFromCart(id);
      if (newQuantity > 0) {
        addToCart({ ...item, quantity: newQuantity });
      }
    }
  };

  const handleCheckout = (data: CheckoutFormData) => {
    checkout();
    setShowCheckoutForm(false);
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  if (showSuccess) {
    return <OrderSuccess />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Our Products</h1>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <ShoppingCart className="h-5 w-5" />
                Cart ({items.length})
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px]">
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
              </SheetHeader>
              <div className="mt-8">
                {items.length === 0 ? (
                  <p className="text-muted-foreground">Your cart is empty</p>
                ) : (
                  <>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <CartItem
                          key={item.id}
                          {...item}
                          category={categories.find(cat => 
                            cat.products.some(p => p.id === item.id)
                          )?.id || ""}
                          onQuantityChange={handleQuantityChange}
                        />
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex justify-between font-medium mb-4">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      {!showCheckoutForm ? (
                        <Button 
                          className="w-full" 
                          onClick={() => setShowCheckoutForm(true)}
                        >
                          Proceed to Checkout
                        </Button>
                      ) : (
                        <CheckoutForm onSubmit={handleCheckout} />
                      )}
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="gap-2"
            >
              <category.icon className="h-5 w-5" />
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories
            .find(cat => cat.id === selectedCategory)
            ?.products.map((product) => (
              <Card key={product.id} className="flex flex-col">
                <CardHeader>
                  <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    {product.name}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {categories.find(cat => cat.id === selectedCategory)?.name}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-lg font-bold mt-2">${product.price}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button 
                    className="w-full gap-2"
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price
                    })}
                  >
                    Add to Cart
                    <ChevronRight className="h-4 w-4" />
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
