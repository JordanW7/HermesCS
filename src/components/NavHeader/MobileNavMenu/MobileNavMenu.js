import React from "react";
import "./MobileNavMenu.css";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon } from "antd";

const MobileNavMenu = ({
  loginStatus,
  onMobileNavClick,
  mobileDropDownOpen
}) => {
  const mobileDropDownMenu = loginStatus.loginStatus ? (
    <Menu>
      <Menu.Item>
        <Link to="/dashboard">
          <Icon type="appstore-o" className="mobilenavmenu-icon" />Dashboard
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/newrequest">
          <Icon type="plus-circle-o" className="mobilenavmenu-icon" />New CS
          Request
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/requests">
          <Icon type="search" className="mobilenavmenu-icon" />Search CS
          Requests
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to="/settings">
          <Icon type="setting" className="mobilenavmenu-icon" />Settings
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/signout">
          <Icon type="logout" className="mobilenavmenu-icon" />Signout
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to="/support">
          <Icon type="question-circle-o" className="mobilenavmenu-icon" />Support
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item disabled className="mobilenavmenu-company">
        <span>(Logged into: COMPANY)</span>
      </Menu.Item>
    </Menu>
  ) : (
    <Menu>
      <Menu.Item>
        <Link to="/">
          <Icon type="home" className="mobilenavmenu-icon" />Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">
          <Icon type="info-circle-o" className="mobilenavmenu-icon" />About
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/contact">
          <Icon type="mail" className="mobilenavmenu-icon" />Contact
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to="/signin">
          <Icon type="login" className="mobilenavmenu-icon" />Signin
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/register">
          <Icon type="user-add" className="mobilenavmenu-icon" />Register
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown
      overlay={mobileDropDownMenu}
      trigger={["click"]}
      placement="bottomRight"
      onVisibleChange={visible => onMobileNavClick()}
    >
      <Icon
        type={
          mobileDropDownOpen.mobileDropDownOpen ? "menu-unfold" : "menu-fold"
        }
        style={{ fontSize: 20 }}
      />
    </Dropdown>
  );
};

export default MobileNavMenu;
