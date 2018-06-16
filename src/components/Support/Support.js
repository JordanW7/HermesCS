import React from "react";
import "./Support.css";
import CheckAuth from "../CheckAuth/CheckAuth";

const Support = props => {
  let auth = CheckAuth({ ...props });
  if (auth !== true) {
    return auth;
  }
  return (
    <div className="support-full">
      <h1>Under Construction</h1>
    </div>
  );
};

export default Support;
