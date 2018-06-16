import React from "react";
import "./NavHeader.css";
import { Link } from "react-router-dom";
import { Avatar, Badge, Menu, Dropdown, Icon } from "antd";

// Need to add mobile click drop down icon change on click

const userDropDownMenu = (
  <Menu>
    <Menu.Item>
      <Link to="/">
        <Icon type="setting" className="navheader-mobile-icon" />Settings
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">
        <Icon type="logout" className="navheader-mobile-icon" />Signout
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/support">
        <Icon type="question-circle-o" className="navheader-mobile-icon" />Support
      </Link>
    </Menu.Item>
  </Menu>
);

const NavHeader = ({
  onSignin,
  onSignout,
  loginStatus,
  onMobileNavClick,
  mobileDropDownOpen
}) => {
  // Should outsource this to another component
  const notificationsDropDownMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/">Item 1</Link>
      </Menu.Item>
    </Menu>
  );
  // Should outsource this to another component
  const mobileDropDownMenu = loginStatus.loginStatus ? (
    <Menu>
      <Menu.Item>
        <Link to="/dashboard">
          <Icon type="appstore-o" className="navheader-mobile-icon" />Dashboard
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/newrequest">
          <Icon type="plus-circle-o" className="navheader-mobile-icon" />New CS
          Request
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/requests">
          <Icon type="search" className="navheader-mobile-icon" />Search CS
          Requests
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to="/">
          <Icon type="setting" className="navheader-mobile-icon" />Settings
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/">
          <Icon type="logout" className="navheader-mobile-icon" />Signout
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to="/support">
          <Icon type="question-circle-o" className="navheader-mobile-icon" />Support
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item disabled className="navheader-mobile-company">
        <span>(Logged into: COMPANY)</span>
      </Menu.Item>
    </Menu>
  ) : (
    <Menu>
      <Menu.Item>
        <Link to="/">
          <Icon type="home" className="navheader-mobile-icon" />Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">
          <Icon type="info-circle-o" className="navheader-mobile-icon" />About
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/features">
          <Icon type="star-o" className="navheader-mobile-icon" />Features
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/contact">
          <Icon type="mail" className="navheader-mobile-icon" />Contact
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to="/signin">
          <Icon type="login" className="navheader-mobile-icon" />Signin
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/register">
          <Icon type="user-add" className="navheader-mobile-icon" />Register
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <nav className="navheader-full">
      <Link to="/" className="navheader-title">
        HERMES CS
      </Link>
      {loginStatus.loginStatus ? (
        <div className="navheader-links navheader-desktoplinks">
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
        <div className="navheader-links navheader-desktoplinks">
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
          <div className="navheader-mobilelinks">
            <Dropdown
              overlay={mobileDropDownMenu}
              trigger={["click"]}
              placement="bottomRight"
              onVisibleChange={visible => onMobileNavClick()}
            >
              <Icon
                type={
                  mobileDropDownOpen.mobileDropDownOpen
                    ? "menu-fold"
                    : "menu-unfold"
                }
                style={{ fontSize: 20 }}
              />
            </Dropdown>
          </div>
          <div className="navheader-desktoplinks">
            <Dropdown overlay={userDropDownMenu} placement="bottomRight">
              <Avatar
                style={{ backgroundColor: "#4291F7" }}
                className="navheader-avatar"
              >
                J
              </Avatar>
            </Dropdown>
          </div>
        </div>
      ) : (
        <div className="navheader-links">
          <button onClick={onSignin}>IN</button>
          <button onClick={onSignout}>OUT</button>
          <Link to="/signin" className="navheader-link navheader-desktoplinks">
            SIGN IN
          </Link>
          <Link
            to="/register"
            className="navheader-link navheader-desktoplinks"
          >
            REGISTER
          </Link>
          <div className="navheader-mobilelinks">
            <Dropdown
              overlay={mobileDropDownMenu}
              trigger={["click"]}
              placement="bottomRight"
              onVisibleChange={visible => onMobileNavClick()}
            >
              <Icon
                type={
                  mobileDropDownOpen.mobileDropDownOpen
                    ? "menu-fold"
                    : "menu-unfold"
                }
                style={{ fontSize: 20 }}
              />
            </Dropdown>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavHeader;
