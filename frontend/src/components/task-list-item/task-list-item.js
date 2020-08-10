import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

import Checkbox from "@material-ui/core/Checkbox";

import "./task-list-item.css";

const useStyles = makeStyles({
  root: {
    ".MuiCheckbox-root": {
      color: "#3f51b5",
    },
  },
});

const TaskListItem = ({ text }) => {
  const { root } = useStyles();

  return (
    <div className="task-list-item">
      <Checkbox className={root} />
      {text}
    </div>
  );
};

TaskListItem.propTypes = {
  text: PropTypes.string,
};

export default TaskListItem;
