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
        search === "current" ? search : search === "unassigned" ? search : "%",
      assign_person: "%",
      assign_team: team,
      date_range:
        search === "today"
          ? [yesterday, today]
          : search === "last7"
            ? [week, today]
            : []
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
          <Col
            xs={16}
            sm={16}
            md={16}
            lg={20}
            xl={20}
            className="assignedtoteam-title"
          >
            ASSIGNED TO TEAM: ({totalresults}{" "}
            {totalresults === 1 ? "result" : "results"})
          </Col>
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={4}
            xl={4}
            className="assignedtoteam-selector"
          >
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
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            xl={2}
            className="assignedtoteam-label"
          >
            Request#:
          </Col>
          <Col
            xs={7}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            className="assignedtoteam-label"
          >
            Date:
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={3}
            xl={3}
            className="assignedtoteam-label mobilehide-always"
          >
            Created by:
          </Col>
          <Col
            xs={7}
            sm={5}
            md={5}
            lg={3}
            xl={3}
            className="assignedtoteam-label"
          >
            Customer:
          </Col>
          <Col
            xs={0}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            className="assignedtoteam-label mobilehide-portrait"
          >
            Topic:
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={3}
            xl={3}
            className="assignedtoteam-label mobilehide-always"
          >
            For Team:
          </Col>
          <Col
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            className="assignedtoteam-label"
          >
            Status:
          </Col>
          <Col
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            className="assignedtoteam-label"
          >
            Priority:
          </Col>
          <Col span={24} className="assignedtoteam-labeldiv" />
        </Row>
        <div className="assignedtoteam-databox">
          {this.state.dashboardTeamAssignmentData.map((result, i) => {
            return (
              <Row key={`${i}_MyRequest`}>
                <Col
                  xs={4}
                  sm={4}
                  md={4}
                  lg={2}
                  xl={2}
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
                  xs={7}
                  sm={6}
                  md={6}
                  lg={4}
                  xl={4}
                  key={`${i}_MyRequestDate`}
                  className="assignedtoteam-data"
                >
                  {moment(result["created_at"]).format("MM/DD/YY h:mma")}
                </Col>
                <Col
                  xs={0}
                  sm={0}
                  md={0}
                  lg={3}
                  xl={3}
                  key={`${i}_MyRequestAuthor`}
                  className="assignedtoteam-data mobilehide-always"
                >
                  {result["created_by"]}
                </Col>
                <Col
                  xs={7}
                  sm={5}
                  md={5}
                  lg={3}
                  xl={3}
                  key={`${i}_MyRequestName`}
                  className="assignedtoteam-data"
                >
                  {`${result["firstname"]} ${result["lastname"]}`}
                </Col>
                <Col
                  xs={0}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  key={`${i}_MyRequestTopic`}
                  className="assignedtoteam-data mobilehide-portrait"
                >
                  {result["topic"]}
                </Col>
                <Col
                  xs={0}
                  sm={0}
                  md={0}
                  lg={3}
                  xl={3}
                  key={`${i}_MyRequestTeam`}
                  className="assignedtoteam-data mobilehide-always"
                >
                  {result["assign_team"]}
                </Col>
                <Col
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  key={`${i}_assignedtoteamtatus`}
                  className="assignedtoteam-data"
                >
                  {result["status"]}
                </Col>
                <Col
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  key={`${i}_assignedtoteamPriority`}
                  className="assignedtoteam-data"
                >
                  {result["priority"]}
                </Col>
                <Col span={24} className="assignedtoteam-div" />
              </Row>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AssignedToTeam;
