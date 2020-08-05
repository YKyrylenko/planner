import * as types from "./index";

export const add = (task, date) => ({
  type: types.ADD_TASK_REQUEST,
  task,
  date,
});

export const getTasksOfDay = (date) => ({
  type: types.GET_TASKS_OF_DAY_REQUEST,
  date,
});
