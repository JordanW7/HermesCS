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
              xs={6}
              sm={6}
              md={6}
              lg={3}
              xl={3}
              key={`${i}_time`}
              className="requestviewer-comments-data"
            >
              {moment(comment.created_at).format("DD-MM-YYYY hh:mm")}
            </Col>
            <Col
              xs={8}
              sm={8}
              md={8}
              lg={5}
              xl={5}
              key={`${i}_user`}
              className="requestviewer-comments-data"
            >
              {`${comment.created_by} (${comment.team})`}
            </Col>
            <Col
              xs={10}
              sm={10}
              md={10}
              lg={16}
              xl={16}
              key={`${i}_comment`}
              className="requestviewer-comments-data"
            >
              {comment.comments}
            </Col>
            <Col span={24} className="requestviewer-div" />
          </Row>
        );
      })}
    </div>
  );
};

export default RequestCommentList;
