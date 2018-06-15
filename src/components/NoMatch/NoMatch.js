import React from "react";
import { Link } from "react-router-dom";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <div className="nomatch-full">
      <p className="nomatch-text">Oops! This page doesn't exist.</p>
      <Link className="nomatch-return" to="/">
        BACK TO HOMEPAGE
      </Link>
    </div>
  );
};

export default NoMatch;
