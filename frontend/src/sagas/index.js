import { fork } from "redux-saga/effects";
import { watchAuth } from "./watchers";

export function* rootSaga() {
  yield fork(watchAuth);
}
