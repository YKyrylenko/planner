import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/authActions";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import ImageUploadButton from "../image-upload-button";
import AlertDialogNotification from "../alert-dialog-notification";

import "./signup-form.css";

const SignupForm = () => {
  const dispatch = useDispatch();
  const isRegistered = useSelector((state) => state.authReducer.signupSuccess);
  const [userPhoto, setUserPhoto] = useState({
    preview: "",
    raw: "",
  });

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const uploadUserPhoto = (photo) => {
    setUserPhoto({ preview: URL.createObjectURL(photo), raw: photo });
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const createFormData = (img, formValues) => {
    const data = new FormData();
    data.append("userPhoto", img);
    data.append("userData", JSON.stringify(formValues));
    return data;
  };

  const onFormSubmin = (e) => {
    e.preventDefault();
    const data = createFormData(userPhoto.raw, userData);
    dispatch(signup(data));
  };
  return (
    <React.Fragment>
      <form id="signup-form" onSubmit={onFormSubmin}>
        <ImageUploadButton uploadUserPhoto={uploadUserPhoto} />
        <TextField
          label="name"
          name="name"
          error={false}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="email"
          type="email"
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="password"
          type="password"
          onChange={handleChange}
        />
        <Button color="secondary" type="submit">
          Create
        </Button>
        {/* <TextField
          name="confirmPassword"
          placeholder="confirm password"
          onChange={handleChange}
        /> */}
      </form>
      {isRegistered && (
        <AlertDialogNotification
          text="You have been successfully registered"
          redirectTo="login"
        />
      )}
    </React.Fragment>
  );
};

export default SignupForm;
