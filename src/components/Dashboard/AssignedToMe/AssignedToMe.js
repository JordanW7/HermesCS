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
      dashboardMyAssignmentSearch: "current"
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
      status: search === "current" ? search : "%",
      assign_person: `${firstname} ${lastname}`,
      date_range:
        search === "today"
          ? [yesterday, today]
          : search === "last7"
            ? [week, today]
            : ""
    });
    if (results === "search failed" || results.errors) {
      this.setState({ dashboardMyAssignmentData: [] });
      return message.error(
        "Oops, something went wrong with the dashboard results"
      );
    }
    this.setState({ dashboardMyAssignmentData: results });
  };
  onMyAssignmentSelectorChange = value => {
    this.setState(
      { dashboardMyAssignmentSearch: value },
      this.loadMyAssignmentData
    );
  };
  render() {
    const totalresults = this.state.dashboardMyAssignmentData.length;
    return (
      <div className="assignedtome">
        <Row>
          <Col
            xs={16}
            sm={16}
            md={16}
            lg={20}
            xl={20}
            className="assignedtome-title"
          >
            ASSIGNED TO ME: ({totalresults}{" "}
            {totalresults === 1 ? "result" : "results"})
          </Col>
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={4}
            xl={4}
            className="assignedtome-selector"
          >
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
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={2}
            xl={2}
            className="assignedtome-label"
          >
            Request#:
          </Col>
          <Col
            xs={7}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            className="assignedtome-label"
          >
            Date:
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={3}
            xl={3}
            className="assignedtome-label mobilehide-always"
          >
            Created by:
          </Col>
          <Col
            xs={7}
            sm={5}
            md={5}
            lg={3}
            xl={3}
            className="assignedtome-label"
          >
            Customer:
          </Col>
          <Col
            xs={0}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            className="assignedtome-label mobilehide-portrait"
          >
            Topic:
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={3}
            xl={3}
            className="assignedtome-label mobilehide-always"
          >
            For Team:
          </Col>
          <Col
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            className="assignedtome-label"
          >
            Status:
          </Col>
          <Col
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            className="assignedtome-label"
          >
            Priority:
          </Col>
          <Col span={24} className="assignedtome-labeldiv" />
        </Row>
        <div className="assignedtome-databox">
          {this.state.dashboardMyAssignmentData.map((result, i) => {
            return (
              <Row key={`${i}_assignedtome`}>
                <Col
                  xs={4}
                  sm={4}
                  md={4}
                  lg={2}
                  xl={2}
                  key={`${i}_assignedtomeID`}
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
                  xs={7}
                  sm={6}
                  md={6}
                  lg={4}
                  xl={4}
                  key={`${i}_assignedtomeDate`}
                  className="assignedtome-data"
                >
                  {moment(result["created_at"]).format("MM/DD/YY h:mma")}
                </Col>
                <Col
                  xs={0}
                  sm={0}
                  md={0}
                  lg={3}
                  xl={3}
                  key={`${i}_assignedtomeAuthor`}
                  className="assignedtome-data mobilehide-always"
                >
                  {result["created_by"]}
                </Col>
                <Col
                  xs={7}
                  sm={5}
                  md={5}
                  lg={3}
                  xl={3}
                  key={`${i}_assignedtomeName`}
                  className="assignedtome-data"
                >
                  {`${result["firstname"]} ${result["lastname"]}`}
                </Col>
                <Col
                  xs={0}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  key={`${i}_assignedtomeTopic`}
                  className="assignedtome-data mobilehide-portrait"
                >
                  {result["topic"]}
                </Col>
                <Col
                  xs={0}
                  sm={0}
                  md={0}
                  lg={3}
                  xl={3}
                  key={`${i}_assignedtomeTeam`}
                  className="assignedtome-data mobilehide-always"
                >
                  {result["assign_team"]}
                </Col>
                <Col
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  key={`${i}_assignedtometatus`}
                  className="assignedtome-data"
                >
                  {result["status"]}
                </Col>
                <Col
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  key={`${i}_assignedtomePriority`}
                  className="assignedtome-data"
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

export default AssignedToMe;
