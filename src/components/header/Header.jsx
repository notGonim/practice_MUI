import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        marginTop: "3.5rem",
        minHeight: "80vh",
        background: "url(images/header.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box component="div" sx={{ display: "flex",flexDirection:'column',alignItems:'flex-start',justifyContent:'center' ,minHeight:'80vh'}}>
        <Typography
          variant="h2"
          sx={{ fontFamily: "cursive", fontWeight: "bold", color: "#f8bbd0" }}
        >
          Find Your New Outfit
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontFamily: "cursive", fontWeight: "bold", color: "#f8bbd0" }}
        >
          Your Collection At Winter
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontFamily: "cursive", fontWeight: "bold", color: "#f8bbd0" }}
        >
          Sale 2021
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
