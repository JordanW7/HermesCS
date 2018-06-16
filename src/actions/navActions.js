import * as types from "./actionTypes";

export const setMobileNavStatus = update => ({
  type: types.CHANGE_MOBILE_NAV_STATUS,
  payload: update
});
