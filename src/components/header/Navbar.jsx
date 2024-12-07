import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./Header.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountDropdown from "../accounts/ManageAccounts";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useUser } from "../../context/UserContext";
const Header = () => {
  const { user } = useUser();
  const { wishlist } = useWishlist();
  const { getTotalItems } = useCart();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
   const navigate=useNavigate()
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
        <div className={styles.actions} >
          <button className={styles["action-button"]} onClick={()=>navigate('/whishlist')}>
            <FavoriteBorderIcon />
            {
              wishlist?.length>0&&<span className={styles["whish-badge"]}>{ wishlist?.length}</span>

            }
          </button>

          {/* Shopping Cart Icon */}
          <button title="your cart" className={styles["action-button"]} onClick={()=>navigate('/cart')}>
            <ShoppingCartOutlinedIcon />
            {getTotalItems() > 0 && (
              <span className={styles["cart-badge"]}>{getTotalItems()}</span>
            )}
          </button>

          {/* User Profile Icon */}
          <button title={user?.username}
            className={styles["action-button"]}
            onClick={toggleDropdown} // Toggle dropdown on click
          >
            <AccountCircleIcon />
          </button>

          {/* Dropdown Menu */}
          {isDropdownVisible && <AccountDropdown toggle={toggleDropdown} />}
        </div>
      </div>

    </div>
  );
};

export default Header;
