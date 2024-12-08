import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";
import "./SignUp.scss";
import { createUser } from "../../api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

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

    // Check if fields are filled
    if (!formData.name || !formData.email || !formData.password) {
      setMessage("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await createUser(formData);

      setMessage("Your Account created successfully!");
      console.log("API Response:", response.data);
      setTimeout(() => {
        navigate("/");

      }, 1000);

    } catch (error) {
      console.error("Error creating account:", error);
      setMessage("Failed to create an account. Please try again.");
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="signup-image-wrapper">
        <img 
          src={logo} 
          alt="Dl beatsnoop" 
          className="signup-logo" 
          style={{ width: '800px', height: '600px' }} 
/>        </div>
      </div>

      <div className="signup-right">
        <div className="signup-header">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="signup-input"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email or Phone Number"
            className="signup-input"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="signup-input"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <div className="signup-buttons">
            <button
              type="submit"
              className="signup-button primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Create Account"}
            </button>
          </div>
        </form>

        <button className="signup-button secondary">
          <GoogleIcon style={{ marginRight: "8px" }} />
          Sign up with Google
        </button>

        {message && <p className="signup-message">{message}</p>}

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
