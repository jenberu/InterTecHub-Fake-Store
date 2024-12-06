import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  IconButton,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const navigate=useNavigate()
  const { updateQuantity,cart, removeFromCart } = useCart();
  
  // Update quantity handlers
  const handleIncreaseQuantity = (item) => {
    updateQuantity(item.id,item.quantity+1); 
  };

  const handleDecreaseQuantity = (item) => {
    updateQuantity(item.id,item.quantity-1);
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
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Subtotal</TableCell>
                <TableCell>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="item-info">
                      <img src={item.image} alt={item.title} className="item-image" />
                      <span className="item-name">{item.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="item-quantity">
                      <IconButton
                        className="quantity-btn decrease"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <span>{item.quantity}</span>
                      <IconButton
                        className="quantity-btn increase"
                        onClick={() => handleIncreaseQuantity(item)}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                  <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell>
                    <IconButton
                      className="remove-btn"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      ✖
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
              <button onClick={()=>navigate('/')} className="shop-btn">Return to Shop</button>
      </div>
    </div>
  );
};

export default CartPage;
