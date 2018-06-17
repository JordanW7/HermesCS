import React from "react";
import Loadable from "react-loadable";
import LoadingPage from "../Loading/Loading";
import NavHeader from "../NavHeader/NavHeader";
import CheckAuth from "../CheckAuth/CheckAuth";
import "./Requests.css";

const Loading = props => {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

const RequestViewer = Loadable({
  loader: () => import("./RequestViewer/RequestViewer"),
  loading: Loading
});

const SearchRequests = Loadable({
  loader: () => import("./SearchRequests/SearchRequests"),
  loading: Loading
});

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
