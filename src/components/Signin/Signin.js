import React, { Component } from "react";
import "./Signin.css";
import HeroNav from "../HeroNav/HeroNav";
import { Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

class Signin extends Component {
  render() {
    return (
      <div className="signinfull">
        <HeroNav color="white" />
        <div className="signin">
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
            />
            <label>Email:</label>
            <br />
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
            />
            <label>Password:</label>
            <br />
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
            />
            <div>
              <Checkbox className="signin-remember">Remember me</Checkbox>
              <Link to="/forgot" className="signin-forgot">
                Forgot Password
              </Link>
            </div>
            <Button type="primary" className="signin-login">
              Log in
            </Button>
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
