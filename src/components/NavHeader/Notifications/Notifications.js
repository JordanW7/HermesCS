import React from "react";
import "./Notifications.css";
import { Link } from "react-router-dom";
import { Badge, Menu, Dropdown } from "antd";

const Notifications = props => {
  let notificationMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/">Notification 1</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={notificationMenu} placement="bottomRight">
      <Badge count={1} className="notifications-badge">
        <span className="notifications-header">NOTIFICATIONS</span>
      </Badge>
    </Dropdown>
  );
};

export default Notifications;
