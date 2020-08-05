import React from "react";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HowToRegIcon from "@material-ui/icons/HowToReg";

import { Link } from "react-router-dom";

import SwipeableDrawer from "@material-ui/core/Drawer";

import "./drawer.css";

const Drawer = ({ open, closeDrawer, isLogined, logout }) => {
  return (
    <SwipeableDrawer open={open} onClose={() => closeDrawer()}>
      {isLogined ? (
        <List style={{ width: "80vw" }}>
          <ListItem
            button
            key={"logout"}
            onClick={() => {
              closeDrawer();
              logout();
            }}
          >
            <ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
            <ListItemText primary={"logout"} />
          </ListItem>
        </List>
      ) : (
        <List style={{ width: "80vw" }}>
          <Link to="/signup">
            <ListItem button key={"signup"} onClick={() => closeDrawer()}>
              <ListItemIcon>{<HowToRegIcon />}</ListItemIcon>
              <ListItemText primary={"signup"} />
            </ListItem>
          </Link>
          <Link to="/login">
            <ListItem button key={"login"} onClick={() => closeDrawer()}>
              <ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
              <ListItemText primary={"login"} />
            </ListItem>
          </Link>
        </List>
      )}
    </SwipeableDrawer>
  );
};

export default Drawer;
