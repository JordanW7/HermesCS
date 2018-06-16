import React from "react";
import "./AssignedToTeam.css";
import { Row, Col, Select } from "antd";
const Option = Select.Option;

const AssignedToTeam = () => {
  return (
    <div className="assignedtoteam">
      <Row>
        <Col span={20} className="assignedtoteam-title">
          ASSIGNED TO TEAM:
        </Col>
        <Col span={4} className="assignedtoteam-selector">
          <Select
            defaultValue="Unassigned"
            style={{ width: 120 }}
            size="small"
            onChange={() => console.log("change")}
          >
            <Option value="unassigned">Unassigned</Option>
            <Option value="assigned">Assigned</Option>
            <Option value="completed">Completed</Option>
            <Option value="all">All</Option>
          </Select>
        </Col>
        <Col span={3} className="assignedtoteam-label">
          Request#:
        </Col>
        <Col span={3} className="assignedtoteam-label">
          Date:
        </Col>
        <Col span={3} className="assignedtoteam-label">
          Created by:
        </Col>
        <Col span={3} className="assignedtoteam-label">
          Topic
        </Col>
        <Col span={3} className="assignedtoteam-label">
          For Team:
        </Col>
        <Col span={3} className="assignedtoteam-label">
          Assigned to:
        </Col>
        <Col span={3} className="assignedtoteam-label">
          Status:
        </Col>
        <Col span={3} className="assignedtoteam-label">
          Last Update:
        </Col>
        <Col span={3} className="assignedtoteam-data">
          10000
        </Col>
        <Col span={3} className="assignedtoteam-data">
          10:46 Mon 06/07/16
        </Col>
        <Col span={3} className="assignedtoteam-data">
          Jordan Wilson
        </Col>
        <Col span={3} className="assignedtoteam-data">
          Food
        </Col>
        <Col span={3} className="assignedtoteam-data">
          Transport
        </Col>
        <Col span={3} className="assignedtoteam-data">
          Bob Builder
        </Col>
        <Col span={3} className="assignedtoteam-data">
          Current
        </Col>
        <Col span={3} className="assignedtoteam-data">
          11:45 Tue 07/08/16
        </Col>
        <Col span={24} className="assignedtoteam-more">
          Load more...
        </Col>
      </Row>
    </div>
  );
};

export default AssignedToTeam;
