import React, { Component } from "react";
import "./Notifications.css";
import { Link } from "react-router-dom";
import { Badge, Menu, Dropdown, Button } from "antd";
import apiBackEnd from "../../../api/api";

class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      notificationData: []
    };
  }
  loadNotificationData = async () => {
    const { account, firstname, lastname } = this.props.user.user;
    const notificationData = await apiBackEnd(
      `notifications/${account}/${firstname} ${lastname}`,
      "get"
    );
    if (notificationData === "error getting notifications") {
      return;
    }
    this.setState({ notificationData });
  };
  onNotificationCheck = async key => {
    const { account } = this.props.user.user;
    const notification = this.state.notificationData[key];
    const results = await apiBackEnd("notifications", "post", {
      account: account,
      assign_person: notification["assign_person"],
      id: notification["reference"]
    });
    if (results !== "removed") {
      return;
    }
    this.loadNotificationData();
  };
  componentDidMount() {
    this.loadNotificationData();
  }
  render() {
    const notifications = this.state.notificationData;
    let notificationMenu = (
      <Menu>
        {notifications.length < 1 && (
          <Menu.Item className="alert-info">No current notifications</Menu.Item>
        )}
        {notifications &&
          notifications.map((alert, i) => {
            return (
              <Menu.Item key={`${i}_alert`} className="alert-info">
                {alert.alert_time}:
                <Link to={`/requests/${alert.reference}`}>
                  New Assignment | Request:{" "}
                  <span className="alert-highlight">{alert.reference}</span> |
                  Priority:{" "}
                  <span
                    className={
                      alert.priority === "extreme"
                        ? "alert-high"
                        : alert.priority === "high"
                          ? "alert-high"
                          : "alert-low"
                    }
                  >
                    {alert.priority}
                  </span>{" "}
                  | Type: <span className="alert-highlight">{alert.type}</span>{" "}
                  | Topic:{" "}
                  <span className="alert-highlight">{alert.topic}</span>
                </Link>
                <Button
                  size="small"
                  key={i}
                  icon="check"
                  onClick={() => this.onNotificationCheck(i)}
                />
              </Menu.Item>
            );
          })}
      </Menu>
    );
    return (
      <Dropdown overlay={notificationMenu} placement="bottomRight">
        <Badge count={notifications.length} className="notifications-badge">
          <span className="notifications-header">NOTIFICATIONS</span>
        </Badge>
      </Dropdown>
    );
  }
}

export default Notifications;
