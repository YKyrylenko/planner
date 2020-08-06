import { put, call } from "redux-saga/effects";
import * as types from "../actions";
import axios from "../utils/API";
import { _setData } from "../utils/localStorageUtils";

const login = (data) => {
  return axios.post("/auth/login", data);
};

export function* loginSaga({ userData }) {
  try {
    const response = yield call(login, userData);
    const { token, user } = response.data;
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    _setData("token", token); // set user data to localStorage
    _setData("user", user);

    yield put({ type: types.LOGIN_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.LOGIN_ERROR, error });
  }
}
