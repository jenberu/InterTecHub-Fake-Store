import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.scss";
import { createOrder } from "../../api";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart} = useCart();

  // Form state for shipping details
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle checkout form submission
  const handleCheckout = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled out
    if (
      !shippingDetails.fullName ||
      !shippingDetails.address ||
      !shippingDetails.city ||
      !shippingDetails.postalCode ||
      !shippingDetails.country ||
      !shippingDetails.email ||
      !shippingDetails.phone
    ) {
      alert("Please fill out all the fields.");
      return;
    }

    setIsSubmitting(true);
    const orderData = {
      userId: 1, 
      products: cart.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
      shippingDetails,
    };
    try {
   
      const response = await createOrder(orderData);
      console.log("Order placed successfully:", response.data);
      alert("Order placed successfully:");
    } catch (error) {
      console.error("Error placing order:", error);
      setIsSubmitting(false);
      alert("An error occurred while placing your order. Please try again later.");
    }
      navigate("/");
  
  };

  // Corrected subtotal calculation for the cart total
  const calculateSubtotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <div>
        Your cart is empty.{" "}
        <button onClick={() => navigate("/")} className="shop-btn">
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-main">
        <div className="checkout-form">
          <h3>Shipping Information</h3>
          <form onSubmit={handleCheckout}>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={shippingDetails.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={shippingDetails.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={shippingDetails.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Postal Code:</label>
              <input
                type="text"
                name="postalCode"
                value={shippingDetails.postalCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={shippingDetails.country}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={shippingDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={shippingDetails.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="checkout-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </button>
          </form>
        </div>
        <div className="checkout-cart">
          <h3>Your Cart</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                      <td> <img
                        src={item.image}
                        alt={item.title}
                        className="item-image"
                      />
                          
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="checkout-summary">
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
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
