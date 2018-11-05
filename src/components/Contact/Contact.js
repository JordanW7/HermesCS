import React, { Component } from "react";
import "./Contact.css";
import NavHeader from "../NavHeader/NavHeader";
import { Form, Row, Col, Input, Icon, Button, message } from "antd";

import apiBackEnd from "../../api/api";

const { TextArea } = Input;
const FormItem = Form.Item;

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      contactEmail: "",
      contactName: "",
      contactAccount: "",
      contactDetails: ""
    };
  }
  onContactSubmit = async () => {
    const {
      contactEmail,
      contactName,
      contactAccount,
      contactDetails
    } = this.state;
    const { loginStatus, user } = this.props;
    const { email, firstname, lastname, account } = user.user;
    if (
      (!loginStatus.loginStatus &&
        (!contactEmail || !contactName || !contactDetails)) ||
      (loginStatus && !contactDetails)
    ) {
      return message.error(
        "Please fill in your name, email address and the details section"
      );
    }
    const request = await apiBackEnd("contact", "post", {
      account: account ? account : contactAccount,
      email: email ? email : contactEmail,
      name: firstname ? `${firstname} ${lastname}` : contactName,
      details: contactDetails
    });
    if (request === "sent") {
      return message.success(
        "Sent! We will be in contact with you as soon as possible."
      );
    }
    return message.error(
      "Oops! Something unexpected happened. Please check you've provided a valid email address"
    );
  };
  onContactNameChange = event => {
    this.setState({ contactName: event.target.value });
  };
  onContactAccountChange = event => {
    this.setState({ contactAccount: event.target.value });
  };
  onContactEmailChange = event => {
    this.setState({ contactEmail: event.target.value });
  };
  onContactDetailsChange = event => {
    this.setState({ contactDetails: event.target.value });
  };
  render() {
    const { loginStatus, user } = this.props;
    const { email, account, firstname, lastname } = user.user;
    return (
      <div className="contact-full">
        <NavHeader {...this.props} />
        <div className="contact">
          <span className="contact-page-title">
            {loginStatus.loginStatus ? "Support" : "Contact Us"}
          </span>
          <div className="contact-box">
            <Form layout="inline">
              <Row style={{ textAlign: "right" }}>
                <Col span={12} style={{ textAlign: "left" }}>
                  <FormItem label="Name:">
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      onChange={this.onContactNameChange}
                      defaultValue={`${firstname} ${lastname}`}
                      disabled={loginStatus.loginStatus ? true : false}
                      required
                      type="text"
                      name="fullname"
                    />
                  </FormItem>
                </Col>
                <Col span={12} style={{ textAlign: "left" }}>
                  <FormItem label="Account:">
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      onChange={this.onContactAccountChange}
                      defaultValue={account}
                      disabled={loginStatus.loginStatus ? true : false}
                      required
                      type="text"
                      name="company"
                    />
                  </FormItem>
                </Col>
                <Col span={24} style={{ textAlign: "left" }}>
                  <FormItem label="Email:">
                    <Input
                      prefix={
                        <Icon
                          type="mail"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      onChange={this.onContactEmailChange}
                      defaultValue={email}
                      style={{ width: 300 }}
                      disabled={loginStatus.loginStatus ? true : false}
                      required
                      type="email"
                      name="email"
                    />
                  </FormItem>
                </Col>
                <Col span={24} style={{ textAlign: "left" }}>
                  Details:
                </Col>
                <Col span={24} style={{ textAlign: "left" }}>
                  <TextArea
                    autosize={{ minRows: 4, maxRows: 8 }}
                    onChange={this.onContactDetailsChange}
                  />
                </Col>
                <Col span={24} style={{ textAlign: "right" }}>
                  <Button
                    type="primary"
                    className="contact-button"
                    onClick={this.onContactSubmit}
                  >
                    Send
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
