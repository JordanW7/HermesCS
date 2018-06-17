import React from "react";
import "./RequestViewer.css";

const RequestViewer = props => {
  return (
    <div className="RequestViewer">
      <h1> Hello {props.id}</h1>
    </div>
  );
};

export default RequestViewer;
