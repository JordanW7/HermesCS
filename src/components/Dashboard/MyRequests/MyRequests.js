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
        search === "current" ? search : search === "unassigned" ? search : "",
      created_by: `${firstname} ${lastname}`,
      date_range:
        search === "today"
          ? [yesterday, today]
          : search === "last7"
            ? [week, today]
            : ""
    });
    if (results === "search failed") {
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
    return (
      <div className="myrequests">
        <Row>
          <Col span={20} className="myrequests-title">
            MY CREATED REQUESTS:
          </Col>
          <Col span={4} className="myrequests-selector">
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
          <Col span={2} className="myrequests-label">
            Request#:
          </Col>
          <Col span={4} className="myrequests-label">
            Date:
          </Col>
          <Col span={3} className="myrequests-label">
            Created by:
          </Col>
          <Col span={3} className="myrequests-label">
            Customer Name:
          </Col>
          <Col span={3} className="myrequests-label">
            Topic:
          </Col>
          <Col span={3} className="myrequests-label">
            For Team:
          </Col>
          <Col span={3} className="myrequests-label">
            Status:
          </Col>
          <Col span={3} className="myrequests-label">
            Priority:
          </Col>
        </Row>
        {this.state.dashboardMyRequestsData.map((result, i) => {
          return (
            <Row key={`${i}_MyRequest`}>
              <Col
                span={2}
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
                span={4}
                key={`${i}_MyRequestDate`}
                className="myrequests-data"
              >
                {result["created_at"]}
              </Col>
              <Col
                span={3}
                key={`${i}_MyRequestAuthor`}
                className="myrequests-data"
              >
                {result["created_by"]}
              </Col>
              <Col
                span={3}
                key={`${i}_MyRequestName`}
                className="myrequests-data"
              >
                {`${result["firstname"]} ${result["lastname"]}`}
              </Col>
              <Col
                span={3}
                key={`${i}_MyRequestTopic`}
                className="myrequests-data"
              >
                {result["topic"]}
              </Col>
              <Col
                span={3}
                key={`${i}_MyRequestTeam`}
                className="myrequests-data"
              >
                {result["assign_team"]}
              </Col>
              <Col
                span={3}
                key={`${i}_MyRequestStatus`}
                className="myrequests-data"
              >
                {result["status"]}
              </Col>
              <Col
                span={3}
                key={`${i}_MyRequestPriority`}
                className="myrequests-data"
              >
                {result["priority"]}
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }
}

export default MyRequests;
