import React, { Component } from "react";
import "./Hero.css";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import HeroNav from "../HeroNav/HeroNav";

const Hero = () => {
  return (
    <div className="herofull">
      <HeroNav />
      <p className="hero-subtitle">
        Assisting Contact Centres to provide excellent customer service.
      </p>
      <Link to="/about" className="hero-info">
        <Icon type="info-circle-o" /> Find out more
      </Link>
    </div>
  );
};

export default Hero;
