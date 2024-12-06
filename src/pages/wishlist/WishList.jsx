import React, { useState } from "react";
import './Wishlist.scss';
import { useWishlist } from "../../context/WishlistContext";
import DeleteIcon from '@mui/icons-material/Delete'; 
import { useNavigate } from "react-router-dom";
const Wishlist = () => {
    const { wishlist,removeFromWishlist } = useWishlist();

  const navigate = useNavigate();
  // Move all items to bag
  const moveAllToBag = () => {
    console.log("Move all items to the bag");
    // Handle logic to move all to the cart
  };

  // Remove item from wishlist
    const remove = (productId) => {
        removeFromWishlist(productId)
       
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h2>Wishlist ({wishlist.length})</h2>
        <button onClick={moveAllToBag} className="move-all-to-bag-button">
          Move All To Bag
        </button>
      </div>
      <div className="wishlist-items">
        {wishlist.map((item) => (
          <div className="wishlist-item" key={item.id}>
            <div className="wishlist-item-image">
              <img src={item.image} alt={item.title} />
              
            </div>
            <button title="remove "
                onClick={() => remove(item.id)}
                className="remove-from-wishlist-button"
              >
                        <DeleteIcon />
                    </button>
            <div className="wishlist-item-details">
              <h3>{item.title}</h3>
              <div className="wishlist-item-pricing">
                {item.discountPrice ? (
                  <div className="wishlist-item-discount">
                    <span className="original-price">${item.discountPrice}</span>
                    <span className="discounted-price">${item.price}</span>
                    <span className="discount-percent">-{item.discount}%</span>
                  </div>
                ) : (
                  <div className="wishlist-item-price">${item.price}</div>
                )}
              </div>
              <button className="add-to-cart-button">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
