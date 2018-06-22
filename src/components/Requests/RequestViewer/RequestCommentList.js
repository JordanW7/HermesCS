import React from "react";
import { Row, Col } from "antd";
import moment from "moment";

const RequestCommentList = props => {
  const { comments } = props;
  return (
    <div>
      {comments.map((comment, i) => {
        return (
          <Row key={i}>
            <Col
              span={3}
              key={`${i}_time`}
              className="requestviewer-comments-data"
            >
              {moment(comment.created_at).format("DD-MM-YYYY hh:mm")}
            </Col>
            <Col
              span={5}
              key={`${i}_user`}
              className="requestviewer-comments-data"
            >
              {`${comment.created_by} (${comment.team})`}
            </Col>
            <Col
              span={16}
              key={`${i}_comment`}
              className="requestviewer-comments-data"
            >
              {comment.comments}
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default RequestCommentList;
