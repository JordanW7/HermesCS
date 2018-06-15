import React from "react";
import "./Hero.css";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import MainNav from "../MainNav/MainNav";

const Hero = () => {
  return (
    <div className="herofull">
      <MainNav />
      <div className="hero-contents">
        <span className="hero-title">Hermes CS</span>
        <p className="hero-subtitle">
          Assisting Contact Centres to provide excellent customer service.
        </p>
        <Link to="/about" className="hero-info">
          Find out more
        </Link>
      </div>
    </div>
  );
};

export default Hero;
