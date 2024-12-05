import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Cart is an array of products

  // Add to Cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from Cart
  const removeFromCart = (productId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear Cart
  const clearCart = () => setCart([]);

  // Get Total Items in Cart
  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getTotalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
