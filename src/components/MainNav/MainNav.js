import React from "react";
import "./MainNav.css";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="mainnavfull">
      <span className="mainnav-title-white">Hermes CS</span>
      <div className="mainnav-links">
        <Link to="/" className="mainnav-link">
          HOME{" "}
        </Link>
        <Link to="/about" className="mainnav-link">
          {" "}
          ABOUT{" "}
        </Link>
        <Link to="/contact" className="mainnav-link">
          {" "}
          CONTACT{" "}
        </Link>
        <Link to="/signin" className="mainnav-link">
          {" "}
          SIGN IN{" "}
        </Link>
        <Link to="/register" className="mainnav-link">
          {" "}
          REGISTER
        </Link>
      </div>
      <div className="mainnav-links">Far Right</div>
    </nav>
  );
};

export default MainNav;
