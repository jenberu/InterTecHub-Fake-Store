import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create the Wishlist context
const WishlistContext = createContext();

// Custom hook to use the Wishlist context
export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add an item to the wishlist
  const addToWishlist = (item) => {
    localStorage.clear();
    setWishlist((prevWishlist) => {
      // Check if item is already in the wishlist
      if (!prevWishlist.some((existingItem) => existingItem.id === item.id)) {
        return [...prevWishlist, item];
      }
      return prevWishlist; // Item already in wishlist, don't add again
    });
  };

  // Remove an item from the wishlist and update localStorage
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.id !== productId);
      if (updatedWishlist.length === 0) {
        navigate('/')
        
    }
      
      // Update localStorage with the new wishlist after removal
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      
      return updatedWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
