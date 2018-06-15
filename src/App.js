import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import { connect } from "react-redux";
import { setLoginStatus } from "./actions/loginActions";

import NoMatch from "./components/NoMatch/NoMatch";
import LoadingPage from "./components/Loading/Loading";

const mapStateToProps = state => {
  return {
    loginStatus: state.loginState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignin: event => dispatch(setLoginStatus(true)),
    onSignout: event => dispatch(setLoginStatus(false))
  };
};

const Loading = props => {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return <LoadingPage />;
  } else {
    return <LoadingPage />;
  }
};

const Hero = Loadable({
  loader: () => import("./components/Hero/Hero"),
  loading: Loading
});

const About = Loadable({
  loader: () => import("./components/About/About"),
  loading: Loading
});

const Features = Loadable({
  loader: () => import("./components/Features/Features"),
  loading: Loading
});

const Contact = Loadable({
  loader: () => import("./components/Contact/Contact"),
  loading: Loading
});

const Signin = Loadable({
  loader: () => import("./components/Signin/Signin"),
  loading: Loading
});

const Forgot = Loadable({
  loader: () => import("./components/Forgot/Forgot"),
  loading: Loading
});

const Register = Loadable({
  loader: () => import("./components/Register/Register"),
  loading: Loading
});

const Dashboard = Loadable({
  loader: () => import("./components/Dashboard/Dashboard"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Hero {...this.props} />} />
        <Route exact path="/about" component={About} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
