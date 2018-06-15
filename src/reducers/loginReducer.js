import initialState from "./initialState";
import { CHANGE_LOGIN_STATUS } from "../actions/actionTypes";

const loginState = (state = initialState.loginStatus, action) => {
  let newState;
  switch (action.type) {
    case CHANGE_LOGIN_STATUS:
      newState = action.payload;
      return Object.assign({}, state, { loginStatus: newState });
    default:
      return state;
  }
};

export default loginState;
