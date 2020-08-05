import React from "react";

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

export default TaskListItem;
