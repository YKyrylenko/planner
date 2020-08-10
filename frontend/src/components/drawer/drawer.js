import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import SwipeableDrawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/styles";

import "./drawer.css";

const useStyles = makeStyles({
  root: {
    "& .MuiTypography-displayBlock": {
      fontSize: "50px",
      marginRight: "15px",
      padding: "30px",
    },
  },
});
const Drawer = ({ open, isLogged, closeDrawer, logout }) => {
  const { root } = useStyles();
  const onLogoutClick = () => {
    closeDrawer();
    logout();
  };

  return (
    <SwipeableDrawer open={open} onClose={closeDrawer}>
      <List style={{ width: "80vw" }}>
        {isLogged && (
          <ListItem
            button
            key="logout"
            component={Link}
            to="/calendar"
            className={root}
            onClick={onLogoutClick}
          >
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="logout" />
          </ListItem>
        )}
        {!isLogged && (
          <React.Fragment>
            <ListItem
              button
              key="signup"
              component={Link}
              to="/signup"
              className={root}
              onClick={closeDrawer}
            >
              <ListItemIcon>
                <HowToRegIcon />
              </ListItemIcon>
              <ListItemText primary="signup" />
            </ListItem>
            <ListItem
              button
              key="login"
              component={Link}
              to="/login"
              className={root}
              onClick={closeDrawer}
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="login" />
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
