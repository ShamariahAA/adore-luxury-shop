import { createContext, useContext, useState, ReactNode } from "react";

// Define the structure of a cart item
export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Define what functions and data the cart context provides
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

// CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to cart
  const addToCart = (item: CartItem) => {
    // Force bonnet price to $25
    const updatedItem = item.name === "bonnet" ? { ...item, price: 25 } : item;

    setCart(prev => {
      const exists = prev.find(i => i.name === updatedItem.name);
      if (exists) {
        return prev.map(i =>
          i.name === updatedItem.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...updatedItem, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (name: string) => {
    setCart(prev => prev.filter(i => i.name !== name));
  };

  // Clear the entire cart
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
