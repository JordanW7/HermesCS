import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
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

const NewRequest = Loadable({
  loader: () => import("./components/NewRequest/NewRequest"),
  loading: Loading
});

const Requests = Loadable({
  loader: () => import("./components/Requests/Requests"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Hero {...this.props} />} />
        <Route exact path="/about" render={() => <About {...this.props} />} />
        <Route
          exact
          path="/features"
          render={() => <Features {...this.props} />}
        />
        <Route
          exact
          path="/contact"
          render={() => <Contact {...this.props} />}
        />
        <Route exact path="/signin" render={() => <Signin {...this.props} />} />
        <Route
          exact
          path="/register"
          render={() => <Register {...this.props} />}
        />
        <Route exact path="/forgot" render={() => <Forgot {...this.props} />} />
        <Route
          exact
          path="/dashboard"
          render={() => <Dashboard {...this.props} />}
        />
        <Route
          exact
          path="/newrequest"
          render={() => <NewRequest {...this.props} />}
        />
        <Route
          exact
          path="/requests"
          render={() => <Requests {...this.props} />}
        />
        <Route
          path="/requests/:id"
          render={props => (
            <Requests id={props.match.params.id} {...this.props} />
          )}
        />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
