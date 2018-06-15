import * as types from "./actionTypes";

export const setLoginStatus = update => ({
  type: types.CHANGE_LOGIN_STATUS,
  payload: update
});
