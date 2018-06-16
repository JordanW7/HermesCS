import React from "react";
import NavHeader from "../NavHeader/NavHeader";
import CheckAuth from "../CheckAuth/CheckAuth";
import "./Requests.css";

const Requests = props => {
  let auth = CheckAuth({ ...props });
  if (auth !== true) {
    return auth;
  }
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
