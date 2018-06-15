import React from "react";
import { Redirect } from "react-router";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <div className="nomatch-full">
      <span className="nomatch-text">Oops!</span>
      <Redirect to="/" />
    </div>
  );
};

export default NoMatch;
