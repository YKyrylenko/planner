import { put, call } from "redux-saga/effects";

import * as types from "../actions";
import axios from "../utils/API";

const signup = (data) => {
  console.log(data);
  return axios({
    url: "/auth/signup",
    method: "POST",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export function* signupSaga({ userData }) {
  console.log(userData);
  try {
    const response = yield call(signup, userData);
    yield put({ type: types.SIGNUP_SUCCESS, response });
  } catch (error) {
    console.log(error);
    yield put({ type: types.SIGNUP_ERROR, error });
  }
}
