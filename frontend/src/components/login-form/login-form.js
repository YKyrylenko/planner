import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";
import { isEmail } from "../../utils/validations";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import AlertDialogNotification from "../alert-dialog-notification";

import "./login-form.css";

const useStyles = makeStyles({
  root: {
    "& .MuiInput-root , .MuiInputLabel-root ": {
      fontSize: "40px",
    },
    "& .MuiFormHelperText-root.Mui-error ": {
      fontSize: "20px",
    },
  },
});

const LoginForm = () => {
  const { root } = useStyles();

  const { register, handleSubmit, setError, clearErrors, errors } = useForm();
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => state.authReducer.loginSuccess);

  const emailHandleChange = (e) => {
    const { value, name } = e.target;
    if (!isEmail(value)) {
      setError(name, {
        message: `Your email should be like "example@example.com" `,
      });
    } else {
      clearErrors(name);
    }
  };

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <React.Fragment>
      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="email"
          label="email"
          type="text"
          className={root}
          error={!!errors.email}
          helperText={
            (errors.email &&
              errors.email?.type === "required" &&
              "This fiels is required") ||
            (errors.email && errors.email.message)
          }
          inputRef={register({
            required: true,
          })}
          style={{ marginBottom: "120px" }}
          onChange={emailHandleChange}
        />
        <TextField
          name="password"
          label="password"
          type="password"
          className={root}
          error={!!errors.password}
          helperText={errors.password && "This field is required"}
          inputRef={register({ required: true })}
          style={{ marginBottom: "120px" }}
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
