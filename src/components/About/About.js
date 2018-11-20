import React from "react";
import "./About.css";
import NavHeader from "../NavHeader/NavHeader";
import { Row, Col, Icon } from "antd";

const About = props => {
  return (
    <div className="about-full">
      <NavHeader {...props} />
      <div className="about">
        <main className="about-contents">
          <header className="about-company-title">Hermes CS</header>
          <header className="about-title">
            <Icon type="info-circle-o" /> About
          </header>
          <article className="about-box">
            <Row>
              <Col span={24} className="about-box-headerphrase">
                A Web App built for first-class Customer Service by{" "}
                <a
                  href="https://jordanfwilson.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-box-headerlink"
                >
                  JordanFWilson.com
                </a>
              </Col>
              <Col span={24}>
                HermesCS is a ticketing tool for operating a Contact Centre.
                HermesCS helps manage customer info and record, manage and
                complete customer service requests in a fast and modern way.
              </Col>
              <Col span={24} className="about-box-title">
                Creating New Requests
              </Col>
              <Col span={24}>
                <p>
                  When a customer contacts the company, details of this
                  interaction can be recorded by filling out a "New Request". If
                  this interaction has something that needs to be actioned
                  further by another team or person (i.e. updating information,
                  requesting something to be fixed, requesting a callback from
                  another team with some information), this new request form can
                  be allocated to the relevant person.
                </p>
              </Col>
              <Col span={24} style={{ textAlign: "center" }}>
                <img
                  className="about-screenshot"
                  src="/images/screenshot_newrequest.jpg"
                  alt="Creating New Requests"
                />
              </Col>
              <Col span={24} className="about-box-title">
                Using the Dashboard
              </Col>
              <Col span={24}>
                <p>
                  The dashboard shows all of the outstanding customer requests
                  that have been allocated to you and/or your team. From here,
                  you can view the details of the customer requests, complete
                  any required actions, leave notes on the request and update
                  their status to being completed.
                </p>
              </Col>
              <Col span={24} style={{ textAlign: "center" }}>
                <img
                  className="about-screenshot"
                  src="/images/screenshot_dashboard.jpg"
                  alt="Dashboard"
                />
              </Col>
              <Col span={24} className="about-box-title">
                Searching for Requests
              </Col>
              <Col span={24}>
                <p>
                  Requests that are in the system can be searched via their
                  reference number, or any of the customer's details that might
                  have been added to the request (phone number, account number,
                  etc). By looking up the request, you can check all the
                  information that was added at the time of submitting and any
                  comments and progress since. If searching with a customer
                  detail, the request search will show all matches, showing all
                  of the requests in the system for that customer; this shows a
                  clear customer history.
                </p>
              </Col>
              <Col span={24} style={{ textAlign: "center" }}>
                <img
                  className="about-screenshot"
                  src="/images/screenshot_requestsearch.jpg"
                  alt="Searching for Requests"
                />
              </Col>
              <Col span={24} className="about-box-title">
                Use the Web App anywhere
              </Col>
              <Col span={24}>
                <p>
                  Unlike traditional "desktop" contact centre applications, this
                  app can be used on any device in the office or in the field.
                  Therefore, a person in the contact centre can lodge a request
                  and someone in the field can receive it and action it
                  immediately on their phone or tablet.
                </p>
              </Col>
              <Col
                xs={8}
                sm={8}
                md={8}
                lg={8}
                xl={8}
                style={{ textAlign: "center" }}
              >
                <img
                  className="about-screenshot"
                  src="/images/screenshot_mobile1.jpg"
                  alt="Mobile Web App"
                />
              </Col>
              <Col
                xs={8}
                sm={8}
                md={8}
                lg={8}
                xl={8}
                style={{ textAlign: "center" }}
              >
                <img
                  className="about-screenshot"
                  src="/images/screenshot_mobile3.jpg"
                  alt="Mobile Dashboard"
                />
              </Col>
              <Col
                xs={8}
                sm={8}
                md={8}
                lg={8}
                xl={8}
                style={{ textAlign: "center" }}
              >
                <img
                  className="about-screenshot"
                  src="/images/screenshot_mobile2.jpg"
                  alt="Viewing Requests on Mobile"
                />
              </Col>
              <Col span={24} className="about-box-title">
                And New Features and Improvements are being regularly released!
              </Col>
            </Row>
          </article>
        </main>
      </div>
    </div>
  );
};

export default About;
