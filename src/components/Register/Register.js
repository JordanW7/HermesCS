import React, { Component } from "react";
import "./Register.css";
import HeroNav from "../HeroNav/HeroNav";
import { Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="registerfull">
        <HeroNav color="white" />
      </div>
    );
  }
}

export default Register;
