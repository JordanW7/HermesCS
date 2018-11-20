import React, { Component } from "react";
import CheckAuth from "../CheckAuth/CheckAuth";
import NavHeader from "../NavHeader/NavHeader";
import ProfileSettings from "./ProfileSettings/ProfileSettings";
import TeamSettingsAdd from "./Teams/TeamSettingsAdd";
import TeamSettingsModify from "./Teams/TeamSettingsModify";
import UserSettingsAdd from "./Users/UserSettingsAdd";
import UserSettingsModify from "./Users/UserSettingsModify";
import { Menu, Icon, Col, Row } from "antd";
import "./Settings.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      SettingsCurrentPage: "profile"
    };
  }
  onSettingsMenuChange = event => {
    this.setState({ SettingsCurrentPage: event.key });
  };
  render() {
    let auth = CheckAuth({ ...this.props });
    if (auth !== true) {
      return auth;
    }
    const currentPage = this.state.SettingsCurrentPage;
    const { access } = this.props.user.user;
    return (
      <div className="settings-full">
        <NavHeader {...this.props} />
        <div className="settings">
          <header className="settings-title">Settings</header>
          <main className="settings-box">
            <Row>
              <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <Menu
                  onClick={this.onSettingsMenuChange}
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  mode="inline"
                  className="settings-menu"
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="mail" />
                        <span>My Profile</span>
                      </span>
                    }
                  >
                    <Menu.Item key="profile">Change Password</Menu.Item>
                  </SubMenu>
                  {access === "owner" && (
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <Icon type="mail" />
                          <span>User Management</span>
                        </span>
                      }
                    >
                      <MenuItemGroup key="g1" title="Users">
                        <Menu.Item key="user-add">Add New</Menu.Item>
                        <Menu.Item key="user-modify">Modify</Menu.Item>
                      </MenuItemGroup>
                      <MenuItemGroup key="g2" title="Teams">
                        <Menu.Item key="team-add">Add New</Menu.Item>
                        <Menu.Item key="team-modify">Modify</Menu.Item>
                      </MenuItemGroup>
                    </SubMenu>
                  )}
                </Menu>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={18}
                xl={18}
                className="settings-content-actions"
              >
                {currentPage === "profile" && (
                  <ProfileSettings {...this.props} />
                )}
                {currentPage === "user-add" && (
                  <UserSettingsAdd {...this.props} />
                )}
                {currentPage === "user-modify" && (
                  <UserSettingsModify {...this.props} />
                )}
                {currentPage === "team-add" && (
                  <TeamSettingsAdd {...this.props} />
                )}
                {currentPage === "team-modify" && (
                  <TeamSettingsModify {...this.props} />
                )}
              </Col>
            </Row>
          </main>
        </div>
      </div>
    );
  }
}

export default Settings;
