import React, { Component } from "react";
import { Col, Form, Button, Select, message } from "antd";
import apiBackEnd from "../../../api/api";

const FormItem = Form.Item;
const Option = Select.Option;

class TeamSettingsModify extends Component {
  constructor() {
    super();
    this.state = {
      teamSettingsModName: "",
      teamSettingsModLeader: "",
      teamSettingsTeamList: "",
      teamSettingsUserList: ""
    };
  }
  componentDidMount() {
    this.loadTeamSettingsModData();
  }
  loadTeamSettingsModData = async () => {
    //Load list of users for selection
    //load list of teams for selection
    return;
  };
  onModTeamNameChange = value => {
    this.setState({ teamSettingsModName: value });
  };
  onModTeamLeaderChange = value => {
    this.setState({ teamSettingsModLeader: value });
  };
  onModTeamSubmit = async () => {
    console.log("MAKE API CALL HERE");
    message.success("API SENT");
  };
  onModTeamDelete = async () => {
    //Warn or disallow if team is not empty.
    console.log("MAKE API CALL HERE");
    message.success("API SENT");
  };
  render() {
    return (
      <Col span={18} className="settings-content-actions">
        <div className="settings-content-title">Modify Team</div>
        <Form layout="inline">
          <FormItem label="Team:">
            <Select
              defaultValue="Please select"
              onChange={this.onModTeamNameChange}
            >
              {this.state.teamSettingsTeamList &&
                this.state.teamSettingsTeamList.map((team, i) => {
                  return (
                    <Option key={`${i}_team`} value={`${team}`}>
                      {team}
                    </Option>
                  );
                })}
            </Select>
          </FormItem>
          <FormItem label="Assign Team Leader:">
            <Select
              defaultValue="Please select"
              onChange={this.onModTeamLeaderChange}
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
          <Button type="primary" onClick={this.onModTeamSubmit}>
            Update
          </Button>
          <Button type="primary" onClick={this.onModTeamDelete}>
            Delete
          </Button>
        </Form>
      </Col>
    );
  }
}

export default TeamSettingsModify;
