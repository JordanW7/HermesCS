import React from "react";
import "./Dashboard.css";
import NavHeader from "../NavHeader/NavHeader";
import { Row, Col, Select } from "antd";
const Option = Select.Option;

const dashboardGreeting = () => {
  let today = new Date();
  let hours = today.getHours();
  if (hours >= 4 && hours < 12) {
    return "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

const Dashboard = props => {
  return (
    <div className="dashboard-full">
      <NavHeader {...props} />
      <div className="dashboard">
        <div className="dashboard-contents">
          <div className="dashboard-greeting">
            {dashboardGreeting()} Jordan @ Company! :)
          </div>
          <div className="dashboard-box">
            <Row>
              <Col span={20} className="dashboard-box-type">
                ASSIGNED TO ME:
              </Col>
              <Col span={4} className="dashboard-box-selector">
                <Select
                  defaultValue="Current"
                  style={{ width: 120 }}
                  size="small"
                  onChange={console.log("change")}
                >
                  <Option value="current">Current</Option>
                  <Option value="completed">Completed</Option>
                  <Option value="completed">All</Option>
                </Select>
              </Col>
              <Col span={3} className="dashboard-box-title">
                Request#:
              </Col>
              <Col span={3} className="dashboard-box-title">
                Date:
              </Col>
              <Col span={3} className="dashboard-box-title">
                Created by:
              </Col>
              <Col span={3} className="dashboard-box-title">
                Topic
              </Col>
              <Col span={3} className="dashboard-box-title">
                For Team:
              </Col>
              <Col span={3} className="dashboard-box-title">
                Assigned to:
              </Col>
              <Col span={3} className="dashboard-box-title">
                Status:
              </Col>
              <Col span={3} className="dashboard-box-title">
                Last Update:
              </Col>
              <Col span={3} className="dashboard-box-data">
                10000
              </Col>
              <Col span={3} className="dashboard-box-data">
                10:46 Mon 06/07/16
              </Col>
              <Col span={3} className="dashboard-box-data">
                Jordan Wilson
              </Col>
              <Col span={3} className="dashboard-box-data">
                Food
              </Col>
              <Col span={3} className="dashboard-box-data">
                Transport
              </Col>
              <Col span={3} className="dashboard-box-data">
                Bob Builder
              </Col>
              <Col span={3} className="dashboard-box-data">
                Current
              </Col>
              <Col span={3} className="dashboard-box-data">
                11:45 Tue 07/08/16
              </Col>
              <Col span={24} className="dashboard-box-more">
                Load more...
              </Col>
            </Row>
          </div>
          <div className="dashboard-box">
            <span>
              Requests Assigned to my Team (Unassigned/Assigned/Completed/All)
            </span>
          </div>
          <div
            xxl={8}
            xl={8}
            lg={8}
            md={24}
            sm={24}
            xs={24}
            className="dashboard-box"
          >
            <span>
              Requests I've Sent (Today/Outstanding/Assigned/Completed/All)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
