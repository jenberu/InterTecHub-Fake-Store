import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import "./login.scss";
import { userLogin } from "../../api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await userLogin(formData);

      console.log("Login successful:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-image-wrapper">
          <img src={logo} alt="Dl beatsnoop" className="login-logo" />
        </div>
      </div>

      <div className="login-right">
        <div className="login-header">
          <h1>Log in to your account</h1>
          <p>Enter your credentials below</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email or Phone Number"
            className="login-input"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-input"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <div className="login-buttons">
            <button
              type="submit"
              className="login-button primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </div>
        </form>

        {error && <p className="login-error">{error}</p>}

        <div className="forgot-password-link">
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
        </div>

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
