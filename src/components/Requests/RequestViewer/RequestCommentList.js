import React from "react";
import { Row, Col, Input, Button } from "antd";
const { TextArea } = Input;

const RequestCommentList = props => {
  const { comments, id } = props;
  return (
    <div>
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
              span={3}
              key={`${i}_user`}
              className="requestviewer-comments-data"
            >
              {comment[1]}
            </Col>
            <Col
              span={18}
              key={`${i}_comment`}
              className="requestviewer-comments-data"
            >
              {comment[2]}
            </Col>
          </Row>
        );
      })}
      <Row>
        <Col span={2} style={{ textAlign: "center" }}>
          <label>Comments:</label>
        </Col>
        <Col span={20}>
          <TextArea placeholder="" />
        </Col>
        <Col span={2} style={{ textAlign: "center" }}>
          <Button>Submit</Button>
        </Col>
      </Row>
    </div>
  );
};

export default RequestCommentList;
