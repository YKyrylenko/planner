import * as types from "./index";

export const setMonth = (payload) => {
  return { type: types.SET_SELECTED_MONTH, payload };
};
