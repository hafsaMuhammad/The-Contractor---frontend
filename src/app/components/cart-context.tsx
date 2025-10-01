"use client";
import { createContext, useContext, useState, useEffect } from "react";

type CartItem = {
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  category?: string;
  image?: string;
};

type RemoveAction = "decrease" | "remove";

type CartContextType = {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (product_id: number, action?: RemoveAction) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.product_id === newItem.product_id);
      if (existing) {
        return prev.map((p) =>
          p.product_id === newItem.product_id
            ? { ...p, quantity: p.quantity + newItem.quantity }
            : p
        );
      }
      return [...prev, newItem];
    });
  };

  const removeFromCart = (
    product_id: number,
    action: RemoveAction = "remove"
  ) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product_id === product_id) {
            if (action === "decrease") {
              return { ...item, quantity: Math.max(item.quantity - 1, 0) };
            }
            return null; // full remove
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
