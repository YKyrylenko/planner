import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
  return (
    <div id="alert-dialog-notification">
      <Dialog open>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button component={Link} to={redirectTo}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AlertDialogNotification.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  redirectTo: PropTypes.string,
};

export default AlertDialogNotification;
