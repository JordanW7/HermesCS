import React, { Component } from "react";
import moment from "moment";
import "./RequestForm.css";
import apiBackEnd from "../../api/api";
import { Form, Row, Col, Input, Select, Icon, Button, DatePicker } from "antd";
import FileUploader from "./FileUploader/FileUploader";

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

// Need to make this more mobile friendly.

class RequestForm extends Component {
  constructor() {
    super();
    this.state = {
      requestStatus: "",
      requestAssignment: "",
      requestAssignmentTeam: ""
    };
  }
  onRequestStatusChange = value => {
    this.setState({ requestStatus: value });
  };
  onRequestAssignmentPersonChange = event => {
    this.setState({ requestAssignment: event.target.value });
  };
  onRequestAssignmentTeamChange = value => {
    this.setState({ requestAssignmentTeam: value });
  };
  onRequestUpdateSubmit = () => {
    const { assign_team, assign_person, status } = this.props;
    const {
      requestStatus,
      requestAssignment,
      requestAssignmentType
    } = this.state;
    if (!requestStatus && !requestAssignment) {
      return console.log("NO CHANGES OR EMPTY");
    }
    if (!assign_person) {
      if (
        requestAssignmentType !== "team" ||
        requestAssignment !== assign_team ||
        requestStatus !== status
      ) {
        this.updateRequestInfo();
      }
    } else {
      if (
        requestAssignmentType !== "person" ||
        requestAssignment !== assign_person ||
        requestStatus !== status
      ) {
        this.updateRequestInfo();
      }
    }
  };
  updateRequestInfo = async () => {
    const { user } = this.props.user;
    console.log(this.props);
    const {
      requestStatus,
      requestAssignment,
      requestAssignmentTeam
    } = this.state;
    const response = await apiBackEnd("updaterequest", "POST", {
      requestStatus,
      requestAssignment,
      requestAssignmentTeam,
      user
    });
    console.log(response);
  };
  render() {
    const path = this.props.location.pathname;
    const {
      id,
      firstname,
      lastname,
      account,
      mobile,
      home,
      twitter,
      facebook,
      email,
      address,
      type,
      topic,
      assign_person,
      assign_team,
      priority,
      details,
      status,
      created_by,
      created_at
    } = this.props;
    return (
      <div>
        <div className="requestform-box">
          <Form layout="inline">
            <Row style={{ textAlign: "right" }}>
              {path === "/requests" && (
                <Col span={22} style={{ textAlign: "center" }}>
                  <FormItem label=" Search Date/Time Range:">
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
                    />
                  </FormItem>
                </Col>
              )}
              {path === "/requests" && (
                <Col span={2}>
                  <Button type="primary" onClick={this.onRequestUpdateSubmit}>
                    Search
                  </Button>
                </Col>
              )}
              {!["/newrequest", "/requests"].includes(path) && (
                <Col span={24}>
                  <Button type="primary" onClick={this.onRequestUpdateSubmit}>
                    Update
                  </Button>
                </Col>
              )}
              {path === "/newrequest" && (
                <Col span={22}>
                  <FormItem label="Priority">
                    <Select
                      defaultValue={
                        priority
                          ? priority
                          : path === "/requests"
                            ? "all"
                            : "low"
                      }
                      disabled={
                        !["/newrequest", "/requests"].includes(path)
                          ? true
                          : false
                      }
                    >
                      <Option value="extreme">Extreme</Option>
                      <Option value="high">High</Option>
                      <Option value="medium">Medium</Option>
                      <Option value="low">Low</Option>
                      {path === "/requests" && <Option value="all">All</Option>}
                    </Select>
                  </FormItem>
                </Col>
              )}
              {path === "/newrequest" && (
                <Col span={2}>
                  <Button type="primary" onClick={this.onRequestUpdateSubmit}>
                    Save
                  </Button>
                </Col>
              )}
            </Row>
            <Row style={{ textAlign: "right" }}>
              {path !== "/newrequest" && (
                <Col span={6}>
                  <FormItem label="Created by:">
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      defaultValue={created_by}
                      disabled={
                        !["/newrequest", "/requests"].includes(path)
                          ? true
                          : false
                      }
                    />
                  </FormItem>
                </Col>
              )}

              {!["/newrequest", "/requests"].includes(path) && (
                <Col span={6}>
                  <FormItem label="Date/Time:">
                    <DatePicker
                      showTime
                      format="DD-MM-YYYY HH:mm"
                      defaultValue={moment(created_at)}
                      disabled={true}
                    />
                  </FormItem>
                </Col>
              )}
              {path === "/requests" && <Col span={6} />}
              {path !== "/newrequest" && (
                <Col span={6}>
                  <FormItem label="Priority">
                    <Select
                      defaultValue={
                        priority
                          ? priority
                          : path === "/requests"
                            ? "all"
                            : "low"
                      }
                      disabled={
                        !["/newrequest", "/requests"].includes(path)
                          ? true
                          : false
                      }
                    >
                      <Option value="extreme">Extreme</Option>
                      <Option value="high">High</Option>
                      <Option value="medium">Medium</Option>
                      <Option value="low">Low</Option>
                      {path === "/requests" && <Option value="all">All</Option>}
                    </Select>
                  </FormItem>
                </Col>
              )}
              {path !== "/newrequest" && (
                <Col span={6}>
                  <FormItem label="Status:">
                    <Select
                      defaultValue={status ? status : "all"}
                      onChange={this.onRequestStatusChange}
                    >
                      {path === "/requests" && <Option value="all">All</Option>}
                      <Option value="complete">Complete</Option>
                      <Option value="current">Current</Option>
                      <Option value="unassigned">Unassigned</Option>
                    </Select>
                  </FormItem>
                </Col>
              )}
              <Col span={24} style={{ textAlign: "left" }}>
                Person Details:
              </Col>
              <Col span={6}>
                <FormItem label="First Name">
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    defaultValue={firstname}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Last Name">
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    defaultValue={lastname}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
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
                    defaultValue={account}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
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
                    defaultValue={id}
                    disabled
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
                    defaultValue={mobile}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Home">
                  <Input
                    prefix={
                      <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    defaultValue={home}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
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
                    defaultValue={twitter}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
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
                    defaultValue={facebook}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
                  />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="Email">
                  <Input
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    defaultValue={email}
                    style={{ width: 485 }}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
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
                    defaultValue={address}
                    style={{ width: 485 }}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
                  />
                </FormItem>
              </Col>
              <Col span={24} style={{ textAlign: "left" }}>
                Request Details:
              </Col>
              <Col span={6}>
                <FormItem label="Type">
                  <Select
                    defaultValue={
                      type ? type : path === "/requests" ? "all" : "misc"
                    }
                    style={{ width: 190 }}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
                  >
                    <Option value="misc">Misc</Option>
                    <Option value="personal">Personal Message</Option>
                    {path === "/requests" && <Option value="all">All</Option>}
                  </Select>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Topic">
                  <Input
                    defaultValue={topic}
                    style={{ width: 190 }}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="For Team">
                  <Input
                    defaultValue={assign_team}
                    onChange={this.onRequestAssignmentTeamChange}
                  />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="For Person">
                  <Input
                    defaultValue={assign_person}
                    onChange={this.onRequestAssignmentChange}
                  />
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
                    defaultValue={details}
                    placeholder="Request Details"
                    autosize={{ minRows: 4, maxRows: 8 }}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
                  />
                </Col>
              )}
              {path === "/newrequest" && <Col span={4} />}
              {path === "/newrequest" && (
                <Col span={16} style={{ marginTop: 10 }}>
                  <FileUploader />
                </Col>
              )}
              {
                // !["/newrequest", "/requests"].includes(path) && (
                // <Col span={24} style={{ textAlign: "left" }}>
                //   Attachments:
                // </Col>)
                // !["/newrequest", "/requests"].includes(path) && (
                //   <Col span={24} style={{ textAlign: "left" }}>
                //     {attachments}
                //   </Col>
                // )
              }
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default RequestForm;
