import React, { Component } from "react";
import { Col, Form, Button, Input, Select, message } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

class TeamSettingsAdd extends Component {
  constructor() {
    super();
    this.state = {
      teamSettingsAddName: "",
      teamSettingsAddLeader: "",
      teamSettingsUserList: ""
    };
  }
  componentDidMount() {
    this.loadTeamSettingsData();
  }
  loadTeamSettingsData = () => {
    //Load list of users for selection
    return;
  };
  onNewTeamNameChange = value => {
    this.setState({ teamSettingsAddName: value });
  };
  onNewTeamLeaderChange = event => {
    this.setState({ teamSettingsAddLeader: event.target.value });
  };
  onAddTeamSubmit = () => {
    console.log("MAKE API CALL HERE");
    message.success("API SENT");
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
