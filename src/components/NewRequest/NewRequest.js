import React from "react";
import "./NewRequest.css";
import NavHeader from "../NavHeader/NavHeader";

const NewRequest = props => {
  return (
    <div className="newrequest-full">
      <NavHeader {...props} />
      <div className="newrequest">
        <div className="newrequest-contents">
          <div className="newrequest-title">New Request</div>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
