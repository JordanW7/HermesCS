import React, { Component } from "react";
import CheckAuth from "../CheckAuth/CheckAuth";
import NavHeader from "../NavHeader/NavHeader";
import { Menu, Icon, Col, Row, Form, Button, Input } from "antd";
import "./Settings.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;

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
    return (
      <div className="settings-full">
        <NavHeader {...this.props} />
        <div className="settings">
          <div className="settings-title">Settings</div>
          <div className="settings-box">
            <Row>
              {
                //will need to change this on mobile so the menu is still visible//
              }
              <Col span={6}>
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
                  {
                    //Need to add a check so only admin can view this section of the menu//
                  }
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
                </Menu>
              </Col>
              {currentPage === "profile" && (
                <Col span={18} className="settings-content-actions">
                  <div className="settings-content-title">Change Password</div>
                  <Form layout="inline">
                    <FormItem label="Current Password:">
                      <Input
                        onChange={this.onCurrentPasswordChange}
                        type="password"
                      />
                    </FormItem>
                    <FormItem label="New Password:">
                      <Input
                        onChange={this.onNewPasswordChange}
                        type="password"
                      />
                    </FormItem>
                    <Button type="primary" onClick={this.onProfileSave}>
                      Save
                    </Button>
                  </Form>
                </Col>
              )}
              {currentPage === "user-add" && (
                <Col span={18} className="settings-content-actions" />
              )}
              {currentPage === "user-modify" && (
                <Col span={18} className="settings-content-actions" />
              )}
              {currentPage === "team-add" && (
                <Col span={18} className="settings-content-actions" />
              )}
              {currentPage === "team-modify" && (
                <Col span={18} className="settings-content-actions" />
              )}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
