import React, { Component } from "react";
import moment from "moment";
import "./Notifications.css";
import { Link } from "react-router-dom";
import { Badge, Menu, Dropdown, Button } from "antd";
import apiBackEnd from "../../../api/api";

class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      notificationData: [],
      notificationTeamData: ""
    };
  }
  loadNotificationData = async () => {
    const { account, firstname, lastname, team } = this.props.user.user;
    const notificationData = await apiBackEnd(
      `notifications/${account}/${firstname} ${lastname}`,
      "get"
    );
    if (notificationData === "error getting notifications") {
      return;
    }
    this.setState({ notificationData });
    const notificationTeamData = await apiBackEnd(
      `notifications-team/${account}/${team}`,
      "get"
    );
    if (notificationTeamData === "error getting notifications") {
      return;
    }
    this.setState({ notificationTeamData });
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
    const { notificationData, notificationTeamData } = this.state;
    let notificationMenu = (
      <Menu>
        {notificationTeamData && (
          <Menu.Item className="notifications-data">
            Unassigned Team Requests:{" "}
            <span className="alert-highlight">
              {notificationTeamData.total}
            </span>{" "}
            | Extreme:{" "}
            <span className="alert-high">{notificationTeamData.extreme}</span> |
            High:{" "}
            <span className="alert-high">{notificationTeamData.high}</span> |
            Medium:{" "}
            <span className="alert-low">{notificationTeamData.medium}</span> |
            Low: <span className="alert-low">{notificationTeamData.low}</span>
          </Menu.Item>
        )}
        <Menu.Divider />
        {notificationData.length < 1 && (
          <Menu.Item className="alert-info">No current notifications</Menu.Item>
        )}
        {notificationData &&
          notificationData.map((alert, i) => {
            return (
              <Menu.Item key={`${i}_alert`}>
                <div>
                  <Button
                    size="small"
                    key={i}
                    icon="check"
                    className="alert-checkbutton"
                    onClick={() => this.onNotificationCheck(i)}
                  />
                  <Link
                    to={`/requests/${alert.reference}`}
                    className="alert-info"
                  >
                    {moment(alert.alert_time).format("MM/DD/YY h:mm:ss a")}: New
                    Assignment | Request:{" "}
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
                    | Type:{" "}
                    <span className="alert-highlight">{alert.type}</span> |
                    Topic:{" "}
                    <span className="alert-highlight">{alert.topic}</span>
                  </Link>
                </div>
              </Menu.Item>
            );
          })}
      </Menu>
    );
    return (
      <Dropdown overlay={notificationMenu} placement="bottomRight">
        <Badge count={notificationData.length} className="notifications-badge">
          <span className="notifications-header">NOTIFICATIONS</span>
        </Badge>
      </Dropdown>
    );
  }
}

export default Notifications;
