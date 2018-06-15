import React from "react";
import "./NavHeader.css";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <nav className="navheader-full">
      <Link to="/" className="navheader-title">
        HERMES CS
      </Link>
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
      <div className="navheader-links">
        <Link to="/signin" className="navheader-link">
          SIGN IN
        </Link>
        <Link to="/register" className="navheader-link">
          REGISTER
        </Link>
      </div>
    </nav>
  );
};

export default NavHeader;
