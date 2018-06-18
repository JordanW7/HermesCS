import { combineReducers } from "redux";
import { loginState, userState } from "./loginReducer";
import mobileNavState from "./navReducer";

const rootReducer = combineReducers({
  loginState,
  userState,
  mobileNavState
});

export default rootReducer;
