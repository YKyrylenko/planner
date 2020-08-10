import React from "react";
import PropTypes from "prop-types";

import Checkbox from "@material-ui/core/Checkbox";

import "./task-list-item.css";

const TaskListItem = ({ text }) => {
  return (
    <div className="task-list-item">
      <Checkbox />
      {text}
    </div>
  );
};

TaskListItem.propTypes = {
  text: PropTypes.string,
};

export default TaskListItem;
