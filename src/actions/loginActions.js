import * as types from "./actionTypes";

export const setLoginStatus = update => ({
  type: types.CHANGE_LOGIN_STATUS,
  payload: update
});

export const loadUser = update => ({
  type: types.LOAD_USER,
  payload: update
});
