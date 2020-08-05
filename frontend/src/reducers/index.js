import { combineReducers } from "redux";

import { calendarReducer } from "./calendarReducer";
import { authReducer } from "./authReducer";
import { tasksReducer } from "./tasksReducer";

export default combineReducers({
  calendarReducer,
  authReducer,
  tasksReducer,
});
