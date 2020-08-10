import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/authActions";
import { isEmail } from "../../utils/validations";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ImageUploadButton from "../image-upload-button";
import AlertDialogNotification from "../alert-dialog-notification";

import "./signup-form.css";

const createFormData = (img, formValues) => {
  const data = new FormData();
  data.append("userPhoto", img);
  data.append("userData", JSON.stringify(formValues));
  return data;
};

const SignupForm = () => {
  const { register, handleSubmit, setError, clearErrors, errors } = useForm();
  const dispatch = useDispatch();
  const isRegistered = useSelector((state) => state.authReducer.signupSuccess);
  const [userPhoto, setUserPhoto] = useState({
    preview: "",
    raw: "",
  });

  const uploadUserPhoto = (photo) => {
    setUserPhoto({ preview: URL.createObjectURL(photo), raw: photo });
  };

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
    const userData = createFormData(userPhoto.raw, data);
    dispatch(signup(userData));
  };
  return (
    <React.Fragment>
      <form id="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <ImageUploadButton uploadUserPhoto={uploadUserPhoto} />
        <TextField
          label="name"
          name="name"
          type="text"
          error={!!errors.name}
          helperText={errors.name && "This field is required"}
          inputRef={register({ required: true })}
          fullWidth
        />
        <TextField
          name="email"
          label="email"
          type="text"
          error={!!errors.email}
          helperText={
            (errors.email &&
              errors.email?.type === "required" &&
              "This fiels is required") ||
            (errors.email && errors.email.message)
          }
          inputRef={register({ required: true })}
          fullWidth
          onChange={emailHandleChange}
        />
        <TextField
          name="password"
          label="password"
          type="password"
          error={!!errors.password}
          helperText={errors.password && "This field is required"}
          inputRef={register({ required: true })}
          fullWidth
        />
        <Button color="secondary" type="submit" style={{ fontSize: "40px" }}>
          Create
        </Button>
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
