import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../assets/images/logo2.png";
import "./SignUp.css"; 
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="signup-left">
        <div className="signup-image-wrapper">
          <img src={logo} alt="Dl beatsnoop" className="signup-logo" />
        </div>
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <div className="signup-header">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
        </div>

        {/* Input Fields */}
        <div className="signup-form">
          <input
            type="text"
            placeholder="Name"
            className="signup-input"
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
          />
        </div>

        {/* Buttons */}
        <div className="signup-buttons">
          <button className="signup-button primary">Create Account</button>
          <button className="signup-button secondary">
            <GoogleIcon style={{ marginRight: "8px" }} />
            Sign up with Google
          </button>
        </div>

        {/* Footer */}
        <div className="signup-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
