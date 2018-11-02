import React, { Component } from "react";
import { Col, Form, Button, Input, Select, message } from "antd";
import apiBackEnd from "../../../api/api";

const FormItem = Form.Item;
const Option = Select.Option;

class TeamSettingsAdd extends Component {
  constructor() {
    super();
    this.state = {
      teamSettingsAddName: "",
      teamSettingsAddLeader: "",
      teamSettingsUserList: "",
      teamSettingsUserData: ""
    };
  }
  componentDidMount() {
    this.loadTeamSettingsData();
  }
  loadTeamSettingsData = async () => {
    const { account } = this.props.user.user;
    const userdata = await apiBackEnd(`users/${account}`, "get");
    if (!userdata) {
      return;
    }
    const teamSettingsUserList = [];
    const teamSettingsUserData = {};
    for (let i = 0; i < userdata.length; i++) {
      let user = `${userdata[i].firstname} ${userdata[i].lastname}`;
      teamSettingsUserData[user] = userdata[i];
      teamSettingsUserList.push([user]);
    }
    this.setState({ teamSettingsUserList });
    this.setState({ teamSettingsUserData });
  };
  onNewTeamNameChange = event => {
    this.setState({ teamSettingsAddName: event.target.value });
  };
  onNewTeamLeaderChange = value => {
    this.setState({ teamSettingsAddLeader: value });
  };
  onAddTeamSubmit = async () => {
    const {
      teamSettingsAddName,
      teamSettingsAddLeader,
      teamSettingsUserData
    } = this.state;
    if (!teamSettingsAddName || !teamSettingsAddLeader) {
      return message.error("Please complete all fields");
    }
    const { email, account } = this.props.user.user;
    const response = await apiBackEnd("settings/addteam", "post", {
      account,
      user: email,
      team: teamSettingsAddName,
      leader: teamSettingsAddLeader,
      leaderemail: teamSettingsUserData[teamSettingsAddLeader].email
    });
    if (response === "already exists") {
      return message.error("Oops! A team with this name already exists.");
    }
    if (response === "team added") {
      return message.success("The new team has been added");
    }
    return message.error(
      "Oops! Something happened. Please try again or contact support."
    );
  };
  render() {
    return (
      <Col span={18} className="settings-content-actions">
        <div className="settings-content-title">Add New Team</div>
        <Form layout="inline">
          <FormItem label="New Team Name:">
            <Input onChange={this.onNewTeamNameChange} />
          </FormItem>
          <FormItem label="Assign Team Leader:">
            <Select
              defaultValue="Please select"
              onChange={this.onNewTeamLeaderChange}
            >
              {this.state.teamSettingsUserList &&
                this.state.teamSettingsUserList.map((person, i) => {
                  return (
                    <Option key={`${i}_person`} value={`${person}`}>
                      {person}
                    </Option>
                  );
                })}
            </Select>
          </FormItem>
          <Button type="primary" onClick={this.onAddTeamSubmit}>
            Add
          </Button>
        </Form>
      </Col>
    );
  }
}

export default TeamSettingsAdd;
