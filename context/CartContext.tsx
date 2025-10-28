// context/CartContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (name: string) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  const clearCart = () => setCartItems([]);
  const toggleCart = (open: boolean) => setIsCartOpen(open);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, isCartOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
