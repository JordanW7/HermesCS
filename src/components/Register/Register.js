import React, { Component } from "react";
import "./Register.css";
import MainNav from "../MainNav/MainNav";
import { Icon, Input, Button, Checkbox, Tooltip } from "antd";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="registerfull">
        <MainNav color="white" />
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
            <label>
              Company's Account Name:{" "}
              <Tooltip title="This is what your team will sign into HermesCS with">
                <Icon type="info-circle-o" />
              </Tooltip>
            </label>
            <Input
              prefix={
                <Icon type="login" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              type="text"
            />
            <label>First Name:</label>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
            />
            <label>Last Name:</label>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
            />
            <label>Email:</label>
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
            />
            <label>Password:</label>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
            />
            <Button type="primary" className="register-submit">
              Register & Get Started!
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
