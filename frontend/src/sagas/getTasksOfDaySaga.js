import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import axios from "../utils/API";

const getTasksOfDay = ({ date }) => {
  return axios.get("/tasks", { params: { date } });
};

export function* getTaskOfDaySaga(date) {
  try {
    const response = yield call(getTasksOfDay, date);
    yield put({ type: types.GET_TASKS_OF_DAY_SUCCESS, response });
  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_TASKS_OF_DAY_ERROR, error });
  }
}
