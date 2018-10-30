import React, { Component } from "react";
import { Col, Form, Button, Input, message } from "antd";
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
  onCurrentPasswordChange = value => {
    this.setState({ profileSettingsCurrentPassword: value });
  };
  onNewPasswordChange = value => {
    this.setState({ profileSettingsNewPassword: value });
  };
  onProfileSave = () => {
    console.log("MAKE API CALL HERE");
    message.success("API SENT");
  };
  render() {
    return (
      <Col span={18} className="settings-content-actions">
        <div className="settings-content-title">Change Password</div>
        <Form layout="inline">
          <FormItem label="Current Password:">
            <Input onChange={this.onCurrentPasswordChange} type="password" />
          </FormItem>
          <FormItem label="New Password:">
            <Input onChange={this.onNewPasswordChange} type="password" />
          </FormItem>
          <Button type="primary" onClick={this.onProfileSave}>
            Save
          </Button>
        </Form>
      </Col>
    );
  }
}

export default ProfileSettings;
