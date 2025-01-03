import React, { createContext, useContext, useState } from 'react';
import { toast } from "sonner";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  checkout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.id === item.id);
      if (existingItem) {
        return currentItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...currentItems, { ...item, quantity: 1 }];
    });
    toast.success("Added to cart", {
      description: `${item.name} has been added to your cart.`,
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setItems(items => items.filter(item => item.id !== id));
    toast.success("Item removed", {
      description: "The item has been removed from your cart.",
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const checkout = () => {
    if (items.length === 0) {
      toast.error("Cart is empty", {
        description: "Please add items to your cart before checking out.",
      });
      return;
    }

    // Here you would typically integrate with a payment processor
    // For now, we'll just simulate a successful checkout
    toast.success("Order placed successfully!", {
      description: "Thank you for your purchase. We'll contact you shortly.",
    });
    clearCart();
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      clearCart, 
      checkout 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};