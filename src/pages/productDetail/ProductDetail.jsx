import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ProductDetails.module.scss";
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
  const { removeFromCart } = useCart();
  const { state } = useLocation();
  const product = state?.product;
  const navigate = useNavigate();

  // State for color, size, and quantity
  const [color, setColor] = useState(product?.colors?.[0] || "Red");
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleBuyNow = () => {
    alert(`Proceed to Checkout:
    Color: ${color}
    Size: ${size}
    Quantity: ${quantity}`);
    // Add logic for the "Buy Now" functionality
  };

    const handleRemoveFromCart = () => {
      removeFromCart(product.id)
    alert("Product removed from cart");
    // Add logic to remove the product from the cart
    navigate("/");
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className={styles.productDetails}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p className={styles.description}>{product.description}</p>
        
        {/* Color Selection */}
        <div className={styles.colorSelection}>
          <span className={styles.label}>Color:</span>
          <div className={styles.colors}>
            {product.colors?.map((colorOption, index) => (
              <label
                key={index}
                className={`${styles.colorOption} ${color === colorOption ? styles.selected : ""}`}
                style={{ backgroundColor: colorOption }}
              >
                <input
                  type="radio"
                  value={colorOption}
                  checked={color === colorOption}
                  onChange={() => setColor(colorOption)}
                  className={styles.radioInput}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className={styles.sizeSelection}>
          <span className={styles.label}>Size:</span>
          <div className={styles.sizes}>
            {["S", "M", "L", "XL"].map((sizeOption) => (
              <button
                key={sizeOption}
                onClick={() => setSize(sizeOption)}
                className={`${styles.sizeButton} ${size === sizeOption ? styles.activeSize : ""}`}
              >
                {sizeOption}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Update */}
        <div className={styles.quantity}>
          <span className={styles.label}>Quantity:</span>
          <div className={styles.quantityControls}>
            <button onClick={decrementQuantity} className={styles.quantityButton}>
              -
            </button>
            <span className={styles.quantityValue}>{quantity}</span>
            <button onClick={incrementQuantity} className={styles.quantityButton}>
              +
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button onClick={handleBuyNow} className={styles.buyNowButton}>
            Buy Now
          </button>
          <button
            onClick={handleRemoveFromCart}
            className={styles.removeFromCartButton}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
