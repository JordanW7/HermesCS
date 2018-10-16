import React from "react";
import "./About.css";
import NavHeader from "../NavHeader/NavHeader";
import { Icon } from "antd";

const About = props => {
  return (
    <div className="about-full">
      <NavHeader {...props} />
      <div className="about">
        <div className="about-contents">
          <span className="about-company-title">Hermes CS</span>
          <span className="about-title">
            <Icon type="info-circle-o" /> About
          </span>
          <div className="about-box">
            <p>HermesCS</p>
            <p>
              A Web App built for first-class Customer Service by
              JordanFWilson.com
            </p>
            <p>Creating New Requests</p>
            <p>
              When a customer contacts the company, details of this interaction
              can be recorded by filling out a "New Request". If this
              interaction has something that needs to be actioned further by
              another team or person (i.e. updating information, requesting
              something to be fixed, requesting a callback from another team
              with some information), this new request form can be allocated to
              the relevant person.
            </p>
            <p>Using the Dashboard</p>
            <p>
              The dashboard shows all of the outstanding customer requests that
              have been allocated to you and/or your team. From here, you can
              view the details of the customer requests, complete any required
              actions, leave notes on the request and update their status to
              being completed.
            </p>
            <p>Searching for Requests</p>
            <p>
              Requests that are in the system can be searched via their
              reference number, or any of the customer's details that might have
              been added to the request (phone number, account number, etc). By
              looking up the request, you can check all the information that was
              added at the time of submitting and any comments and progress
              since. If searching with a customer detail, the request search
              will show all matches, showing all of the requests in the system
              for that customer; this shows a clear customer history.
            </p>
            <p>Use the Web App anywhere</p>
            <p>
              Unlike traditional "desktop" contact centre applications, this app
              can be used on any device in the office or in the field.
              Therefore, a person in the contact centre can lodge a request and
              someone in the field can receive it and action it immediately on
              their phone or tablet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
