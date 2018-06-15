import React, { Component } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import NavHeader from "../NavHeader/NavHeader";

class Hero extends Component {
  render() {
    return (
      <div className="hero-full">
        <NavHeader {...this.props} />
        <div className="hero-contents">
          <span className="hero-title">Hermes CS</span>
          <p className="hero-subtitle">
            Assisting Contact Centres to provide excellent customer service.
          </p>
          <Link to="/about" className="hero-infobutton">
            FIND OUT MORE
          </Link>
        </div>
      </div>
    );
  }
}

export default Hero;
