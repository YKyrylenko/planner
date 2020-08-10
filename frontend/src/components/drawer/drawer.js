import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import SwipeableDrawer from "@material-ui/core/Drawer";

import "./drawer.css";

const Drawer = ({ open, isLogged, closeDrawer, logout }) => {
  const onLogoutClick = () => {
    closeDrawer();
    logout();
  };

  return (
    <SwipeableDrawer open={open} onClose={closeDrawer}>
      <List style={{ width: "80vw" }}>
        {isLogged && (
          <ListItem button key="logout" onClick={onLogoutClick}>
            <Link to="/calendar">
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="logout" />
            </Link>
          </ListItem>
        )}
        {!isLogged && (
          <React.Fragment>
            <ListItem button key="signup" onClick={closeDrawer}>
              <Link to="/signup">
                <ListItemIcon>
                  <HowToRegIcon />
                </ListItemIcon>
                <ListItemText primary="signup" />
              </Link>
            </ListItem>
            <ListItem button key="login" onClick={closeDrawer}>
              <Link to="/login">
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="login" />
              </Link>
            </ListItem>
          </React.Fragment>
        )}
      </List>
    </SwipeableDrawer>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool,
  isLogged: PropTypes.bool,
};

export default Drawer;
