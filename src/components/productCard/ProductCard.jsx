import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
const ProductCard = ({ product }) => {
  const { addToCart  } = useCart();
  const { addToWishlist } = useWishlist();

  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate(`/product/${product.id}`, { state: { product } });
  };
  const handleAddToWhishlist = () => {
    addToWishlist(product);
  };
  return (
    <div className={styles.card}>
      <div onClick={handleAddToWhishlist} className={styles.iconContainer}>
        <FavoriteBorderIcon  className={styles.favoriteIcon} />
        <VisibilityIcon className={styles.visibilityIcon} />
      </div>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />
      </div>
      
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <p className={styles.rating}>
        {Array(product.rating)
          .fill(null)
          .map((_, index) => (
            <StarIcon key={index} className={styles.starIcon} />
          ))}
      </p>
      <button onClick={handleAddToCart} className={styles.addToCartButton}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
