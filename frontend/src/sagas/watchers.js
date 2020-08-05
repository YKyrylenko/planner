import { takeLatest } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { signupSaga } from "./signupSaga";
import { addTaskSaga } from "./addTaskSaga";
import { getTaskOfDaySaga } from "./getTasksOfDaySaga";

import * as types from "../actions";

export function* watchAuth() {
  yield takeLatest(types.SIGNUP_REQUEST, signupSaga);
  yield takeLatest(types.LOGIN_REQUEST, loginSaga);
  yield takeLatest(types.ADD_TASK_REQUEST, addTaskSaga);
  yield takeLatest(types.GET_TASKS_OF_DAY_REQUEST, getTaskOfDaySaga);
}
