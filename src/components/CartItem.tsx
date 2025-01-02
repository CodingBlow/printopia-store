import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
  image?: string;
  onQuantityChange: (id: number, newQuantity: number) => void;
}

const CartItem = ({ id, name, price, quantity, category, image, onQuantityChange }: CartItemProps) => {
  const showQuantityControls = category !== "support";

  const handleIncrement = () => {
    onQuantityChange(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      {image && (
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-muted-foreground">
          ${price.toFixed(2)} {showQuantityControls ? `x ${quantity}` : ""}
        </p>
        <p className="text-sm font-medium">
          Total: ${(price * quantity).toFixed(2)}
        </p>
      </div>
      {showQuantityControls && (
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleDecrement}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => onQuantityChange(id, parseInt(e.target.value) || 1)}
            className="w-16 text-center"
            min="1"
          />
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleIncrement}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartItem;