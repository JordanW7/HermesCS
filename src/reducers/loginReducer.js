import initialState from "./initialState";
import { CHANGE_LOGIN_STATUS, LOAD_USER } from "../actions/actionTypes";

export const loginState = (state = initialState.loginStatus, action) => {
  let newState;
  switch (action.type) {
    case CHANGE_LOGIN_STATUS:
      newState = action.payload;
      return Object.assign({}, state, { loginStatus: newState });
    default:
      return state;
  }
};

export const userState = (state = { user: initialState.user }, action) => {
  let newState;
  switch (action.type) {
    case LOAD_USER:
      newState = action.payload;
      return Object.assign({}, state, { user: newState });
    default:
      return state;
  }
};
