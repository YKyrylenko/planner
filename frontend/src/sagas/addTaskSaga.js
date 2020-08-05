import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import axios from "../utils/API";

const add = ({ task, date }) => {
  return axios.post("/tasks/add", { task, date });
};

export function* addTaskSaga(task, date) {
  try {
    const response = yield call(add, task, date);
    yield put({ type: types.ADD_TASK_SUCCESS, response });
  } catch (error) {
    console.log(error);
    yield put({ type: types.ADD_TASK_ERROR, error });
  }
}
