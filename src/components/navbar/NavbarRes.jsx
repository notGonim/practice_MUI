import React from "react";
import { Drawer, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const NavbarRes = ({ menuRes, setMenuRes }) => {
  return (
    <Drawer open={menuRes}>
      <List>
        <ListItem button divider onClick={()=>setMenuRes(false)}>
          <ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem button divider onClick={()=>setMenuRes(false)}>
          <ListItemIcon>
            <ListItemText>Shop</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem button divider onClick={()=>setMenuRes(false)}>
          <ListItemIcon>
            <ListItemText>Category</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem button divider onClick={()=>setMenuRes(false)}>
          <ListItemIcon>
            <ListItemText>Cart</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem button divider onClick={()=>setMenuRes(false)}>
          <ListItemIcon>
            <ListItemText>Admin</ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavbarRes;
