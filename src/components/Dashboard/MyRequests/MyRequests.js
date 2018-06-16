import React from "react";
import "./MyRequests.css";
import { Row, Col, Select } from "antd";
const Option = Select.Option;

const MyRequests = () => {
  return (
    <div className="myrequests">
      <Row>
        <Col span={20} className="myrequests-title">
          MY CREATED REQUESTS:
        </Col>
        <Col span={4} className="myrequests-selector">
          <Select
            defaultValue="Today"
            style={{ width: 120 }}
            size="small"
            onChange={() => console.log("change")}
          >
            <Option value="today">Today</Option>
            <Option value="current">Current</Option>
            <Option value="completed">Completed</Option>
            <Option value="all">All</Option>
          </Select>
        </Col>
        <Col span={3} className="myrequests-label">
          Request#:
        </Col>
        <Col span={3} className="myrequests-label">
          Date:
        </Col>
        <Col span={3} className="myrequests-label">
          Created by:
        </Col>
        <Col span={3} className="myrequests-label">
          Topic
        </Col>
        <Col span={3} className="myrequests-label">
          For Team:
        </Col>
        <Col span={3} className="myrequests-label">
          Assigned to:
        </Col>
        <Col span={3} className="myrequests-label">
          Status:
        </Col>
        <Col span={3} className="myrequests-label">
          Last Update:
        </Col>
        <Col span={3} className="myrequests-data">
          10000
        </Col>
        <Col span={3} className="myrequests-data">
          10:46 Mon 06/07/16
        </Col>
        <Col span={3} className="myrequests-data">
          Jordan Wilson
        </Col>
        <Col span={3} className="myrequests-data">
          Food
        </Col>
        <Col span={3} className="myrequests-data">
          Transport
        </Col>
        <Col span={3} className="myrequests-data">
          Bob Builder
        </Col>
        <Col span={3} className="myrequests-data">
          Current
        </Col>
        <Col span={3} className="myrequests-data">
          11:45 Tue 07/08/16
        </Col>
        <Col span={24} className="myrequests-more">
          Load more...
        </Col>
      </Row>
    </div>
  );
};

export default MyRequests;
