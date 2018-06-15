import { combineReducers } from "redux";
import loginState from "./loginReducer";

const rootReducer = combineReducers({
  loginState
});

export default rootReducer;
