import React from "react";
import NavHeader from "../NavHeader/NavHeader";
import CheckAuth from "../CheckAuth/CheckAuth";
import RequestForm from "../RequestForm/RequestForm";

import "./NewRequest.css";

const NewRequest = props => {
  let auth = CheckAuth({ ...props });
  if (auth !== true) {
    return auth;
  }
  return (
    <div className="newrequest-full">
      <NavHeader {...props} />
      <div className="newrequest">
        <div className="newrequest-contents">
          <div className="newrequest-title">New Request</div>
          <RequestForm {...props} />
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
