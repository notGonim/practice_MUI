import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NavbarRes from "./NavbarRes";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuRes, setMenuRes] = useState(false);
  const theme = useTheme();
  const matchBreakPoint = useMediaQuery(theme.breakpoints.down("sm"));
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
              {matchBreakPoint ? (
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => setMenuRes(true)}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <ShoppingBasketIcon />
                </IconButton>
              )}
            </Box>
            {matchBreakPoint ? (
              <NavbarRes menuRes={menuRes} setMenuRes={setMenuRes} />
            ) : (
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    marginRight: "10px",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  Home
                </Typography>
                <Typography
                  sx={{ mr: "10px", cursor: "pointer", color: "black" }}
                >
                  Shop
                </Typography>
                <Typography
                  aria-controls="category-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    marginRight: "10px",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  Categories
                </Typography>
                {/* Category Items */}
                <Menu
                  id="category-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Men</MenuItem>
                  <MenuItem onClick={handleClose}>Woman</MenuItem>
                  <MenuItem onClick={handleClose}>Childrent</MenuItem>
                </Menu>
                <Typography
                  sx={{
                    marginRight: "10px",
                    cursor: "pointer",
                    color: "black",
                  }}
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
            )}
            {/*  Buttons */}
            <Box>
              <Button sx={{ backgroundColor: "#dc2a68", color: "white" }}>
                Account
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
