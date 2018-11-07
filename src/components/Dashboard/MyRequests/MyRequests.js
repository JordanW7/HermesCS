import React, { Component } from "react";
import moment from "moment";
import "./MyRequests.css";
import { Row, Col, Select, message } from "antd";
import apiBackEnd from "../../../api/api";
const Option = Select.Option;

class MyRequests extends Component {
  constructor() {
    super();
    this.state = {
      dashboardMyRequestsData: [],
      dashboardMyRequestsSearch: "today"
    };
  }
  componentDidMount() {
    this.loadMyRequestData();
  }
  loadMyRequestData = async () => {
    const search = this.state.dashboardMyRequestsSearch;
    const { account, firstname, lastname } = this.props.user.user;
    const today = new Date();
    const yesterday = moment().subtract(1, "day");
    const week = moment().subtract(7, "day");
    const results = await apiBackEnd("searchrequests", "post", {
      account: account,
      status:
        search === "current" ? search : search === "unassigned" ? search : "%",
      created_by: `${firstname} ${lastname}`,
      assign_person: "%",
      date_range:
        search === "today"
          ? [yesterday, today]
          : search === "last7"
            ? [week, today]
            : []
    });
    if (results === "search failed" || results.errors) {
      this.setState({ dashboardMyRequestsData: [] });
      return message.error(
        "Oops, something went wrong with the dashboard results"
      );
    }
    this.setState({ dashboardMyRequestsData: results });
  };
  onMyRequestsSelectorChange = value => {
    this.setState({ dashboardMyRequestsSearch: value }, this.loadMyRequestData);
  };
  render() {
    const totalresults = this.state.dashboardMyRequestsData.length;
    return (
      <div className="myrequests">
        <Row>
          <Col
            xs={16}
            sm={16}
            md={16}
            lg={20}
            xl={20}
            className="myrequests-title"
          >
            CREATED REQUESTS: ({totalresults}{" "}
            {totalresults === 1 ? "result" : "results"})
          </Col>
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={4}
            xl={4}
            className="myrequests-selector"
          >
            <Select
              defaultValue="today"
              style={{ width: 120 }}
              size="small"
              onChange={this.onMyRequestsSelectorChange}
            >
              <Option value="today">Today</Option>
              <Option value="last7">Last 7 Days</Option>
              <Option value="unassigned">Unassigned</Option>
              <Option value="current">Current</Option>
            </Select>
          </Col>
          <Col xs={4} sm={4} md={4} lg={2} xl={2} className="myrequests-label">
            Request#:
          </Col>
          <Col xs={7} sm={6} md={6} lg={4} xl={4} className="myrequests-label">
            Date:
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={3}
            xl={3}
            className="myrequests-label mobilehide-always"
          >
            Created by:
          </Col>
          <Col xs={7} sm={5} md={5} lg={3} xl={3} className="myrequests-label">
            Customer:
          </Col>
          <Col
            xs={0}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            className="myrequests-label mobilehide-portrait"
          >
            Topic:
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={3}
            xl={3}
            className="myrequests-label mobilehide-always"
          >
            For Team:
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} className="myrequests-label">
            Status:
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} className="myrequests-label">
            Priority:
          </Col>
          <Col span={24} className="myrequests-labeldiv" />
        </Row>
        <div className="myrequests-databox">
          {this.state.dashboardMyRequestsData.map((result, i) => {
            return (
              <Row key={`${i}_MyRequest`}>
                <Col
                  xs={4}
                  sm={4}
                  md={4}
                  lg={2}
                  xl={2}
                  key={`${i}_MyRequestID`}
                  className="myrequests-data"
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
                  className="myrequests-data"
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
                  className="myrequests-data mobilehide-always"
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
                  className="myrequests-data"
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
                  className="myrequests-data mobilehide-portrait"
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
                  className="myrequests-data mobilehide-always"
                >
                  {result["assign_team"]}
                </Col>
                <Col
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  key={`${i}_MyRequestStatus`}
                  className="myrequests-data"
                >
                  {result["status"]}
                </Col>
                <Col
                  xs={3}
                  sm={3}
                  md={3}
                  lg={3}
                  xl={3}
                  key={`${i}_MyRequestPriority`}
                  className="myrequests-data"
                >
                  {result["priority"]}
                </Col>
                <Col span={24} className="myrequests-div" />
              </Row>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyRequests;
