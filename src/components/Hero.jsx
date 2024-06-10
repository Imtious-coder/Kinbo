import React from "react";
import handIcon from "../assets/hand_icon.png";
import heroImage from "../assets/himage.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={handIcon} alt="HandIcon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection {">"}</div>
          {/* <img src={arrowIcon} alt="ArrowIcon" /> */}
        </div>
      </div>
      {/* IMAGE */}
      <div className="hero-right hidden md-flex">
        <img src={heroImage} alt="HeroImage" />
      </div>
    </section>
  );
};

export default Hero;
