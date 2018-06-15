import React from "react";
import "./NavHeader.css";
import { Link } from "react-router-dom";

const NavHeader = props => {
  const { onSignin, onSignout, loginStatus } = props;
  return (
    <nav className="navheader-full">
      <Link to="/" className="navheader-title">
        HERMES CS
      </Link>
      {loginStatus.loginStatus ? (
        <div className="navheader-links">
          <span className="navheader-link">(SIGNED INTO: COMPANY)</span>
          <Link to="/dashboard" className="navheader-link">
            DASHBOARD
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
          <span className="navheader-link">Hey there Jordan :)</span>
          <button onClick={onSignin}>IN</button>
          <button onClick={onSignout}>OUT</button>
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
