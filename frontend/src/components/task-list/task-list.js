import React from "react";
import PropTypes from "prop-types";
import TaskListItem from "../task-list-item";

import "./task-list.css";

const TaskList = ({ tasks }) => {
  return (
    <div id="task-list-wrapper">
      <div id="list">
        {tasks.map((task) => (
          <TaskListItem text={task.text} />
        ))}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
