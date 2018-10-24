import React, { Component } from "react";
import moment from "moment";
import "./AssignedToMe.css";
import { Row, Col, Select, message } from "antd";
import apiBackEnd from "../../../api/api";
const Option = Select.Option;

class AssignedToMe extends Component {
  constructor() {
    super();
    this.state = {
      dashboardMyAssignmentData: [],
      dashboardMyAssignmentSearch: "unassigned"
    };
  }
  componentDidMount() {
    this.loadMyAssignmentData();
  }
  loadMyAssignmentData = async () => {
    const search = this.state.dashboardMyAssignmentSearch;
    const { account, firstname, lastname } = this.props.user.user;
    const today = new Date();
    const yesterday = moment().subtract(1, "day");
    const week = moment().subtract(7, "day");
    const results = await apiBackEnd("searchrequests", "post", {
      account: account,
      status: search === "current" ? search : "",
      assign_person: `${firstname} ${lastname}`,
      date_range:
        search === "today"
          ? [yesterday, today]
          : search === "last7"
            ? [week, today]
            : ""
    });
    if (results === "search failed") {
      this.setState({ dashboardMyAssignmentData: [] });
      return message.error(
        "Oops, something went wrong with the dashboard results"
      );
    }
    this.setState({ dashboardMyAssignmentData: results });
  };
  onTeamAssignmentSelectorChange = value => {
    this.setState(
      { dashboardMyAssignmentSearch: value },
      this.loadTeamAssignmentData
    );
  };
  render() {
    const totalresults = this.state.dashboardMyAssignmentData.length;
    return (
      <div className="assignedtome">
        <Row>
          <Col span={20} className="assignedtome-title">
            ASSIGNED TO ME: ({totalresults}{" "}
            {totalresults === 1 ? "result" : "results"})
          </Col>
          <Col span={4} className="assignedtome-selector">
            <Select
              defaultValue="current"
              style={{ width: 120 }}
              size="small"
              onChange={this.onMyAssignmentSelectorChange}
            >
              <Option value="current">Current</Option>
              <Option value="today">Today</Option>
              <Option value="last7">Last 7 Days</Option>
            </Select>
          </Col>
          <Col span={2} className="assignedtome-label">
            Request#:
          </Col>
          <Col span={4} className="assignedtome-label">
            Date:
          </Col>
          <Col span={3} className="assignedtome-label">
            Created by:
          </Col>
          <Col span={3} className="assignedtome-label">
            Customer Name:
          </Col>
          <Col span={3} className="assignedtome-label">
            Topic:
          </Col>
          <Col span={3} className="assignedtome-label">
            For Team:
          </Col>
          <Col span={3} className="assignedtome-label">
            Status:
          </Col>
          <Col span={3} className="assignedtome-label">
            Priority:
          </Col>
        </Row>
        <div className="assignedtome-databox">
          {this.state.dashboardMyAssignmentData.map((result, i) => {
            return (
              <Row key={`${i}_MyRequest`}>
                <Col
                  span={2}
                  key={`${i}_MyRequestID`}
                  className="assignedtome-data"
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
                  className="assignedtome-data"
                >
                  {result["created_at"]}
                </Col>
                <Col
                  span={3}
                  key={`${i}_MyRequestAuthor`}
                  className="assignedtome-data"
                >
                  {result["created_by"]}
                </Col>
                <Col
                  span={3}
                  key={`${i}_MyRequestName`}
                  className="assignedtome-data"
                >
                  {`${result["firstname"]} ${result["lastname"]}`}
                </Col>
                <Col
                  span={3}
                  key={`${i}_MyRequestTopic`}
                  className="assignedtome-data"
                >
                  {result["topic"]}
                </Col>
                <Col
                  span={3}
                  key={`${i}_MyRequestTeam`}
                  className="assignedtome-data"
                >
                  {result["assign_team"]}
                </Col>
                <Col
                  span={3}
                  key={`${i}_assignedtometatus`}
                  className="assignedtome-data"
                >
                  {result["status"]}
                </Col>
                <Col
                  span={3}
                  key={`${i}_assignedtomePriority`}
                  className="assignedtome-data"
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

export default AssignedToMe;
