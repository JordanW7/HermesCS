import React, { Component } from "react";
import "./HeroNav.css";
import { Link } from "react-router-dom";

const HeroNav = () => {
  return (
    <div className="hero-navfull">
      <span className="hero-title">Hermes CS</span>
      <div className="hero-nav">
        <Link to="/" className="hero-nav-link">
          Home{" "}
        </Link>
        ·
        <Link to="/about" className="hero-nav-link">
          {" "}
          About{" "}
        </Link>
        ·
        <Link to="/signin" className="hero-nav-link">
          {" "}
          Signin{" "}
        </Link>
        ·
        <Link to="/register" className="hero-nav-link">
          {" "}
          Register
        </Link>
      </div>
    </div>
  );
};

export default HeroNav;
