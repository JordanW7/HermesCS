import React from "react";
import "./NewRequest.css";
import NavHeader from "../NavHeader/NavHeader";
import { Form, Row, Col, Input } from "antd";
const FormItem = Form.Item;

const NewRequest = props => {
  return (
    <div className="newrequest-full">
      <NavHeader {...props} />
      <div className="newrequest">
        <div className="newrequest-contents">
          <div className="newrequest-title">New Request</div>
          <div className="newrequest-box">
            <Form layout="inline" className="newrequest-form">
              <Row>
                <Col span={6}>
                  <FormItem label="Test">
                    <Input placeholder="placeholder" />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="Test">
                    <Input placeholder="placeholder" />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="Test">
                    <Input placeholder="placeholder" />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="Test">
                    <Input placeholder="placeholder" />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="Test">
                    <Input placeholder="placeholder" />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="Test">
                    <Input placeholder="placeholder" />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="Test">
                    <Input placeholder="placeholder" />
                  </FormItem>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
