import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import "./App.css";

import NoMatch from "./components/NoMatch/NoMatch";
import LoadingPage from "./components/Loading/Loading";

function Loading(props) {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
    // } else if (props.pastDelay) {
    //   return <LoadingPage />;
  } else {
    return <LoadingPage />;
  }
}

const Hero = Loadable({
  loader: () => import("./components/Hero/Hero"),
  loading: Loading
});

const Signin = Loadable({
  loader: () => import("./components/Signin/Signin"),
  loading: Loading
});

const Register = Loadable({
  loader: () => import("./components/Register/Register"),
  loading: Loading
});

const About = Loadable({
  loader: () => import("./components/About/About"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
