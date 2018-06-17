import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./SearchRequests.css";
import { Form, Row, Col, Input, Select, Icon, Button, DatePicker } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

const requestAssignToType = (
  <Select defaultValue="Team" style={{ width: 90 }}>
    <Option value="team">Team</Option>
    <Option value="person">Person</Option>
  </Select>
);

// Needs refactoring for both boxes - a <Results Table /> and a <Request Form /> component with subcomponents

const SearchRequests = props => {
  return (
    <div className="searchrequests">
      <div className="searchrequests-contents">
        <div className="searchrequests-title">Let's Search</div>
        <div className="searchrequests-box">
          <Form layout="inline" className="searchrequests-form">
            <Row style={{ textAlign: "right" }}>
              <Col span={18} style={{ textAlign: "left" }}>
                Person Details:
              </Col>
              <Col span={6} style={{ textAlign: "right", paddingRight: 15 }}>
                <Button type="primary">Search</Button>
              </Col>
              <Col span={6}>
                <FormItem label="Request ID">
                  <Input
                    prefix={
                      <Icon
                        type="solution"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder=""
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="First Name">
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder=""
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Last Name">
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder=""
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Account#">
                  <Input
                    prefix={
                      <Icon
                        type="idcard"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder=""
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Mobile">
                  <Input
                    prefix={
                      <Icon
                        type="mobile"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder=""
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Home">
                  <Input
                    prefix={
                      <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder=""
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Twitter">
                  <Input
                    prefix={
                      <Icon
                        type="twitter"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder=""
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Facebook">
                  <Input
                    prefix={
                      <Icon
                        type="facebook"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder=""
                  />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="Email">
                  <Input
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder=""
                    style={{ width: 485 }}
                  />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="Address">
                  <Input
                    prefix={
                      <Icon
                        type="environment"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder=""
                    style={{ width: 485 }}
                  />
                </FormItem>
              </Col>
              <Col span={24} style={{ textAlign: "left" }}>
                Request Details:
              </Col>
              <Col span={6}>
                <FormItem label="Type:">
                  <Select defaultValue="" style={{ width: 190 }}>
                    <Option value="misc">Misc</Option>
                    <Option value="personal">Personal Message</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Topic:">
                  <Input placeholder="" style={{ width: 190 }} />
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="Assigned to:">
                  <Input
                    addonBefore={requestAssignToType}
                    placeholder=""
                    style={{ width: 290 }}
                  />
                </FormItem>
              </Col>
              <Col span={4}>
                <FormItem label="Priority:">
                  <Select defaultValue="all" style={{ width: 100 }}>
                    <Option value="all">All</Option>
                    <Option value="extreme">Extreme</Option>
                    <Option value="high">High</Option>
                    <Option value="medium">Medium</Option>
                    <Option value="low">Low</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={24} style={{ textAlign: "left" }}>
                Search Parameters:
              </Col>
              <Col span={11} style={{ textAlign: "left", paddingLeft: 50 }}>
                <FormItem label="Date/Time Range:">
                  <RangePicker
                    ranges={{
                      Today: [moment().startOf("day"), moment().endOf("day")],
                      Yesterday: [
                        moment()
                          .subtract(1, "days")
                          .startOf("day"),
                        moment()
                          .subtract(1, "days")
                          .endOf("day")
                      ],
                      "Last 7 Days": [
                        moment()
                          .subtract(7, "days")
                          .startOf("day"),
                        moment()
                      ],
                      "Last 30 Days": [
                        moment()
                          .subtract(30, "days")
                          .startOf("day"),
                        moment()
                      ]
                    }}
                    showTime={{ format: "HH:mm" }}
                    format="DD-MM-YYYY HH:mm"
                    placeholder={["Start", "End"]}
                  />
                </FormItem>
              </Col>
              <Col span={13} style={{ textAlign: "left" }}>
                <FormItem label="Status:">
                  <Select defaultValue="all" style={{ width: 100 }}>
                    <Option value="all">All</Option>
                    <Option value="complete">Complete</Option>
                    <Option value="current">Current</Option>
                    <Option value="unassigned">Unassigned</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </div>
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
