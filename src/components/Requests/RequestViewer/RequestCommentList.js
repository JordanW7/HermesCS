import React, { Component } from "react";
import { Row, Col, Input, Button } from "antd";
import apiBackEnd from "../../../api/api";
const { TextArea } = Input;

class RequestCommentList extends Component {
  constructor() {
    super();
    this.state = {
      commentBox: ""
    };
  }
  onCommentChange = event => {
    this.setState({ commentBox: event.target.value });
    console.log(event.target.value);
  };
  onCommentSubmit = async () => {
    if (!this.state.commentBox) {
      return;
    }
    const { firstname, lastname, account } = this.props.user.user;
    const response = await apiBackEnd("addrequestcomments", "post", {
      comment: this.state.commentBox,
      account: account,
      user: `${firstname} ${lastname}`
    });
    console.log("RESPONSE", response);
    console.log("SUBMIT");
  };
  render() {
    const { comments } = this.props;
    return (
      <div>
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
        {comments.map((comment, i) => {
          return (
            <Row key={i}>
              <Col
                span={3}
                key={`${i}_time`}
                className="requestviewer-comments-data"
              >
                {comment[0]}
              </Col>
              <Col
                span={5}
                key={`${i}_user`}
                className="requestviewer-comments-data"
              >
                {`${comment[1]} (${comment[2]})`}
              </Col>
              <Col
                span={16}
                key={`${i}_comment`}
                className="requestviewer-comments-data"
              >
                {comment[3]}
              </Col>
            </Row>
          );
        })}
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
    );
  }
}

export default RequestCommentList;
