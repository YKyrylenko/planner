import React from "react";
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

export default TaskList;
