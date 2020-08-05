import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTasksOfDay } from "../../actions/taskActions";
import TaskList from "../task-list";
import AddTaskForm from "../add-task-form";

import "./tasks-of-day.css";

const TasksOfDay = ({}) => {
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);
  const { year, month, day } = useParams();

  let tasks = useSelector((state) => state.tasksReducer.tasks);

  useEffect(() => {
    console.log("effect");
    const date = new Date(year, month - 1, day);
    dispatch(getTasksOfDay(date));
  }, []);

  const onHandleClose = () => {
    setOpenForm(false);
  };
  return (
    <div className="tasks-of-day">
      <button
        className="add-new-task"
        onClick={() => {
          setOpenForm(true);
        }}
      >
        Add new
      </button>
      <TaskList tasks={tasks} />
      <AddTaskForm
        open={openForm}
        handleClose={onHandleClose}
        date={new Date(year, month - 1, day)}
      />
    </div>
  );
};

export default TasksOfDay;
