import React, { useState } from "react";
import PropTypes from "prop-types";
import { add } from "../../actions/taskActions";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import "./add-task-form.css";

const AddTaskForm = ({ open, date, handleClose }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const onHandleChange = (e) => {
    setTask(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(task, date));
    setTask("");
  };

  return (
    <Dialog open={open} maxWidth="md">
      <DialogTitle>ADD NEW TASK</DialogTitle>
      <form id="add-task-form" onSubmit={onHandleSubmit}>
        <DialogContent>
          <DialogContentText>Write your new task for today</DialogContentText>

          <TextField
            margin="dense"
            label="New task"
            type="text"
            name="task"
            value={task}
            onChange={onHandleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" type="submit" onClick={handleClose}>
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

AddTaskForm.propTypes = {
  open: PropTypes.bool,
  date: PropTypes.instanceOf(Date),
};
export default AddTaskForm;
