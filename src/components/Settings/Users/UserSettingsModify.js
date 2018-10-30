import React, { Component } from "react";
import { Col, Form, Button, Select, message } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

class UserSettingsModify extends Component {
  constructor() {
    super();
    this.state = {
      userSettingsModName: "",
      userSettingsModAccess: "",
      userSettingsModTeam: "",
      userSettingsUserList: "",
      userSettingsTeamList: ""
    };
  }
  componentDidMount() {
    this.loadUserSettingsModData();
  }
  loadUserSettingsModData = () => {
    //Load list of teams for selection
    //load list of users for selection
    return;
  };
  onModUserNameChange = event => {
    this.setState({ userSettingsModName: event.target.value });
    //load whether this accounts disabled or even editable by this user.
  };
  onModUserTeamChange = event => {
    this.setState({ userSettingsAddTeam: event.target.value });
  };
  onModUserSubmit = () => {
    console.log("MAKE API CALL HERE");
    message.success("API SENT");
  };
  onModUserStatusChange = () => {
    console.log("MAKE API CALL HERE");
    message.success("API SENT");
  };
  render() {
    return (
      <Col span={18} className="settings-content-actions">
        <div className="settings-content-title">Modify User</div>
        <Form layout="inline">
          <FormItem label="User:">
            <Select
              defaultValue="Please select"
              onChange={this.onModUserNameChange}
            >
              {this.state.userSettingsUserList &&
                this.state.userSettingsUserList.map((user, i) => {
                  return (
                    <Option key={`${i}_user`} value={`${user}`}>
                      {user}
                    </Option>
                  );
                })}
            </Select>
          </FormItem>

          <FormItem label="New Team:">
            <Select
              defaultValue="Please select"
              onChange={this.onModUserTeamChange}
            >
              {this.state.userSettingsTeamList &&
                this.state.userSettingsTeamList.map((team, i) => {
                  return (
                    <Option key={`${i}_team`} value={`${team}`}>
                      {team}
                    </Option>
                  );
                })}
            </Select>
          </FormItem>
          <Button type="primary" onClick={this.onModUserSubmit}>
            Update
          </Button>
          {
            //could change this to a toggle button
          }
          <Button type="primary" onClick={this.onModUserStatusChange}>
            Disable/Renable Account
          </Button>
        </Form>
      </Col>
    );
  }
}

export default UserSettingsModify;
