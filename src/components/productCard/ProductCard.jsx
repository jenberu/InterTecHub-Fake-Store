import React from 'react';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.image}
      />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
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
