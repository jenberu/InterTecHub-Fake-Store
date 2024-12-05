import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import "./Cart.scss";
const CartPage = () => {
    const { cart, addToCart, removeFromCart } = useCart();
  
    // Update quantity handlers
    const handleIncreaseQuantity = (item) => {
      addToCart(item); // Context handles updating the state
    };
  
    const handleDecreaseQuantity = (item) => {
      removeFromCart(item.id); // Context handles decreasing or removing the item
    };
  
    const handleRemoveItem = (id) => {
      removeFromCart(id); // Context handles removal
    };
  
    const calculateSubtotal = () => {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };
  
    return (
      <div className="cart-container">
        <div className="cart-main">
          <div className="cart-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-info">
                <img src={item.image} alt={item.title} className="item-image" />
                <span className="item-name">{item.title}</span>
              </div>
              <span className="item-price">${item.price.toFixed(2)}</span>
              <div className="item-quantity">
                <button
                  className="quantity-btn decrease"
                  onClick={() => handleDecreaseQuantity(item)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="quantity-btn increase"
                  onClick={() => handleIncreaseQuantity(item)}
                >
                  +
                </button>
              </div>
              <span className="item-subtotal">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                className="remove-btn"
                onClick={() => handleRemoveItem(item.id)}
              >
                ✖
              </button>
            </div>
          ))}
          {cart.length === 0 && <div className="empty-cart">Your cart is empty!</div>}
        </div>
  
        <div className="cart-summary">
          <h2>Cart Total</h2>
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${calculateSubtotal()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${calculateSubtotal()}</span>
            </div>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
          <button className="shop-btn">Return to Shop</button>
        </div>
      </div>
    );
  };
  
  export default CartPage;
  