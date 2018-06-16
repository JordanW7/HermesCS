import { combineReducers } from "redux";
import loginState from "./loginReducer";
import mobileNavState from "./navReducer";

const rootReducer = combineReducers({
  loginState,
  mobileNavState
});

export default rootReducer;
