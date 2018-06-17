import React from "react";
import "./NewRequest.css";
import NavHeader from "../NavHeader/NavHeader";
import {
  Form,
  Row,
  Col,
  Input,
  Select,
  Icon,
  Upload,
  message,
  Button
} from "antd";
import CheckAuth from "../CheckAuth/CheckAuth";
const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;
const Dragger = Upload.Dragger;

const requestAssignToType = (
  <Select defaultValue="Team" style={{ width: 90 }}>
    <Option value="team">Team</Option>
    <Option value="person">Person</Option>
  </Select>
);

const uploadProps = {
  name: "file",
  multiple: true,
  action: "//jsonplaceholder.typicode.com/posts/",
  onChange(info) {
    const status = info.file.status;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

const NewRequest = props => {
  let auth = CheckAuth({ ...props });
  if (auth !== true) {
    return auth;
  }
  return (
    <div className="newrequest-full">
      <NavHeader {...props} />
      <div className="newrequest">
        <div className="newrequest-contents">
          <div className="newrequest-title">New Request</div>
          <div className="newrequest-box">
            <Form layout="inline" className="newrequest-form">
              <Row style={{ textAlign: "right" }}>
                <Col span={18} style={{ textAlign: "left" }}>
                  Person Details:
                </Col>
                <Col span={6} style={{ textAlign: "right", paddingRight: 15 }}>
                  <Button type="primary">Save</Button>
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
                      placeholder="placeholder"
                      disabled
                    />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="First Name">
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="placeholder"
                    />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="Last Name">
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="placeholder"
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
                      placeholder="placeholder"
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
                      placeholder="placeholder"
                    />
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="Home">
                    <Input
                      prefix={
                        <Icon
                          type="phone"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="placeholder"
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
                      placeholder="placeholder"
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
                      placeholder="placeholder"
                    />
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem label="Email">
                    <Input
                      prefix={
                        <Icon
                          type="mail"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="placeholder"
                      style={{ width: 485 }}
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
                      placeholder="placeholder"
                      style={{ width: 485 }}
                    />
                  </FormItem>
                </Col>
                <Col span={24} style={{ textAlign: "left" }}>
                  Request Details:
                </Col>
                <Col span={6}>
                  <FormItem label="Type:">
                    <Select defaultValue="misc" style={{ width: 190 }}>
                      <Option value="misc">Misc</Option>
                      <Option value="personal">Personal Message</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="Topic:">
                    <Input placeholder="placeholder" style={{ width: 190 }} />
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label="Assign to:">
                    <Input
                      addonBefore={requestAssignToType}
                      placeholder="placeholder"
                      style={{ width: 290 }}
                    />
                  </FormItem>
                </Col>
                <Col span={4}>
                  <FormItem label="Priority:">
                    <Select defaultValue="low" style={{ width: 100 }}>
                      <Option value="extreme">Extreme</Option>
                      <Option value="high">High</Option>
                      <Option value="medium">Medium</Option>
                      <Option value="low">Low</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col span={24} style={{ textAlign: "left" }}>
                  Notes for Request Type:
                </Col>
                <Col span={24} style={{ textAlign: "left" }}>
                  <TextArea
                    placeholder="Request Details"
                    autosize={{ minRows: 4, maxRows: 8 }}
                  />
                </Col>
                <Col span={4} />
                <Col span={16} style={{ marginTop: 10 }}>
                  <Dragger {...uploadProps}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file(s) this area to upload (Coming Soon)
                    </p>
                  </Dragger>
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
