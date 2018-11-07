import React, { Component } from "react";
import { Row, Col, Form, Button, Select, message } from "antd";
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
      teamSettingsTeamData: "",
      teamSettingsUserList: "",
      teamSettingsUserData: "",
      teamSettingsCurrentLeader: ""
    };
  }
  componentDidMount() {
    this.loadTeamSettingsModData();
  }
  loadTeamSettingsModData = async () => {
    const { account } = this.props.user.user;
    const teamdata = await apiBackEnd(`teams/${account}`, "get");
    if (!teamdata || teamdata.errors) {
      return message.error("Oops! There was a problem loading the team data");
    }
    const teamSettingsTeamList = [];
    const teamSettingsTeamData = {};
    for (let i = 0; i < teamdata.length; i++) {
      let { team } = teamdata[i];
      teamSettingsTeamData[team] = teamdata[i];
      teamSettingsTeamList.push([team]);
    }
    this.setState({ teamSettingsTeamList });
    this.setState({ teamSettingsTeamData });
    const userdata = await apiBackEnd(`users/${account}`, "get");
    if (!userdata || userdata.errors) {
      return message.error("Oops! There was a problem loading the user data");
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
  onModTeamNameChange = value => {
    this.setState({ teamSettingsModName: value });
    this.setState({
      teamSettingsCurrentLeader: this.state.teamSettingsTeamData[value].leader
    });
  };
  onModTeamLeaderChange = value => {
    this.setState({ teamSettingsModLeader: value });
  };
  onModTeamSubmit = async () => {
    const {
      teamSettingsModLeader,
      teamSettingsCurrentLeader,
      teamSettingsModName
    } = this.state;
    if (!teamSettingsModLeader || !teamSettingsModName) {
      return message.error("Please select the team and new team leader");
    }
    if (teamSettingsModLeader === teamSettingsCurrentLeader) {
      return;
    }
    const { account, email } = this.props.user.user;
    const response = await apiBackEnd("settings/modifyteam", "post", {
      account,
      leader: teamSettingsModLeader,
      user: email,
      team: teamSettingsModName
    });
    if (response.errors) {
      return message.error(
        "Oops! Please check the fields have been completed correctly and try again."
      );
    }
    if (response === "team updated") {
      this.setState({ teamSettingsCurrentLeader: teamSettingsModLeader });
      return message.success("Team has been updated");
    }
    return message.error(
      "Oops! Something happened. Please try again or contact support."
    );
  };
  onModTeamDelete = async () => {
    const { teamSettingsModName } = this.state;
    if (!teamSettingsModName) {
      return message.error("Please select a team to delete");
    }
    const { account, email } = this.props.user.user;
    const response = await apiBackEnd("settings/deleteteam", "post", {
      account,
      user: email,
      team: teamSettingsModName
    });
    if (response.errors) {
      return message.error(
        "Oops! Please check the team has been selected and try again."
      );
    }
    if (response === "team members still exist") {
      return message.error(
        "Please change all team members to another team or disable them before deleting the team"
      );
    }
    if (response === "team deleted") {
      return message.success("Team has been deleted");
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
            Modify Team
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            style={{ textAlign: "right" }}
          >
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
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            style={{ textAlign: "right" }}
          >
            <FormItem label="Assign Team Leader:">
              <Select
                defaultValue={
                  this.state.teamSettingsCurrentLeader
                    ? this.state.teamSettingsCurrentLeader
                    : "Please select"
                }
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
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            style={{ textAlign: "center" }}
          >
            <Button type="primary" onClick={this.onModTeamSubmit}>
              Update
            </Button>
            <Button type="danger" onClick={this.onModTeamDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default TeamSettingsModify;
