import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "../drawer";
import { _removeData } from "../../utils/localStorageUtils";

import "./header.css";

const Header = () => {
  const dispatch = useDispatch();

  const month = useSelector((state) => state.calendarReducer.month);

  const isLogged = useSelector((state) => state.authReducer.loginSuccess);

  const [drawerState, setDrawerState] = useState(false);

  const closeDrawer = () => {
    setDrawerState(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    _removeData("token");
    _removeData("user");
  };

  return (
    <div className="header">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ fontSize: "50px" }}>{month}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawerState}
        isLogged={isLogged}
        closeDrawer={closeDrawer}
        logout={handleLogout}
      ></Drawer>
    </div>
  );
};

export default Header;
