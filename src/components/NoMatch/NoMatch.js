import React from "react";
import { Link } from "react-router-dom";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <main className="nomatch-full">
      <header className="nomatch-text">Oops! This page doesn't exist.</header>
      <Link className="nomatch-return" to="/">
        BACK TO HOMEPAGE
      </Link>
    </main>
  );
};

export default NoMatch;
