import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchCart, fetchProduct } from "../api";

const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = 1; // Example user ID, replace with actual logic to get the logged-in user

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetchCart(userId);
        const cartData = response.data;

        // Consolidate cart products by merging products with the same ID across all cart items
        const consolidatedCart = cartData.reduce((acc, cartItem) => {
          cartItem.products.forEach((product) => {
            const existingProduct = acc.find(
              (item) => item.productId === product.productId
            );

            if (existingProduct) {
              // If product exists, update the quantity
              existingProduct.quantity += product.quantity;
            } else {
              // If product doesn't exist, add it to the accumulator
              acc.push({ ...product });
            }
          });
          return acc;
        }, []);

        // Fetch product details (title, price, image) for each product in the cart
        const updatedCart = await Promise.all(
          consolidatedCart.map(async (product) => {
            const productDetails = await fetchProduct(product.productId);
            return {
              ...product,
              title: productDetails.data.title,
              price: productDetails.data.price,
              image: productDetails.data.image,
            };
          })
        );

        console.log('updatedCart', updatedCart);

        setCart(updatedCart);
        console.log('cart', cart);

      } catch (err) {
        setError("Failed to fetch cart data.");
        console.error("Error fetching cart data:", err);
      } finally {
        setLoading(false);
      }
    };
    console.log('cart', cart);


    fetchCartData();
  }, [userId]);
  useEffect(() => {
    console.log('Updated cart:', cart);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const updatedCart = [...prev];
      let productFound = false;

      // Iterate over all cart items (now working with the consolidated cart)
      updatedCart.forEach((productInCart) => {
        if (productInCart.productId === product.productId) {
          // If product exists, update the quantity
          productInCart.quantity += 1;
          productFound = true;
        }
      });

      // If product was not found, add it to the cart
      if (!productFound) {
        updatedCart.push({
          productId: product.productId,
          quantity: 1,
          title: product.title,
          price: product.price,
          image: product.image,
        });
      }

      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) =>
      prev.filter((product) => product.productId !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return removeFromCart(productId);

    setCart((prev) =>
      prev.map((product) =>
        product.productId === productId
          ? { ...product, quantity }
          : product
      )
    );
  };

  const clearCart = () => setCart([]);

  const getTotalItems = () =>
    cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        error,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
