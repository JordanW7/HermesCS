import React, { Component } from "react";
import RequestForm from "../../RequestForm/RequestForm";
import "./SearchRequests.css";
import { Row, Col, Button, Form, Input } from "antd";
import { Redirect } from "react-router-dom";
const FormItem = Form.Item;

class SearchRequests extends Component {
  constructor() {
    super();
    this.state = {
      searchRequestID: "",
      searchRequestSubmit: false
    };
  }
  onSearchRequestIDChange = event => {
    this.setState({ searchRequestID: event.target.value });
  };
  onSearchRequestIDSubmit = event => {
    this.setState({ searchRequestSubmit: true });
  };
  render() {
    if (this.state.searchRequestSubmit) {
      return (
        <Redirect
          to={{
            pathname: `/requests/${this.state.searchRequestID}`,
            state: "redirected"
          }}
        />
      );
    }
    return (
      <div className="searchrequests">
        <div className="searchrequests-contents">
          <div className="searchrequests-title">Let's Search</div>
          <div className="searchrequests-requestidbox">
            <Form layout="inline">
              <Row>
                <Col span={24}>
                  <FormItem label="Know the request reference number? Enter it here:">
                    <Input onChange={this.onSearchRequestIDChange} />
                  </FormItem>
                  <FormItem>
                    <Button
                      type="primary"
                      onClick={this.onSearchRequestIDSubmit}
                    >
                      Go
                    </Button>
                  </FormItem>
                </Col>
              </Row>
            </Form>
          </div>
          <RequestForm {...this.props} />
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
        </div>
      </div>
    );
  }
}

export default SearchRequests;
