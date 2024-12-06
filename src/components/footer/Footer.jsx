import {
    Copyright,
    Facebook,
    Instagram,
    LinkedIn,
    Send,
    Twitter,
  } from "@mui/icons-material";
  import {
    Box,
    Divider,
    Grid,
    IconButton,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
  import downloadAppstore from "../../assets/images/AppStore.png";
  import googlePlay from "../../assets/images/google-play.png";
import qrcode1 from "../../assets/images/Qr-Code.png";
import './footer.scss'

  
  const Footer = () => {
    return (
      <Box className="footer"
        sx={{ width: "100%", backgroundColor: "button.main", padding: "40px 0" }}
      >
        <Grid
          container
          justifyContent="center"
          spacing={10}
          sx={{ padding: "20px 0" }}
        >
          <Grid item>
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                Exclusive
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ marginTop: 1 }}
              >
                Subscribe
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                Get 10% off your first order
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 2,
                  border: "1.5px solid",
                  borderColor: "text.primary",
                  borderRadius: 1,
                  padding: "8px 16px",
                }}
              >
                <TextField
                  variant="standard"
                  placeholder="Enter your email"
                  InputProps={{ disableUnderline: true }}
                  sx={{ flex: 1, opacity: 0.4 }}
                />
                <IconButton>
                  <Send />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontWeight: "medium" }}
              >
                Support
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                exclusive@gmail.com
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                +88015-88888-9999
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontWeight: "medium" }}
              >
                Account
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                My Account
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                Login / Register
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                Cart
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                Wishlist
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                Shop
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontWeight: "medium" }}
              >
                Quick Link
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                Privacy Policy
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                Terms Of Use
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                FAQ
              </Typography>
              <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
                Contact
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontWeight: "medium" }}
              >
                Download App
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{ marginTop: 1, opacity: 0.7 }}
              >
                Save $3 with App New User Only
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
                <Box sx={{ width: 80, height: 80, backgroundColor: "black" }}>
                  <img
                    src={qrcode1}
                    alt="Qrcode"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", marginLeft: 2 }}
                >
                  <img
                    src={googlePlay}
                    alt="Google play"
                    style={{ width: 110, height: 40 }}
                  />
                  <Box
                    sx={{
                      width: 110,
                      height: 40,
                      backgroundColor: "black",
                      marginTop: 1,
                    }}
                  >
                    <img
                      src={downloadAppstore}
                      alt="Download appstore"
                      style={{ width: 105, height: 35, margin: "2.5px" }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
                <Facebook sx={{ width: 24, height: 24, marginRight: 2 }} />
                <Twitter sx={{ width: 24, height: 24, marginRight: 2 }} />
                <Instagram sx={{ width: 24, height: 24, marginRight: 2 }} />
                <LinkedIn sx={{ width: 24, height: 24 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ opacity: 0.5 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.6,
            padding: "20px 0",
          }}
        >
 
           
          <Copyright sx={{ width: 20, height: 20, marginRight: 1.5 }} />
          <Typography variant="body2" component="div">
         
            Copyright  2024. All right reserved
          </Typography>
        </Box>
        <p>
          designed by <a href="http://"> InterTecHub Team</a>
            </p>
          <p>
          Developed By jemberu Kassie
            </p>
      </Box>
    );
  };
  
  export default Footer;