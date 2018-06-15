import React from "react";
import "./NavHeader.css";
import { Link } from "react-router-dom";
import { Avatar, Badge, Menu, Dropdown, Icon } from "antd";

// Need to add Mobile-Friendly NavBar Options

const userDropDownMenu = (
  <Menu>
    <Menu.Item>
      <Link to="/">Settings</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">Signout</Link>
    </Menu.Item>
  </Menu>
);

const notificationsDropDownMenu = (
  <Menu>
    <Menu.Item>
      <Link to="/">Item 1</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">Item 2</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">Item 3</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">Item 4</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">Item 5</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">More</Link>
    </Menu.Item>
  </Menu>
);

const NavHeader = props => {
  const { onSignin, onSignout, loginStatus } = props;
  const mobileDropDownMenu = (
    <Menu>
      {
        // Add if statements in here for what menu items to include
      }
      <Menu.Item>
        <Link to="/">Item 1</Link>
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
            >
              <Icon type="menu-unfold" style={{ fontSize: 20 }} />
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
            >
              <Icon type="menu-unfold" style={{ fontSize: 20 }} />
            </Dropdown>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavHeader;
