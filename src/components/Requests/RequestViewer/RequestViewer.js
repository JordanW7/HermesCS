import React, { Component } from "react";
import RequestForm from "../../RequestForm/RequestForm";
import apiBackEnd from "../../../api/api";
import { Row, Col, Input, Button, message } from "antd";
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
      return message.error(
        "Please fill in the comment box to append a comment to the request."
      );
    }
    const { firstname, lastname, account, team } = this.props.user.user;
    const response = await apiBackEnd("addrequestcomments", "post", {
      id: this.props.id,
      comments: this.state.commentBox,
      account: account,
      user: `${firstname} ${lastname}`,
      team: team
    });
    if (response.errors) {
      return message.error(
        "Please fill in the comment box to append a comment to the request."
      );
    }
    if (response === "error") {
      return message.error(
        "Oops! Something unexpected happened, please try again."
      );
    }
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
              <Col
                xs={6}
                sm={6}
                md={6}
                lg={3}
                xl={3}
                className="requestviewer-comments-label"
              >
                Time/Date:
              </Col>
              <Col
                xs={8}
                sm={8}
                md={8}
                lg={5}
                xl={5}
                className="requestviewer-comments-label"
              >
                User:
              </Col>
              <Col
                xs={10}
                sm={10}
                md={10}
                lg={16}
                xl={16}
                className="requestviewer-comments-label"
              >
                Comments:
              </Col>
              <Col span={24} className="requestviewer-labeldiv" />
            </Row>
            <RequestCommentList {...this.props} {...this.state.requestdata} />
            <br />
            <Row>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={2}
                xl={2}
                style={{ textAlign: "center" }}
              >
                <label>Comments:</label>
              </Col>
              <Col xs={24} sm={24} md={24} lg={20} xl={20}>
                <TextArea placeholder="" onChange={this.onCommentChange} />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={2}
                xl={2}
                style={{ textAlign: "center" }}
              >
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
