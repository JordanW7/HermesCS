import React, { Component } from "react";
import { Row, Col, Form, Button, Input, message } from "antd";
import apiBackEnd from "../../../api/api";
import "./ProfileSettings.css";

const FormItem = Form.Item;

class ProfileSettings extends Component {
  constructor() {
    super();
    this.state = {
      profileSettingsCurrentPassword: "",
      profileSettingsNewPassword: ""
    };
  }
  onCurrentPasswordChange = event => {
    this.setState({ profileSettingsCurrentPassword: event.target.value });
  };
  onNewPasswordChange = event => {
    this.setState({ profileSettingsNewPassword: event.target.value });
  };
  onProfileSave = async () => {
    const newPassword = this.state.profileSettingsNewPassword;
    const currentPassword = this.state.profileSettingsCurrentPassword;
    if (!newPassword || !currentPassword) {
      return message.error("Please complete both fields");
    }
    if (newPassword === currentPassword) {
      return message.error(
        "The new password cannot be the same as the current password"
      );
    }
    const { email, account } = this.props.user.user;
    const response = await apiBackEnd("settings/updateprofile", "post", {
      account,
      email,
      currentPassword,
      newPassword
    });
    if (response === "invalid credentials") {
      return message.error(
        "Oops! The current password provided does not match."
      );
    }
    if (response === "updated") {
      return message.success("Your user profile has been updated.");
    }
    return message.error(
      "Oops! Something happened. Please try again or contact support."
    );
  };
  render() {
    return (
      <Form layout="inline">
        <Row>
          <Col span={24} className="settings-content-title">
            Change Password
          </Col>
          <Col span={11} style={{ textAlign: "right" }}>
            <FormItem label="Current Password:">
              <Input onChange={this.onCurrentPasswordChange} type="password" />
            </FormItem>
          </Col>
          <Col span={13} style={{ textAlign: "right" }}>
            <FormItem label="New Password:">
              <Input onChange={this.onNewPasswordChange} type="password" />
            </FormItem>
            <Button type="primary" onClick={this.onProfileSave}>
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default ProfileSettings;
