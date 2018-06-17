import React from "react";
import { Link } from "react-router-dom";
import "./SearchRequests.css";

const SearchRequests = props => {
  return (
    <div className="searchrequests">
      <h1> Let's Search </h1>
      <Link to="/requests/123">Test</Link>
    </div>
  );
};

export default SearchRequests;
