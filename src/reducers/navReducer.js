import initialState from "./initialState";
import { CHANGE_MOBILE_NAV_STATUS } from "../actions/actionTypes";

const mobileNavState = (state = initialState.mobileDropDownOpen, action) => {
  let newState = !state.mobileDropDownOpen;
  switch (action.type) {
    case CHANGE_MOBILE_NAV_STATUS:
      return Object.assign({}, state, { mobileDropDownOpen: newState });
    default:
      return state;
  }
};

export default mobileNavState;
