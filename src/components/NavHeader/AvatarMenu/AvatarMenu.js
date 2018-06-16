import React from "react";
import "./AvatarMenu.css";
import { Link } from "react-router-dom";
import { Avatar, Menu, Dropdown, Icon } from "antd";

const userDropDownMenu = (
  <Menu>
    <Menu.Item>
      <Link to="/">
        <Icon type="setting" className="avatarmenu-icon" />Settings
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">
        <Icon type="logout" className="avatarmenu-icon" />Signout
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/support">
        <Icon type="question-circle-o" className="avatarmenu-icon" />Support
      </Link>
    </Menu.Item>
  </Menu>
);

const AvatarMenu = () => {
  return (
    <Dropdown overlay={userDropDownMenu} placement="bottomRight">
      <Avatar style={{ backgroundColor: "#4291F7" }} className="avatarmenu">
        J
      </Avatar>
    </Dropdown>
  );
};

export default AvatarMenu;
