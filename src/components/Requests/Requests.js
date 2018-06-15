import React from "react";
import "./Requests.css";

const Requests = props => {
  console.log(props);
  return (
    <div className="requests-full">
      <h1>Under Construction</h1>
      {props.id ? <h1>Request ID: {props.id}</h1> : <h1>Searching</h1>}
    </div>
  );
};

export default Requests;
