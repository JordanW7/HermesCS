import React from "react";
import { Redirect } from "react-router-dom";

const Signout = ({ onSignout }) => {
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
