import React, { Component } from "react";
import RequestForm from "../../RequestForm/RequestForm";
import apiBackEnd from "../../../api/api";
import RequestCommentList from "./RequestCommentList";
import "./RequestViewer.css";

class RequestViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestdata: {}
    };
  }
  async componentDidMount() {
    const { account } = this.props.user.user;
    const requestdata = await apiBackEnd(
      `requests/${account}/${this.props.id}`,
      "get"
    );
    this.setState({ requestdata });
  }
  render() {
    const { id } = this.state.requestdata;
    if (!id) {
      return <h1>Oops! This request doesn't exist</h1>;
    }
    return (
      <div className="requestviewer">
        <div className="requestviewer-contents">
          <div className="requestviewer-title">Request: {this.props.id}</div>
          <RequestForm {...this.props} {...this.state.requestdata} />
          <div className="requestviewer-box">
            Comments/Actions:
            <RequestCommentList {...this.props} {...this.state.requestdata} />
          </div>
        </div>
      </div>
    );
  }
}

export default RequestViewer;
