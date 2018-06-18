import React from "react";
import moment from "moment";
import "./RequestForm.css";
import { Form, Row, Col, Input, Select, Icon, Button, DatePicker } from "antd";
import FileUploader from "./FileUploader/FileUploader";

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

const requestAssignToType = (
  <Select defaultValue="Team" style={{ width: 90 }}>
    <Option value="team">Team</Option>
    <Option value="person">Person</Option>
  </Select>
);

// Need to make this more mobile friendly and add a Created_By field for Search and RequestView types.

const RequestForm = props => {
  const path = props.location.pathname;
  return (
    <div>
      <div className="requestform-box">
        <Form layout="inline">
          <Row style={{ textAlign: "right" }}>
            {path !== "/newrequest" && <Col span={8} />}
            {!["/newrequest", "/requests"].includes(path) && (
              <Col span={12}>
                <FormItem label="Date/Time:">
                  <DatePicker
                    showTime
                    format="DD-MM-YYYY HH:mm:ss"
                    placeholder=""
                  />
                </FormItem>
              </Col>
            )}
            {path === "/requests" && (
              <Col span={10}>
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
            )}
            {path !== "/newrequest" && (
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
            )}
            {path === "/requests" && (
              <Col span={2}>
                <Button type="primary">Search</Button>
              </Col>
            )}
            {path === "/newrequest" ? (
              <Col span={18} style={{ textAlign: "left" }}>
                Person Details:
              </Col>
            ) : (
              <Col span={24} style={{ textAlign: "left" }}>
                Person Details:
              </Col>
            )}
            {path === "/newrequest" && (
              <Col span={6} style={{ textAlign: "right", paddingRight: 15 }}>
                <Button type="primary">Save</Button>
              </Col>
            )}
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
                    <Icon type="idcard" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder=""
                />
              </FormItem>
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
                  disabled
                />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Mobile">
                <Input
                  prefix={
                    <Icon type="mobile" style={{ color: "rgba(0,0,0,.25)" }} />
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
                    <Icon type="twitter" style={{ color: "rgba(0,0,0,.25)" }} />
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
              <FormItem label="Type">
                <Select
                  defaultValue={path === "/requests" ? "all" : "misc"}
                  style={{ width: 190 }}
                >
                  <Option value="misc">Misc</Option>
                  <Option value="personal">Personal Message</Option>
                  {path === "/requests" && <Option value="all">All</Option>}
                </Select>
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Topic">
                <Input placeholder="" style={{ width: 190 }} />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem
                label={path === "/newrequest" ? "Assign to" : "Assigned to"}
              >
                <Input
                  addonBefore={requestAssignToType}
                  placeholder=""
                  style={{ width: 290 }}
                />
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem label="Priority">
                <Select
                  defaultValue={path === "/requests" ? "all" : "low"}
                  style={{ width: 100 }}
                >
                  <Option value="extreme">Extreme</Option>
                  <Option value="high">High</Option>
                  <Option value="medium">Medium</Option>
                  <Option value="low">Low</Option>
                  {path === "/requests" && <Option value="all">All</Option>}
                </Select>
              </FormItem>
            </Col>
            {path === "/newrequest" && (
              <Col span={24} style={{ textAlign: "left" }}>
                Notes for Request Type:
              </Col>
            )}
            {path !== "/requests" && (
              <Col span={24} style={{ textAlign: "left" }}>
                <TextArea
                  placeholder="Request Details"
                  autosize={{ minRows: 4, maxRows: 8 }}
                />
              </Col>
            )}
            {path === "/newrequest" && <Col span={4} />}
            {path === "/newrequest" && (
              <Col span={16} style={{ marginTop: 10 }}>
                <FileUploader />
              </Col>
            )}
            {!["/newrequest", "/requests"].includes(path) && (
              <Col span={24} style={{ textAlign: "left" }}>
                Attachments:
              </Col>
            )}
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default RequestForm;
