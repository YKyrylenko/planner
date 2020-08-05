import * as types from "./index";

export const signup = (userData) => ({
  type: types.SIGNUP_REQUEST,
  userData,
});

export const login = (userData) => ({
  type: types.LOGIN_REQUEST,
  userData,
});

export const logout = () => ({
  type: types.LOGOUT,
});
