import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import "./Wishlist.scss";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  // Redirect to the shop if the wishlist is empty
  if (wishlist.length === 0) {
    return (
      <div className="wishlist-empty">
        Your wishlist is empty.{" "}
        <button onClick={() => navigate("/shop")} className="shop-btn">
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      <div className="wishlist-items">
        {wishlist.map((item) => (
          <div key={item.productId} className="wishlist-item">
            <img src={item.image} alt={item.title} className="item-image" />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button
                onClick={() => removeFromWishlist(item.productId)}
                className="remove-btn"
              >
                Remove
              </button>
              <button
                onClick={() => navigate(`/product/${item.productId}`)}
                className="view-btn"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
