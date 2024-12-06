import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container" style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/"  className="link" style={{ color: "blue", textDecoration: "none" }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;