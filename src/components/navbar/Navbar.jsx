import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Box>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/*  Links */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ marginRight: "10px", cursor: "pointer", color: "black" }}
            >
              Home
            </Typography>
            <Typography
              sx={{ marginRight: "10px", cursor: "pointer", color: "black" }}
            >
              Shop
            </Typography>
            <Typography
              sx={{ marginRight: "10px", cursor: "pointer", color: "black" }}
            >
              Categories
            </Typography>
            <Typography
              sx={{ marginRight: "10px", cursor: "pointer", color: "black" }}
            >
              Cart
            </Typography>
            <Typography
              sx={{
                marginRight: "10px",
                cursor: "pointer",
                color: "black",
              }}
            >
              Admin
            </Typography>
          </Box>
          {/*  Buttons */}
          <Box>
            <Button variant="outlined">Account</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
