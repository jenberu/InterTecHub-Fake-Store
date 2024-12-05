import React from 'react';
import styles from './ProductCard.module.scss';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <FavoriteBorderIcon className={styles.favoriteIcon} />
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

      
      <button
        onClick={() => addToCart(product)}
        className={styles.addToCartButton}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
