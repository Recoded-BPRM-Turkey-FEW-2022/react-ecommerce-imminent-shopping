import React from "react";
import "./style.css";
import { useQuery } from "react-query";
import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Tabs, Tab, Box } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link, useRouteMatch } from "react-router-dom";
import Filter from "./Filter";




export default function Navbar() {



  // const [val, setValue] = useState();
  return (

    <div>
      <AppBar position="static" sx={{ background: "#063970" }}>
        <Toolbar sx={{}}>
          <Tabs sx={{ marginRight: "auto" }} textColor="white" indicatorColor="secondary">

            <Tab label="Home" href="/Home" sx={{ marginRight: "Autopx" }} ></Tab>
            <Tab label="Cart" href="/cart" sx={{ marginRight: "10px" }}>
            </Tab>
            <Filter></Filter>
          </Tabs>

          <Button Variant="contained" sx={{ marginLeft: "auto" }}> Login</Button>
          <Button Variant="contained" sx={{ marginLeft: "10px" }}> Sign Up</Button>
        </Toolbar>
      </AppBar>

    </div>

  );
}
