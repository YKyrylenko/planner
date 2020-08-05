import * as types from "../actions";

import { _getData } from "../utils/localStorageUtils";

const authInitialState = {
  token: _getData("token") || "",
  userData: _getData("user") || {
    id: "",
    name: "",
    photo: "",
  },
  loginError: null,
  loginSuccess: !!_getData("token") || false,
  signupError: null,
  signupSuccess: false,
};

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        signupSuccess: true,
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        signupError: action.error,
      };
    case types.LOGIN_SUCCESS:
      const { name, photo, id } = action.response.data.user;
      return {
        ...state,
        loginSuccess: true,
        userData: {
          name,
          photo,
          id,
        },
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.error,
      };
    case types.LOGOUT:
      return {
        ...state,
        loginSuccess: false,
        token: "",
        userData: {
          id: "",
          name: "",
          photo: "",
        },
      };

    default:
      return state;
  }
};
