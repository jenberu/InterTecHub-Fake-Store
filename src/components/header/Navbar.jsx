import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./Header.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountDropdown from "../accounts/ManageAccounts";

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

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

          {/* User Profile Icon */}
          <button
            className={styles["action-button"]}
            onClick={toggleDropdown} // Toggle dropdown on click
          >
            <AccountCircleIcon/>
          </button>

          {/* Dropdown Menu */}
          {isDropdownVisible && <AccountDropdown  toggle={toggleDropdown } />}
        </div>
      </div>
    </div>
  );
};

export default Header;
