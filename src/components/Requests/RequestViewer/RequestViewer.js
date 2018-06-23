import React, { Component } from "react";
import RequestForm from "../../RequestForm/RequestForm";
import apiBackEnd from "../../../api/api";
import { Row, Col, Input, Button } from "antd";
import RequestCommentList from "./RequestCommentList";
import "./RequestViewer.css";
const { TextArea } = Input;

class RequestViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestdata: {},
      requestFailed: false,
      commentBox: ""
    };
  }
  componentDidMount() {
    this.loadRequestData();
  }
  loadRequestData = async () => {
    const { account } = this.props.user.user;
    const requestdata = await apiBackEnd(
      `requests/${account}/${this.props.id}`,
      "get"
    );
    if (!requestdata.id) {
      return this.setState({ requestFailed: true });
    }
    this.setState({ requestdata });
  };
  onCommentChange = event => {
    this.setState({ commentBox: event.target.value });
  };
  onCommentSubmit = async () => {
    if (!this.state.commentBox) {
      return;
    }
    const { firstname, lastname, account, team } = this.props.user.user;
    const response = await apiBackEnd("addrequestcomments", "post", {
      id: this.props.id,
      comments: this.state.commentBox,
      account: account,
      user: `${firstname} ${lastname}`,
      team: team
    });
    if (response === "error") {
      return console.log("Error Submitting Comment");
    }
    ///need to advise user that this was successful.
    console.log("SUCCESS", response);
    return this.loadRequestData();
  };
  render() {
    if (this.state.requestFailed === true) {
      return <h1>Oops! This request doesn't exist</h1>;
    }
    const { id } = this.state.requestdata;
    if (!id) {
      return null;
    }
    return (
      <div className="requestviewer">
        <div className="requestviewer-contents">
          <div className="requestviewer-title">Request: {this.props.id}</div>
          <RequestForm {...this.props} {...this.state.requestdata} />
          <div className="requestviewer-box">
            Comments/Actions:
            <Row>
              <Col span={3} className="requestviewer-comments-label">
                Time/Date:
              </Col>
              <Col span={5} className="requestviewer-comments-label">
                User:
              </Col>
              <Col span={16} className="requestviewer-comments-label">
                Comments:
              </Col>
            </Row>
            <RequestCommentList {...this.props} {...this.state.requestdata} />
            <br />
            <Row>
              <Col span={2} style={{ textAlign: "center" }}>
                <label>Comments:</label>
              </Col>
              <Col span={20}>
                <TextArea placeholder="" onChange={this.onCommentChange} />
              </Col>
              <Col span={2} style={{ textAlign: "center" }}>
                <Button onClick={this.onCommentSubmit}>Submit</Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestViewer;
