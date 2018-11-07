import React, { Component } from "react";
import "./Register.css";
import NavHeader from "../NavHeader/NavHeader";
import { Redirect } from "react-router-dom";
import { Icon, Input, Button, Tooltip, message } from "antd";
import apiBackEnd from "../../api/api";

class Register extends Component {
  constructor() {
    super();
    this.form = React.createRef();
    this.state = {
      registerAccount: "",
      registerFirstName: "",
      registerLastName: "",
      registerEmail: "",
      registerPassword: "",
      registerSuccess: false
    };
  }
  onRegisterAccountChange = event => {
    this.setState({ registerAccount: event.target.value });
  };
  onRegisterFirstNameChange = event => {
    this.setState({ registerFirstName: event.target.value });
  };
  onRegisterLastNameChange = event => {
    this.setState({ registerLastName: event.target.value });
  };
  onRegisterEmailChange = event => {
    this.setState({ registerEmail: event.target.value });
  };
  onRegisterPasswordChange = event => {
    this.setState({ registerPassword: event.target.value });
  };
  onRegisterSubmit = async () => {
    const validform = this.form.current.reportValidity();
    if (!validform) {
      return;
    }
    const {
      registerAccount,
      registerPassword,
      registerEmail,
      registerFirstName,
      registerLastName
    } = this.state;
    if (
      !registerAccount ||
      !registerEmail ||
      !registerPassword ||
      !registerFirstName ||
      !registerLastName
    ) {
      return message.error("Please fill in all of the fields to register.");
    }
    const request = await apiBackEnd("register", "post", {
      account: registerAccount,
      email: registerEmail,
      password: registerPassword,
      firstname: registerFirstName,
      lastname: registerLastName
    });
    if (request.errors) {
      return message.error(
        "Oops! Please check the fields have been completed correctly and try again. The password must be at least 8 characters and contain at least one letter and one number."
      );
    }
    if (request === "account exists") {
      return message.error("Oops, this account already exists.");
    }
    if (request === "success") {
      message.success("Account Created. Let's get you inside...");
      const data = await apiBackEnd("signin", "post", {
        account: registerAccount,
        email: registerEmail,
        password: registerPassword
      });
      if (data === "error" || !data.id || data.errors) {
        return message.error(
          "Oops! There was an unexpected problem while signing in."
        );
      }
      window.localStorage.setItem("token", data.token);
      const userdata = await apiBackEnd(
        `profile/${data.account}/${data.id}`,
        "get"
      );
      if (userdata === "error" || !userdata.id || data.errors) {
        return message.error(
          "Oops! There was an unexpected problem while loading your profile"
        );
      }
      this.props.onLoadUser(userdata);
      this.props.onSignin();
      this.setState({ registerSuccess: true });
      return message.success("Welcome to HermesCS!");
    }
    return message.error("Oops, something went wrong. Please try again");
  };
  render() {
    if (this.state.registerSuccess) {
      return (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        />
      );
    }
    return (
      <div className="register-full">
        <NavHeader {...this.props} />
        <div className="register">
          <span className="register-title">
            <Icon type="rocket" /> Register
          </span>
          <div className="register-box">
            <p className="register-text">
              Register your Contact Centre to be able to start using HermesCS by
              completing the below. If your Contact Centre is already setup with
              us, contact your admin to setup your user account.
            </p>
            <form ref={this.form}>
              <label>
                Company's Account Name:{" "}
                <Tooltip title="This is what your team will sign into Hermes CS with">
                  <Icon type="info-circle-o" />
                </Tooltip>
              </label>
              <Input
                prefix={
                  <Icon type="login" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="text"
                name="company"
                onChange={this.onRegisterAccountChange}
                required
              />
              <label>First Name:</label>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="text"
                name="fname"
                onChange={this.onRegisterFirstNameChange}
                required
              />
              <label>Last Name:</label>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="text"
                name="lname"
                onChange={this.onRegisterLastNameChange}
                required
              />
              <label>Email:</label>
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="email"
                name="email"
                onChange={this.onRegisterEmailChange}
                required
              />
              <label>Password:</label>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                name="password"
                onChange={this.onRegisterPasswordChange}
                required
              />
              <Button
                type="primary"
                className="register-button"
                onClick={this.onRegisterSubmit}
              >
                Register & Get Started!
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
