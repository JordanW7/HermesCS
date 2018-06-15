import React from "react";
import "./NavHeader.css";
import { Link } from "react-router-dom";
import { Avatar, Badge, Menu, Dropdown } from "antd";

const userDropDownMenu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        Settings
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Signout
      </a>
    </Menu.Item>
  </Menu>
);

const notificationsDropDownMenu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        Item 1
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Item 2
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Item 3
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Item 4
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Item 5
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        More
      </a>
    </Menu.Item>
  </Menu>
);

const NavHeader = props => {
  const { onSignin, onSignout, loginStatus } = props;
  return (
    <nav className="navheader-full">
      <Link to="/" className="navheader-title">
        HERMES CS
      </Link>
      {loginStatus.loginStatus ? (
        <div className="navheader-links">
          <span className="navheader-companyaccount">(COMPANY)</span>
          <Link to="/dashboard" className="navheader-link">
            DASHBOARD
          </Link>
          <Link to="/newrequest" className="navheader-link">
            NEW CS REQUEST
          </Link>
          <Link to="/requests" className="navheader-link">
            SEARCH CS REQUESTS
          </Link>
        </div>
      ) : (
        <div className="navheader-links">
          <Link to="/" className="navheader-link">
            HOME
          </Link>
          <Link to="/about" className="navheader-link">
            ABOUT
          </Link>
          <Link to="/features" className="navheader-link">
            FEATURES
          </Link>
          <Link to="/contact" className="navheader-link">
            CONTACT
          </Link>
        </div>
      )}
      {loginStatus.loginStatus ? (
        <div className="navheader-links">
          <button onClick={onSignin}>IN</button>
          <button onClick={onSignout}>OUT</button>
          <Dropdown overlay={notificationsDropDownMenu} placement="bottomRight">
            <Badge count={1} className="navheader-notifications-badge">
              <span className="navheader-notifications">NOTIFICATIONS</span>
            </Badge>
          </Dropdown>
          <Dropdown overlay={userDropDownMenu} placement="bottomRight">
            <Avatar
              style={{ backgroundColor: "#4291F7" }}
              className="navheader-avatar"
            >
              J
            </Avatar>
          </Dropdown>
        </div>
      ) : (
        <div className="navheader-links">
          <Link to="/signin" className="navheader-link">
            SIGN IN
          </Link>
          <Link to="/register" className="navheader-link">
            REGISTER
          </Link>
          <button onClick={onSignin}>IN</button>
          <button onClick={onSignout}>OUT</button>
        </div>
      )}
    </nav>
  );
};

export default NavHeader;
