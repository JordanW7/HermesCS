import React from "react";
import "./SearchRequestResults.css";
import { Row, Col } from "antd";

const SearchRequestResults = props => {
  return (
    <div className="searchrequests-box">
      <Row>
        <Col span={24} className="searchrequests-results-label">
          Results
        </Col>
        <Col span={3} className="searchrequests-results-label">
          Request#:
        </Col>
        <Col span={3} className="searchrequests-results-label">
          Date:
        </Col>
        <Col span={3} className="searchrequests-results-label">
          Created by:
        </Col>
        <Col span={3} className="searchrequests-results-label">
          Topic
        </Col>
        <Col span={3} className="searchrequests-results-label">
          For Team:
        </Col>
        <Col span={3} className="searchrequests-results-label">
          Assigned to:
        </Col>
        <Col span={3} className="searchrequests-results-label">
          Status:
        </Col>
        <Col span={3} className="searchrequests-results-label">
          Last Update:
        </Col>
      </Row>
    </div>
  );
};

export default SearchRequestResults;
