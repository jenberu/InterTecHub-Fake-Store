import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountDropdown from "../accounts/ManageAccounts";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useUser } from "../../context/UserContext";
import styles from "./Header.module.scss";

const Header = () => {
  const { user } = useUser();
  const { wishlist } = useWishlist();
  const { getTotalItems } = useCart();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownVisible((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className={styles.header}>
      {/* Logo and Menu Section */}
      <div className={styles["logo-and-menu"]}>
        <div className={styles.logo}>Exclusive</div>
        <button className={styles["menu-toggle"]} onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
          <li className={styles["menu-item"]}>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className={styles["menu-item"]}>
            <Link to="/signup" onClick={toggleMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>

      {/* Search Bar and Icons */}
      <div className={styles["search-and-icons"]}>
        <div className={styles["search-bar"]}>
          <input type="text" placeholder="Search..." />
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className={styles.actions}>
          <button
            className={styles["action-button"]}
            onClick={() => navigate("/whishlist")}
          >
            <FavoriteBorderIcon />
            {wishlist?.length > 0 && (
              <span className={styles["whish-badge"]}>{wishlist?.length}</span>
            )}
          </button>
          <button
            className={styles["action-button"]}
            onClick={() => navigate("/cart")}
          >
            <ShoppingCartOutlinedIcon />
            {getTotalItems() > 0 && (
              <span className={styles["cart-badge"]}>{getTotalItems()}</span>
            )}
          </button>
          <button
            title={user?.username}
            className={styles["action-button"]}
            onClick={toggleDropdown}
          >
            <AccountCircleIcon />
          </button>
          {isDropdownVisible && <AccountDropdown toggle={toggleDropdown} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
