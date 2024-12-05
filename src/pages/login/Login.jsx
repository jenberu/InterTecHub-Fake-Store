import React from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material"; 
import logo from "../../assets/images/logo2.png";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left">
        <div className="login-image-wrapper">
          <img src={logo} alt="Dl beatsnoop" className="login-logo" />
        </div>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <div className="login-header">
          <h1>Log in to your account</h1>
          <p>Enter your credentials below</p>
        </div>

        {/* Input Fields */}
        <div className="login-form">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
        </div>

        {/* Buttons */}
        <div className="login-buttons">
          <button className="login-button primary">Log In</button>

          <div className="forgot-password-link">
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="login-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
