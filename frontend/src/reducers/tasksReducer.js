import * as types from "../actions";

const initialTasksState = {
  tasks: [],
  getSuccess: false,
  getError: "",
};

export const tasksReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    case types.GET_TASKS_OF_DAY_SUCCESS:
      return {
        ...state,
        tasks: [...action.response.data],
        getSuccess: true,
      };
    case types.ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.response.data],
      };
    default:
      return state;
  }
};
