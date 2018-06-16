import React from "react";
import NavHeader from "../NavHeader/NavHeader";
import "./Requests.css";

const Requests = props => {
  return (
    <div className="requests-full">
      <NavHeader {...props} />
      <div className="requests">
        <div className="requests-contents">
          <div className="requests-title">
            {props.id ? (
              <span>Request ID: {props.id}</span>
            ) : (
              <span>Searching</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
