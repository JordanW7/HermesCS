import React from "react";
import { Redirect } from "react-router-dom";

const Signout = ({ onSignout }) => {
  window.sessionStorage.removeItem("token");
  window.localStorage.removeItem("token");
  return (
    <Redirect
      to={{
        pathname: "/",
        state: "signout"
      }}
    />
  );
};

export default Signout;
