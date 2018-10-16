import React from "react";
import "./Contact.css";
import NavHeader from "../NavHeader/NavHeader";
import { Icon } from "antd";

const Contact = props => {
  return (
    <div className="contact-full">
      <NavHeader {...props} />
      <div className="contact">
        <div className="contact-contents">
          <span className="contact-company-title">Hermes CS</span>
          <span className="contact-title">
            <Icon type="info-circle-o" /> Contact
          </span>
          <div className="contact-box">
            <p>Under Construction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
