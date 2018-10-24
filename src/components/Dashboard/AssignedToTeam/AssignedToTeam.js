import React, { Component } from "react";
import moment from "moment";
import "./AssignedToTeam.css";
import { Row, Col, Select, message } from "antd";
import apiBackEnd from "../../../api/api";
const Option = Select.Option;

class AssignedToTeam extends Component {
  constructor() {
    super();
    this.state = {
      dashboardTeamAssignmentData: [],
      dashboardTeamAssignmentSearch: "unassigned"
    };
  }
  componentDidMount() {
    this.loadTeamAssignmentData();
  }
  loadTeamAssignmentData = async () => {
    const search = this.state.dashboardTeamAssignmentSearch;
    const { account, team } = this.props.user.user;
    const today = new Date();
    const yesterday = moment().subtract(1, "day");
    const week = moment().subtract(7, "day");
    const results = await apiBackEnd("searchrequests", "post", {
      account: account,
      status:
        search === "current" ? search : search === "unassigned" ? search : "",
      assign_team: team,
      date_range:
        search === "today"
          ? [yesterday, today]
          : search === "last7"
            ? [week, today]
            : ""
    });
    if (results === "search failed") {
      this.setState({ dashboardTeamAssignmentData: [] });
      return message.error(
        "Oops, something went wrong with the dashboard results"
      );
    }
    this.setState({ dashboardTeamAssignmentData: results });
  };
  onTeamAssignmentSelectorChange = value => {
    this.setState(
      { dashboardTeamAssignmentSearch: value },
      this.loadTeamAssignmentData
    );
  };
  render() {
    const totalresults = this.state.dashboardTeamAssignmentData.length;
    return (
      <div className="assignedtoteam">
        <Row>
          <Col span={20} className="assignedtoteam-title">
            ASSIGNED TO TEAM: ({totalresults}{" "}
            {totalresults === 1 ? "result" : "results"})
          </Col>
          <Col span={4} className="assignedtoteam-selector">
            <Select
              defaultValue="unassigned"
              style={{ width: 120 }}
              size="small"
              onChange={this.onTeamAssignmentSelectorChange}
            >
              <Option value="unassigned">Unassigned</Option>
              <Option value="current">Current</Option>
              <Option value="today">Today</Option>
              <Option value="last7">Last 7 Days</Option>
            </Select>
          </Col>
          <Col span={2} className="assignedtoteam-label">
            Request#:
          </Col>
          <Col span={4} className="assignedtoteam-label">
            Date:
          </Col>
          <Col span={3} className="assignedtoteam-label">
            Created by:
          </Col>
          <Col span={3} className="assignedtoteam-label">
            Customer Name:
          </Col>
          <Col span={3} className="assignedtoteam-label">
            Topic:
          </Col>
          <Col span={3} className="assignedtoteam-label">
            For Team:
          </Col>
          <Col span={3} className="assignedtoteam-label">
            Status:
          </Col>
          <Col span={3} className="assignedtoteam-label">
            Priority:
          </Col>
        </Row>
        <div className="assignedtoteam-databox">
          {this.state.dashboardTeamAssignmentData.map((result, i) => {
            return (
              <Row key={`${i}_MyRequest`}>
                <Col
                  span={2}
                  key={`${i}_MyRequestID`}
                  className="assignedtoteam-data"
                >
                  <a
                    href={`/requests/${result["id"]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="searchrequests-results-link"
                  >
                    {result["id"]}
                  </a>
                </Col>
                <Col
                  span={4}
                  key={`${i}_MyRequestDate`}
                  className="assignedtoteam-data"
                >
                  {result["created_at"]}
                </Col>
                <Col
                  span={3}
                  key={`${i}_MyRequestAuthor`}
                  className="assignedtoteam-data"
                >
                  {result["created_by"]}
                </Col>
                <Col
                  span={3}
                  key={`${i}_MyRequestName`}
                  className="assignedtoteam-data"
                >
                  {`${result["firstname"]} ${result["lastname"]}`}
                </Col>
                <Col
                  span={3}
                  key={`${i}_MyRequestTopic`}
                  className="assignedtoteam-data"
                >
                  {result["topic"]}
                </Col>
                <Col
                  span={3}
                  key={`${i}_MyRequestTeam`}
                  className="assignedtoteam-data"
                >
                  {result["assign_team"]}
                </Col>
                <Col
                  span={3}
                  key={`${i}_assignedtoteamtatus`}
                  className="assignedtoteam-data"
                >
                  {result["status"]}
                </Col>
                <Col
                  span={3}
                  key={`${i}_assignedtoteamPriority`}
                  className="assignedtoteam-data"
                >
                  {result["priority"]}
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AssignedToTeam;
