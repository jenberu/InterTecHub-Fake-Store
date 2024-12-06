import React, { createContext, useContext, useEffect, useState } from "react";
import {
  fetchCart, updateCart,RemoveProductFromCart,
  addToCartApi, fetchProduct
} from "../api";

const CartContext = createContext();


export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const userId = 1;

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetchCart(userId);
        const cartData = response.data;

        const consolidatedCart = cartData.reduce((acc, cartItem) => {
          cartItem.products.forEach((product) => {
            const existingProduct = acc.find(
              (item) => item.productId === product.productId
            );

            if (existingProduct) {
              existingProduct.quantity += product.quantity;
            } else {
              acc.push({ ...product });
            }
          });
          return acc;
        }, []);

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

      } catch (err) {
        setError("Failed to fetch cart data.");
        console.error("Error fetching cart data:", err);
      } finally {
        setLoading(false);
      }
    };


    fetchCartData();
  }, [userId]);
 
  const addToCart = async (product) => {
    try {
      let productFound = false;
  
      // Iterate through the cart to check if the product exists
      for (const productInCart of cart) {
        if (productInCart.productId === product.id) {
          productInCart.quantity += 1;
  
          // Attempt to update the cart on the server
          try {
            const response = await updateCart(userId, product.id, productInCart.quantity);
            setMessage('Cart updated successfully:', response.data);
            console.log('Cart updated successfully:', response.data);
          } catch (error) {
            setError('Error updating cart:', error);
            console.error('Error updating cart:', error);
          }
  
          productFound = true;
          break; 
        }
      }
  
      // If the product is not in the cart, add it
      if (!productFound) {
        try {
          const response = await addToCartApi(userId, product.id);
          setMessage('Product added to cart successfully:', response.data);
          console.log('Product added to cart successfully:', response.data);
        } catch (error) {
          setError('Error adding product to cart:', error);
          console.error('Error adding product to cart:', error);
        }
      }
  
    } catch (error) {
      setError('Unexpected error in addToCart:', error);
      console.error('Unexpected error in addToCart:', error);
    }
  };
  

  const removeFromCart = (productId) => {
    RemoveProductFromCart(productId);
  
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
