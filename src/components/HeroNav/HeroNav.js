import React, { Component } from "react";
import "./HeroNav.css";
import { Link } from "react-router-dom";

const Divider = ({ color }) => {
  return color === "black" ? (
    <span className="hero-dot-black">·</span>
  ) : (
    <span className="hero-dot-white">·</span>
  );
};

const HeroNav = ({ color }) => {
  return (
    <div className="hero-navfull">
      {color === "black" ? (
        <span className="hero-title-black">Hermes CS</span>
      ) : (
        <span className="hero-title-white">Hermes CS</span>
      )}
      <div className="hero-nav">
        {color === "black" ? (
          <Link to="/" className="hero-nav-link-black">
            Home{" "}
          </Link>
        ) : (
          <Link to="/" className="hero-nav-link-white">
            Home{" "}
          </Link>
        )}
        <Divider color={color} />
        {color === "black" ? (
          <Link to="/about" className="hero-nav-link-black">
            {" "}
            About{" "}
          </Link>
        ) : (
          <Link to="/about" className="hero-nav-link-white">
            {" "}
            About{" "}
          </Link>
        )}
        <Divider color={color} />
        {color === "black" ? (
          <Link to="/signin" className="hero-nav-link-black">
            {" "}
            Signin{" "}
          </Link>
        ) : (
          <Link to="/signin" className="hero-nav-link-white">
            {" "}
            Signin{" "}
          </Link>
        )}
        <Divider color={color} />
        {color === "black" ? (
          <Link to="/register" className="hero-nav-link-black">
            {" "}
            Register{" "}
          </Link>
        ) : (
          <Link to="/register" className="hero-nav-link-white">
            {" "}
            Register{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroNav;
