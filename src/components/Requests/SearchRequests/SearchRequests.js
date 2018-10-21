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
        </div>
      </div>
    );
  }
}

export default SearchRequests;
