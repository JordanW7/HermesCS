import React, { Component } from "react";
import "./Forgot.css";
import NavHeader from "../NavHeader/NavHeader";
import { Redirect } from "react-router-dom";
import { Icon, Input, Button, message } from "antd";

import apiBackEnd from "../../api/api";

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forgotAccount: "",
      forgotEmail: "",
      forgotCode: "",
      forgotNewPassword: "",
      forgotNewPasswordConfirm: "",
      forgotCodeBox: false,
      forgotCodeChecked: false,
      forgotComplete: false
    };
  }
  onEmailChange = event => {
    this.setState({ forgotEmail: event.target.value });
  };
  onCodeChange = event => {
    this.setState({ forgotCode: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ forgotNewPassword: event.target.value });
  };
  onPasswordConfirmChange = event => {
    this.setState({ forgotNewPasswordConfirm: event.target.value });
  };
  onAccountChange = event => {
    this.setState({ forgotAccount: event.target.value });
  };
  onSubmitChangePassword = async () => {
    const {
      forgotAccount,
      forgotEmail,
      forgotCode,
      forgotNewPassword,
      forgotNewPasswordConfirm
    } = this.state;
    if (
      !forgotAccount ||
      !forgotEmail ||
      !forgotCode ||
      !forgotNewPasswordConfirm ||
      !forgotNewPassword
    ) {
      return message.error("Please complete both fields");
    }
    if (forgotNewPassword !== forgotNewPasswordConfirm) {
      return message.error("Both passwords do not match.");
    }
    const response = await apiBackEnd("forgotcodesubmit", "post", {
      account: forgotAccount,
      email: forgotEmail,
      code: forgotCode,
      newpassword: forgotNewPassword
    });
    if (response.errors) {
      return message.error(
        "Oops! Please check that the fields have been completed correctly."
      );
    }
    if (response === "changed") {
      message.success("Password changed. Redirecting to login page.");
      return this.setState({ forgotComplete: true });
    }
    return message.error(
      "Oops! Something unexpected happened. Please try again."
    );
  };
  onSubmitCode = async () => {
    const { forgotAccount, forgotEmail, forgotCode } = this.state;
    if (!forgotAccount || !forgotEmail || !forgotCode) {
      return message.error(
        "Please fill out both your email, the company account name and your verification code."
      );
    }
    const response = await apiBackEnd("forgotcodesubmit", "post", {
      account: forgotAccount,
      email: forgotEmail,
      code: forgotCode
    });
    if (response === "match") {
      return this.setState({ forgotCodeChecked: true });
    }
    if (response === "nomatch") {
      return message.error("The verification code provided is not valid");
    }
    return message.error(
      "Oops! Please check the fields have been completed correctly and try again."
    );
  };
  onSubmitForgot = async () => {
    const { forgotAccount, forgotEmail } = this.state;
    if (!forgotAccount || !forgotEmail) {
      return message.error(
        "Please fill out both your email and the company account name."
      );
    }
    const response = await apiBackEnd("forgot", "post", {
      account: forgotAccount,
      email: forgotEmail
    });
    if (response.errors) {
      return message.error(
        "Oops! Please check the fields have been completed correctly and try again."
      );
    }
    if (response === "complete") {
      this.setState({ forgotCodeBox: true });
      return message.success("We have emailed you a reset code.");
    }
    if (response === "does not exist") {
      return message.error("Account/Email combination not found.");
    }
    return message.error(
      "Oops! Something unexpected happened. Please try again"
    );
  };
  render() {
    const { forgotCodeBox, forgotCodeChecked, forgotComplete } = this.state;
    if (this.props.loginStatus.loginStatus) {
      return (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        />
      );
    }
    if (forgotComplete) {
      return (
        <Redirect
          to={{
            pathname: "/signin"
          }}
        />
      );
    }
    return (
      <div className="forgot-full">
        <NavHeader {...this.props} />
        <div className="forgot">
          <span className="forgot-title">
            <Icon type="lock" /> Forgot Password
          </span>
          {!forgotCodeChecked && (
            <div className="forgot-box">
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
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="text"
                onChange={this.onEmailChange}
              />
              {forgotCodeBox && (
                <div>
                  <label>Email Verification Code:</label>
                  <br />
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="text"
                    onChange={this.onCodeChange}
                  />
                  <Button
                    type="primary"
                    className="forgot-button"
                    onClick={this.onSubmitCode}
                  >
                    Submit
                  </Button>
                </div>
              )}
              <Button
                type="primary"
                className="forgot-button"
                onClick={this.onSubmitForgot}
              >
                {forgotCodeBox ? "Request new emailed code" : "Reset Password"}
              </Button>
            </div>
          )}
          {forgotCodeChecked && (
            <div className="forgot-box">
              <label>New Password:</label>
              <br />
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                onChange={this.onPasswordChange}
              />
              <label>Confirm:</label>
              <br />
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                onChange={this.onPasswordConfirmChange}
              />
              <Button
                type="primary"
                className="forgot-button"
                onClick={this.onSubmitChangePassword}
              >
                Change Password
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Forgot;
