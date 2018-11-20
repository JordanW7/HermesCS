import React, { Component } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import NavHeader from "../NavHeader/NavHeader";

class Hero extends Component {
  componentDidMount() {
    if (this.props.location.state) {
      this.props.onSignout();
    }
  }
  render() {
    return (
      <div className="hero-full">
        <NavHeader {...this.props} />
        <main className="hero-contents">
          <header className="hero-title">Hermes CS</header>
          <p className="hero-subtitle">
            Assisting Contact Centres to provide excellent customer service.
          </p>
          <Link to="/about" className="hero-infobutton">
            FIND OUT MORE
          </Link>
        </main>
      </div>
    );
  }
}

export default Hero;
