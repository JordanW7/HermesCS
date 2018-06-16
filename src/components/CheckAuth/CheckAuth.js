import React from "react";
import { Redirect } from "react-router-dom";

const CheckAuth = props => {
  if (!props.loginStatus.loginStatus) {
    return (
      <Redirect
        to={{
          pathname: "/signin",
          state: "redirected"
        }}
      />
    );
  }
  return true;
};

export default CheckAuth;
