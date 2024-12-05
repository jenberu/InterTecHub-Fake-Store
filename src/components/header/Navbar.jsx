import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      {/* Logo and Menu Section */}
      <div className={styles["logo-and-menu"]}>
        <div className={styles.logo}>Exclusive</div>
        <ul className={styles.menu}>
          <li className={styles["menu-item"]}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles["menu-item"]}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={styles["menu-item"]}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles["menu-item"]}>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>

      {/* Search Bar and Icons */}
      <div className={styles["search-and-icons"]}>
        <div className={styles["search-bar"]}>
          <input
            type="text"
            placeholder="What are you looking for?"
            className={styles.input}
          />
          <button className={styles["search-button"]}>
            <SearchIcon />
          </button>
        </div>
        <div className={styles.actions}>
          <button className={styles["action-button"]}>
            <FavoriteBorderIcon />
          </button>
          <button className={styles["action-button"]}>
            <ShoppingCartOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
