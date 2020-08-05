import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import "./alert-dialog-notification.css";

const AlertDialogNotification = ({
  type,
  title = "Success",
  text,
  redirectTo,
}) => {
  const [redirect, setRedirect] = useState(false);

  const onHandleClick = (e) => {
    setRedirect(true);
  };

  return redirect ? (
    <Redirect to={`/${redirectTo}`} />
  ) : (
    <div id="alert-dialog-notification">
      <Dialog open>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onHandleClick}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogNotification;
