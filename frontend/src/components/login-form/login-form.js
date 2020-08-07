import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";
import { inputLabelStyles, inputStyles } from "../../utils/formStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import AlertDialogNotification from "../alert-dialog-notification";

import "./login-form.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => state.authReducer.loginSuccess);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onHandleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <React.Fragment>
      <form id="login-form" onSubmit={onSubmitForm}>
        <TextField
          name="email"
          label="email"
          type="email"
          required
          InputLabelProps={{ style: inputLabelStyles }}
          inputProps={{ style: inputStyles }}
          style={{ marginBottom: "120px" }}
          onChange={onHandleChange}
        />
        <TextField
          name="password"
          label="password"
          type="password"
          required
          InputLabelProps={{ style: inputLabelStyles }}
          inputProps={{ style: inputStyles }}
          style={{ marginBottom: "120px" }}
          onChange={onHandleChange}
        />
        <Button type="submit" color="secondary" style={{ fontSize: "40px" }}>
          Login
        </Button>
      </form>
      {isLogined && (
        <AlertDialogNotification
          text="You have been successfully logined"
          redirectTo="calendar"
        />
      )}
    </React.Fragment>
  );
};

export default LoginForm;
