import React from "react";
import "./AssignedToMe.css";
import { Row, Col, Select } from "antd";
const Option = Select.Option;

const AssignedToMe = () => {
  return (
    <div className="assignedtome">
      <Row>
        <Col span={20} className="assignedtome-title">
          ASSIGNED TO ME:
        </Col>
        <Col span={4} className="assignedtome-selector">
          <Select
            defaultValue="Current"
            style={{ width: 120 }}
            size="small"
            onChange={() => console.log("change")}
          >
            <Option value="current">Current</Option>
            <Option value="completed">Completed</Option>
            <Option value="all">All</Option>
          </Select>
        </Col>
        <Col span={3} className="assignedtome-label">
          Request#:
        </Col>
        <Col span={3} className="assignedtome-label">
          Date:
        </Col>
        <Col span={3} className="assignedtome-label">
          Created by:
        </Col>
        <Col span={3} className="assignedtome-label">
          Topic
        </Col>
        <Col span={3} className="assignedtome-label">
          For Team:
        </Col>
        <Col span={3} className="assignedtome-label">
          Assigned to:
        </Col>
        <Col span={3} className="assignedtome-label">
          Status:
        </Col>
        <Col span={3} className="assignedtome-label">
          Last Update:
        </Col>
        <Col span={3} className="assignedtome-data">
          10000
        </Col>
        <Col span={3} className="assignedtome-data">
          10:46 Mon 06/07/16
        </Col>
        <Col span={3} className="assignedtome-data">
          Jordan Wilson
        </Col>
        <Col span={3} className="assignedtome-data">
          Food
        </Col>
        <Col span={3} className="assignedtome-data">
          Transport
        </Col>
        <Col span={3} className="assignedtome-data">
          Bob Builder
        </Col>
        <Col span={3} className="assignedtome-data">
          Current
        </Col>
        <Col span={3} className="assignedtome-data">
          11:45 Tue 07/08/16
        </Col>
        <Col span={24} className="assignedtome-more">
          Load more...
        </Col>
      </Row>
    </div>
  );
};

export default AssignedToMe;
