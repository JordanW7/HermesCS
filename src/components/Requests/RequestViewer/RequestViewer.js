import React from "react";
import RequestForm from "../../RequestForm/RequestForm";
import "./RequestViewer.css";
import { Form, Row, Col, Input, Button } from "antd";
const FormItem = Form.Item;

const RequestViewer = props => {
  return (
    <div className="requestviewer">
      <div className="requestviewer-contents">
        <div className="requestviewer-title">Request: {props.id}</div>
        <RequestForm {...props} />
        <div className="requestviewer-box">
          Comments/Actions:
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
            <Col span={24}>
              <Form>
                <FormItem label="Comment:">
                  <Input />
                  <Button>Add Comment</Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default RequestViewer;
