"use client";
import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddToCart = (cartItem) => {
    setCart([...cart, cartItem]);
  };

  const RemoveFromCart = (cartItem) => {
    const updatedCart = cart.filter((item) => cartItem?.id !== item?.id);
    setCart(updatedCart);
  };
  return (
    <cartContext.Provider value={{ cart, AddToCart, RemoveFromCart }}>
      <div>{children}</div>
    </cartContext.Provider>
  );
};
