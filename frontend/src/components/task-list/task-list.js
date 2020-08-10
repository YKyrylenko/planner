import React from "react";
import PropTypes from "prop-types";
import TaskListItem from "../task-list-item";

import "./task-list.css";

const TaskList = ({ tasks }) => {
  return (
    <div id="task-list-wrapper">
      <div id="list">
        {tasks.map((task) => {
          const { id, text } = task;
          return <TaskListItem key={id} text={text} />;
        })}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
