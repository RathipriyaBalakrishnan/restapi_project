import React from 'react';
import './HeroImgStyle2.css';
import {  Link } from "react-router-dom";

class HeroImage extends React.Component {
  render() {
    const {text, backgroundImage } = this.props;

    return (
      <div className="hero-img">
        <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="overlay"></div> {/* Overlay for transparency */}
        </div>
        <div className="content">
          <div className="welcome-message">
            {/* <h1>{heading}</h1> */}
            <p>{text}</p>
            <Link to ="/events">
            <button className="cta-button">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroImage;