"use client";
import { createContext, useContext, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type User = {
  username: string;
};

type StoreType = {
  cart: Product[];
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

const StoreContext = createContext<StoreType | null>(null);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string) => {
    setUser({ username });
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    if (confirm("¿Deseas eliminar este producto?")) {
      setCart(cart.filter((p) => p.id !== id));
    }
  };

  const clearCart = () => {
    if (confirm("¿Deseas vaciar el carrito?")) {
      setCart([]);
    }
  };

  return (
    <StoreContext.Provider
      value={{ cart, user, login, logout, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error("Error");
  return context;
};