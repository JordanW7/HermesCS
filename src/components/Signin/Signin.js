import React, { Component } from "react";
import "./Signin.css";
import NavHeader from "../NavHeader/NavHeader";
import { Redirect } from "react-router-dom";
import { Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

import apiBackEnd from "../../api/api";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInAccount: "",
      signInEmail: "",
      signInPassword: "",
      signInRememberMe: false,
      signInFailed: false
    };
  }
  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };
  onAccountChange = event => {
    this.setState({ signInAccount: event.target.value });
  };
  onRememberMeChange = () => {
    this.setState({ signInRememberMe: !this.state.signInRememberMe });
  };
  saveAuthToken = (rememberme, token) => {
    rememberme
      ? window.localStorage.setItem("token", token)
      : window.sessionStorage.setItem("token", token);
  };
  onSubmitSignIn = async () => {
    const { signInAccount, signInEmail, signInPassword } = this.state;
    if (!signInAccount || !signInEmail || !signInPassword) {
      return this.setState({ signInFailed: "incomplete" });
    }
    const data = await apiBackEnd("signin", "post", {
      account: signInAccount,
      email: signInEmail,
      password: signInPassword
    });
    if (data === "error" || !data.id) {
      this.setState({ signInFailed: true });
    } else {
      const userdata = await apiBackEnd(
        `profile/${data.account}/${data.id}`,
        "get"
      );
      if (userdata === "error" || !userdata.id) {
        this.setState({ signInFailed: true });
      } else {
        this.setState({ signInFailed: false });
        this.saveAuthToken(this.state.signInRememberMe, data.token);
        this.props.onLoadUser(userdata);
        this.props.onSignin();
      }
    }
  };
  render() {
    if (this.props.loginStatus.loginStatus) {
      return (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        />
      );
    }
    return (
      <div className="signin-full">
        <NavHeader {...this.props} />
        <div className="signin">
          {this.props.location.state && (
            <span className="signin-redirected">
              Oops! You're not signed in.
            </span>
          )}
          <span className="signin-title">
            <Icon type="lock" /> Signin
          </span>
          <div className="signin-box">
            <label>Account:</label>
            <br />
            <Input
              prefix={
                <Icon type="login" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              type="text"
              onChange={this.onAccountChange}
            />
            <label>Email:</label>
            <br />
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
              onChange={this.onEmailChange}
            />
            <label>Password:</label>
            <br />
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              onChange={this.onPasswordChange}
            />
            <div>
              <Checkbox
                onChange={this.onRememberMeChange}
                className="signin-remember"
              >
                Remember me
              </Checkbox>
              <Link to="/forgot" className="signin-forgot">
                Forgot Password
              </Link>
            </div>
            <Button
              type="primary"
              className="signin-login"
              onClick={this.onSubmitSignIn}
            >
              Log in
            </Button>
            {this.state.signInFailed === "incomplete" && (
              <span className="signin-failed">
                Oops! You didn't fill out all the boxes. Please double-check and
                try again.
              </span>
            )}
            {this.state.signInFailed === true && (
              <span className="signin-failed">
                Sorry, incorrect account name/email/password. Please
                double-check and try again.
              </span>
            )}
            <span className="signin-notuser">
              Not registered? Contact your Contact Centre's admin to be added to
              the system or{" "}
              <Link to="/register" className="signin-notuser-register">
                register a new Contact Centre.
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
