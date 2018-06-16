import React from "react";
import "./NavHeader.css";
import { Link } from "react-router-dom";
import Notifications from "./Notifications/Notifications";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";
import AvatarMenu from "./AvatarMenu/AvatarMenu";

const NavHeader = ({
  onSignin,
  onSignout,
  loginStatus,
  onMobileNavClick,
  mobileDropDownOpen
}) => {
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
          <Notifications />
          <div className="navheader-mobilelinks">
            <MobileNavMenu
              loginStatus={loginStatus}
              onMobileNavClick={onMobileNavClick}
              mobileDropDownOpen={mobileDropDownOpen}
            />
          </div>
          <div className="navheader-desktoplinks">
            <AvatarMenu />
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
            <MobileNavMenu
              loginStatus={loginStatus}
              onMobileNavClick={onMobileNavClick}
              mobileDropDownOpen={mobileDropDownOpen}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavHeader;
