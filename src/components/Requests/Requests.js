import React from "react";
import NavHeader from "../NavHeader/NavHeader";
import CheckAuth from "../CheckAuth/CheckAuth";
import RequestViewer from "./RequestViewer/RequestViewer";
import SearchRequests from "./SearchRequests/SearchRequests";
import "./Requests.css";

const Requests = props => {
  let auth = CheckAuth({ ...props });
  if (auth !== true) {
    return auth;
  }
  return (
    <div className="requests-full">
      <NavHeader {...props} />
      {props.id ? <RequestViewer {...props} /> : <SearchRequests {...props} />}
    </div>
  );
};

export default Requests;
