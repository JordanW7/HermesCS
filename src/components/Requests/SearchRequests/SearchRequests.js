import React from "react";
import RequestForm from "../../RequestForm/RequestForm";
import "./SearchRequests.css";
import { Row, Col } from "antd";

const SearchRequests = props => {
  return (
    <div className="searchrequests">
      <div className="searchrequests-contents">
        <div className="searchrequests-title">Let's Search</div>
        <RequestForm {...props} />
        <div className="searchrequests-box">
          Results
          <Row>
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
      </div>
    </div>
  );
};

export default SearchRequests;
