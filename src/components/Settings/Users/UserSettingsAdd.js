import React, { Component } from "react";
import { Col, Form, Button, Input, Select, message } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

class UserSettingsAdd extends Component {
  constructor() {
    super();
    this.state = {
      userSettingsAddFirstName: "",
      userSettingsAddLastName: "",
      userSettingsAddEmail: "",
      userSettingsAddPassword: "",
      userSettingsAddAccess: "",
      userSettingsAddTeam: "",
      userSettingsTeamList: ""
    };
  }
  componentDidMount() {
    this.loadUserSettingsData();
  }
  loadUserSettingsData = () => {
    //Load list of teams for selection
    return;
  };
  onNewUserFirstNameChange = value => {
    this.setState({ userSettingsAddFirstName: value });
  };
  onNewUserLastNameChange = value => {
    this.setState({ userSettingsAddLastName: value });
  };
  onNewUserEmailChange = value => {
    this.setState({ userSettingsAddEmail: value });
  };
  onNewUserPasswordChange = value => {
    this.setState({ userSettingsAddPassword: value });
  };
  onNewUserTeamChange = event => {
    this.setState({ userSettingsAddTeam: event.target.value });
  };
  onAddUserSubmit = () => {
    console.log("MAKE API CALL HERE");
    message.success("API SENT");
  };
  render() {
    return (
      <Col span={18} className="settings-content-actions">
        <div className="settings-content-title">Add New User</div>
        <Form layout="inline">
          <FormItem label="First Name:">
            <Input onChange={this.onNewUserLastNameChange} />
          </FormItem>
          <FormItem label="Last Name:">
            <Input onChange={this.onNewUserFirstNameChange} />
          </FormItem>
          <FormItem label="Email:">
            <Input onChange={this.onNewUserEmailChange} />
          </FormItem>
          <FormItem label="Password:">
            <Input onChange={this.onNewUserPasswordChange} />
          </FormItem>
          <FormItem label="Team:">
            <Select
              defaultValue="Please select"
              onChange={this.onNewUserTeamChange}
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
          <Button type="primary" onClick={this.onAddUserSubmit}>
            Add
          </Button>
        </Form>
      </Col>
    );
  }
}

export default UserSettingsAdd;
