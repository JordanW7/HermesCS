import React from "react";
import { Link } from "react-router-dom";
import "./RequestViewer.css";
import { Form, Row, Col, Input, Select, Icon, Button, DatePicker } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;

const requestAssignToType = (
  <Select defaultValue="Team" style={{ width: 90 }}>
    <Option value="team">Team</Option>
    <Option value="person">Person</Option>
  </Select>
);

// Needs refactoring for both boxes - a <Results Table /> and a <Request Form /> component with subcomponents

const RequestViewer = props => {
  return (
    <div className="requestviewer">
      <div className="requestviewer-contents">
        <div className="requestviewer-title">Request: {props.id}</div>
        <div className="requestviewer-box">
          <Form layout="inline" className="requestviewer-form">
            <Row style={{ textAlign: "right" }}>
              <Col span={12} />
              <Col span={8}>
                <FormItem label="Date/Time:">
                  <DatePicker
                    showTime
                    format="DD-MM-YYYY HH:mm:ss"
                    placeholder=""
                  />
                </FormItem>
              </Col>
              <Col span={4}>
                <FormItem label="Status:">
                  <Select defaultValue="all" style={{ width: 100 }}>
                    <Option value="all">All</Option>
                    <Option value="complete">Complete</Option>
                    <Option value="current">Current</Option>
                    <Option value="unassigned">Unassigned</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={24} style={{ textAlign: "left" }}>
                Person Details:
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
            </Row>
          </Form>
        </div>
        <div className="requestviewer-box">
          Comments/Actions:
          <Row>
            <Col span={3} className="requestviewer-comments-label">
              Time/Date:
            </Col>
            <Col span={3} className="requestviewer-comments-label">
              User:
            </Col>
            <Col span={18} className="requestviewer-comments-label">
              Comments:
            </Col>
            <Col span={24}>
              <Form>
                <FormItem label="Comment:">
                  <Input />
                  <Button>Add Comment</Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default RequestViewer;
