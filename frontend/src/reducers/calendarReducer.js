import * as types from "../actions/index";

const initialCalendarState = {
  month: null,
};

export const calendarReducer = (state = initialCalendarState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_MONTH:
      return {
        ...state,
        month: action.payload,
      };
    default:
      return state;
  }
};
