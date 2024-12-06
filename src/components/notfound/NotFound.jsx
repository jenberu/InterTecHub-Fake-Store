import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;