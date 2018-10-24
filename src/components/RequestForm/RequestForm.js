import React, { Component } from "react";
import moment from "moment";
import { Redirect } from "react-router-dom";
import "./RequestForm.css";
import apiBackEnd from "../../api/api";
import {
  Form,
  Row,
  Col,
  Input,
  Select,
  Icon,
  Button,
  DatePicker,
  message
} from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

class RequestForm extends Component {
  constructor() {
    super();
    this.state = {
      requestFirstName: "",
      requestLastName: "",
      requestAccount: "",
      requestMobile: "",
      requestHome: "",
      requestTwitter: "",
      requestFacebook: "",
      requestEmail: "",
      requestAddress: "",
      requestType: "",
      requestTopic: "",
      requestDetails: "",
      requestStatus: "",
      requestPriority: "",
      requestAssignment: "",
      requestAssignmentTeam: "",
      requestTeamList: [],
      requestUserSelection: [],
      requestTeamUserLists: {},
      newRequestAdded: "",
      requestSearchDateRange: "",
      requestSearchCreatedBy: "",
      requestSearchResults: false,
      requestSearchResultsData: []
    };
  }
  componentDidMount() {
    this.loadRequestTeamData();
    if (this.props.location.pathname === "/requests") {
      this.setState({ requestAssignment: "%" });
    }
  }
  loadRequestTeamData = async () => {
    const { account } = this.props.user.user;
    const { assign_team } = this.props;
    const request = await apiBackEnd(`teams/${account}`, "get");
    if (!request) {
      return;
    }
    let requestTeamList = [];
    let requestTeamUserLists = {};
    for (let i = 0; i < request.length; i++) {
      let { team, members } = request[i];
      requestTeamList.push([team]);
      requestTeamUserLists[team] = members;
    }
    this.setState({ requestTeamList });
    this.setState({ requestTeamUserLists });
    this.setState({ requestUserSelection: requestTeamUserLists[assign_team] });
  };
  onRequestFirstNameChange = event => {
    this.setState({ requestFirstName: event.target.value });
  };
  onRequestLastNameChange = event => {
    this.setState({ requestLastName: event.target.value });
  };
  onRequestAccountChange = event => {
    this.setState({ requestAccount: event.target.value });
  };
  onRequestMobileChange = event => {
    this.setState({ requestMobile: event.target.value });
  };
  onRequestHomeChange = event => {
    this.setState({ requestHome: event.target.value });
  };
  onRequestTwitterChange = event => {
    this.setState({ requestTwitter: event.target.value });
  };
  onRequestFacebookChange = event => {
    this.setState({ requestFacebook: event.target.value });
  };
  onRequestEmailChange = event => {
    this.setState({ requestEmail: event.target.value });
  };
  onRequestAddressChange = event => {
    this.setState({ requestAddress: event.target.value });
  };
  onRequestTypeChange = value => {
    this.setState({ requestType: value });
  };
  onRequestTopicChange = event => {
    this.setState({ requestTopic: event.target.value });
  };
  onRequestDetailsChange = event => {
    this.setState({ requestDetails: event.target.value });
  };
  onRequestStatusChange = value => {
    this.setState({ requestStatus: value });
  };
  onRequestPriorityChange = value => {
    this.setState({ requestPriority: value });
  };
  onRequestAssignmentPersonChange = value => {
    this.setState({ requestAssignment: value });
  };
  onRequestAssignmentTeamChange = value => {
    this.setState({ requestAssignmentTeam: value });
    this.setState({
      requestUserSelection: this.state.requestTeamUserLists[value]
    });
  };
  onRequestSearchDateChange = value => {
    this.setState({ requestSearchDateRange: value });
  };
  onRequestSearchCreatedByChange = event => {
    this.setState({ requestSearchCreatedBy: event.target.value });
  };
  onRequestSearchSubmit = async () => {
    const {
      requestSearchDateRange,
      requestSearchCreatedBy,
      requestFirstName,
      requestLastName,
      requestAccount,
      requestMobile,
      requestHome,
      requestTwitter,
      requestFacebook,
      requestEmail,
      requestAddress,
      requestType,
      requestTopic,
      requestAssignment,
      requestAssignmentTeam,
      requestPriority,
      requestStatus
    } = this.state;
    const { account } = this.props.user.user;
    const results = await apiBackEnd("searchrequests", "post", {
      account: account,
      firstname: requestFirstName,
      lastname: requestLastName,
      customer_account: requestAccount,
      mobile: requestMobile,
      home: requestHome,
      twitter: requestTwitter,
      facebook: requestFacebook,
      email: requestEmail,
      address: requestAddress,
      type: requestType,
      topic: requestTopic,
      assign_person: requestAssignment,
      assign_team: requestAssignmentTeam,
      priority: requestPriority,
      status: requestStatus,
      created_by: requestSearchCreatedBy,
      date_range: requestSearchDateRange
    });
    if (results === "search failed") {
      return message.error(
        "Oops, something went wrong. Please try to search again"
      );
    }
    if (results.length < 1) {
      this.setState({ requestSearchResults: false });
      return message.error(
        "No results were found for the search. Maybe try again with a broader criteria or use wildcards (%) "
      );
    }
    message.success(`${results.length} Results Found!`);
    this.setState({ requestSearchResults: true });
    this.setState({ requestSearchResultsData: results });
  };
  onRequestSaveSubmit = async () => {
    const {
      requestFirstName,
      requestLastName,
      requestAccount,
      requestMobile,
      requestHome,
      requestTwitter,
      requestFacebook,
      requestEmail,
      requestAddress,
      requestType,
      requestTopic,
      requestAssignment,
      requestAssignmentTeam,
      requestPriority,
      requestDetails
    } = this.state;
    if (!requestDetails || !requestTopic || !requestAssignmentTeam) {
      return message.error(
        "The Request Topic, Details and which Team to assign the request to must be completed."
      );
    }
    const { firstname, lastname, account } = this.props.user.user;
    const requestStatus = requestAssignment ? "current" : "unassigned";
    const response = await apiBackEnd("newrequest", "post", {
      account: account,
      firstname: requestFirstName,
      lastname: requestLastName,
      customer_account: requestAccount,
      mobile: requestMobile,
      home: requestHome,
      twitter: requestTwitter,
      facebook: requestFacebook,
      email: requestEmail,
      address: requestAddress,
      type: requestType ? requestType : "misc",
      topic: requestTopic,
      assign_person: requestAssignment ? requestAssignment : "",
      assign_team: requestAssignmentTeam,
      priority: requestPriority ? requestPriority : "low",
      details: requestDetails,
      status: requestStatus,
      created_by: `${firstname} ${lastname}`
    });
    if (response === "error") {
      return message.error(
        "Oops! Something went wrong and the request was not submitted."
      );
    }
    message.success("Request successfully added.");
    this.setState({ newRequestAdded: response });
  };
  onRequestUpdateSubmit = async () => {
    const { assign_team, assign_person, status, priority } = this.props;
    const {
      requestStatus,
      requestPriority,
      requestAssignment,
      requestAssignmentTeam
    } = this.state;
    if (
      !requestStatus &&
      !requestAssignment &&
      !requestAssignmentTeam &&
      !requestPriority
    ) {
      return;
    }
    if (
      (requestStatus === status || !requestStatus) &&
      (requestPriority === priority || !requestPriority) &&
      (assign_person === requestAssignment || !requestAssignment) &&
      (assign_team === requestAssignmentTeam || !requestAssignmentTeam)
    ) {
      return;
    }
    const { id } = this.props;
    const { user } = this.props.user;
    try {
      const response = await apiBackEnd("updaterequest", "POST", {
        status: requestStatus ? requestStatus : status,
        priority: requestPriority ? requestPriority : priority,
        assign_person: requestAssignment ? requestAssignment : assign_person,
        assign_team: requestAssignmentTeam
          ? requestAssignmentTeam
          : assign_team,
        user,
        id
      });
      if (response === "Request Updated") {
        return message.success("Updated successfully.");
      }
      message.error("Update failed.");
    } catch (err) {
      message.error("Update failed.");
    }
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
    if (this.state.newRequestAdded) {
      const reqID = this.state.newRequestAdded;
      return (
        <Redirect
          to={{
            pathname: `/requests/${reqID}`,
            state: "redirected"
          }}
        />
      );
    }
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
                      onChange={this.onRequestSearchDateChange}
                    />
                  </FormItem>
                </Col>
              )}
              {path === "/requests" && (
                <Col span={2}>
                  <Button type="primary" onClick={this.onRequestSearchSubmit}>
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
                        priority ? priority : path === "/requests" ? "" : "low"
                      }
                      onChange={this.onRequestPriorityChange}
                    >
                      <Option value="extreme">Extreme</Option>
                      <Option value="high">High</Option>
                      <Option value="medium">Medium</Option>
                      <Option value="low">Low</Option>
                      {path === "/requests" && <Option value="">All</Option>}
                    </Select>
                  </FormItem>
                </Col>
              )}
              {path === "/newrequest" && (
                <Col span={2}>
                  <Button type="primary" onClick={this.onRequestSaveSubmit}>
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
                      onChange={this.onRequestSearchCreatedByChange}
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
                        priority ? priority : path === "/requests" ? "" : "low"
                      }
                      onChange={this.onRequestPriorityChange}
                    >
                      <Option value="extreme">Extreme</Option>
                      <Option value="high">High</Option>
                      <Option value="medium">Medium</Option>
                      <Option value="low">Low</Option>
                      {path === "/requests" && <Option value="">All</Option>}
                    </Select>
                  </FormItem>
                </Col>
              )}
              {path !== "/newrequest" && (
                <Col span={6}>
                  <FormItem label="Status:">
                    <Select
                      defaultValue={status ? status : ""}
                      onChange={this.onRequestStatusChange}
                    >
                      {path === "/requests" && <Option value="">All</Option>}
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
                    onChange={this.onRequestFirstNameChange}
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
                    onChange={this.onRequestLastNameChange}
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
                    onChange={this.onRequestAccountChange}
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
                    onChange={this.onRequestMobileChange}
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
                    onChange={this.onRequestHomeChange}
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
                    onChange={this.onRequestTwitterChange}
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
                    onChange={this.onRequestFacebookChange}
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
                    onChange={this.onRequestEmailChange}
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
                    onChange={this.onRequestAddressChange}
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
                    onChange={this.onRequestTypeChange}
                    disabled={
                      !["/newrequest", "/requests"].includes(path)
                        ? true
                        : false
                    }
                  >
                    <Option value="info">Request for Info</Option>
                    <Option value="service">Request for Service</Option>
                    <Option value="noaction">No Further Action</Option>
                    <Option value="misc">Misc</Option>
                    {path === "/requests" && <Option value="all">All</Option>}
                  </Select>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Topic">
                  <Input
                    defaultValue={topic}
                    style={{ width: 190 }}
                    onChange={this.onRequestTopicChange}
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
                  <Select
                    defaultValue={assign_team ? assign_team : ""}
                    onChange={this.onRequestAssignmentTeamChange}
                  >
                    {["/newrequest"].includes(path) && (
                      <Option value="">*Unassigned*</Option>
                    )}
                    {["/requests"].includes(path) && (
                      <Option value="">Any</Option>
                    )}
                    {this.state.requestTeamList &&
                      this.state.requestTeamList.map((team, i) => {
                        return (
                          <Option key={`${i}_team`} value={`${team}`}>
                            {team}
                          </Option>
                        );
                      })}
                  </Select>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="For Person">
                  <Select
                    defaultValue={
                      assign_person
                        ? assign_person
                        : ["/requests"].includes(path)
                          ? "%"
                          : ""
                    }
                    onChange={this.onRequestAssignmentPersonChange}
                  >
                    {["/requests"].includes(path) && (
                      <Option value="%">All</Option>
                    )}
                    <Option value="">*Unassigned*</Option>
                    {this.state.requestUserSelection &&
                      this.state.requestUserSelection.map((person, i) => {
                        return (
                          <Option key={`${i}_person`} value={`${person[0]}`}>
                            {person[0]}
                          </Option>
                        );
                      })}
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
                    defaultValue={details}
                    onChange={this.onRequestDetailsChange}
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
            </Row>
          </Form>
        </div>
        {path === "/requests" && (
          <div className="searchrequests-box">
            {this.state.requestSearchResults && (
              <div>
                <Row>
                  <Col span={24} className="searchrequests-results-label">
                    Results
                  </Col>
                  <Col span={2} className="searchrequests-results-label">
                    Request#:
                  </Col>
                  <Col span={4} className="searchrequests-results-label">
                    Date:
                  </Col>
                  <Col span={3} className="searchrequests-results-label">
                    Created by:
                  </Col>
                  <Col span={3} className="searchrequests-results-label">
                    Customer Name:
                  </Col>
                  <Col span={3} className="searchrequests-results-label">
                    Topic:
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
                </Row>
                {this.state.requestSearchResultsData.map((result, i) => {
                  return (
                    <Row>
                      <Col
                        span={2}
                        key={`${i}_resultsID`}
                        className="searchrequests-results-entry"
                      >
                        <a
                          href={`/requests/${result["id"]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="searchrequests-results-link"
                        >
                          {result["id"]}
                        </a>
                      </Col>
                      <Col
                        span={4}
                        key={`${i}_resultsDate`}
                        className="searchrequests-results-entry"
                      >
                        {result["created_at"]}
                      </Col>
                      <Col
                        span={3}
                        key={`${i}_resultsAuthor`}
                        className="searchrequests-results-entry"
                      >
                        {result["created_by"]}
                      </Col>
                      <Col
                        span={3}
                        key={`${i}_resultsName`}
                        className="searchrequests-results-entry"
                      >
                        {`${result["firstname"]} ${result["lastname"]}`}
                      </Col>
                      <Col
                        span={3}
                        key={`${i}_resultsTopic`}
                        className="searchrequests-results-entry"
                      >
                        {result["topic"]}
                      </Col>
                      <Col
                        span={3}
                        key={`${i}_resultsAssignTeam`}
                        className="searchrequests-results-entry"
                      >
                        {result["assign_team"]}
                      </Col>
                      <Col
                        span={3}
                        key={`${i}_resultsAssignPerson`}
                        className="searchrequests-results-entry"
                      >
                        {result["assign_person"]}
                      </Col>
                      <Col
                        span={3}
                        key={`${i}_resultsStatus`}
                        className="searchrequests-results-entry"
                      >
                        {result["status"]}
                      </Col>
                    </Row>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default RequestForm;
