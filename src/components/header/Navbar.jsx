import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Box,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <Box className={styles.header}>
      <Box className={styles["logo-and-menu"]}>
        <Typography variant="h6" component="div" className={styles.logo}>
          Exclusive
        </Typography>
        <List className={styles.menu}>
          <ListItem button className={styles["menu-item"]}>
            <Typography variant="body1">Home</Typography>
          </ListItem>
          <ListItem button className={styles["menu-item"]}>
            <Typography variant="body1">Contact</Typography>
          </ListItem>
          <ListItem button className={styles["menu-item"]}>
            <Typography variant="body1">About</Typography>
          </ListItem>
          <ListItem button className={styles["menu-item"]}>
            <Typography variant="body1">Sign Up</Typography>
          </ListItem>
        </List>
      </Box>
      <Box className={styles["search-and-icons"]}>
        <TextField
          variant="outlined"
          placeholder="What are you looking for?"
          className={styles["search-bar"]}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <IconButton className={styles["icon-button"]}>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton className={styles["icon-button"]}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
