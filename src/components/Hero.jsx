import React from "react";
import arrowIcon from "../assets/arrow.png";
import handIcon from "../assets/hand_icon.png";
import heroImage from "../assets/hero_image.png";
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
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="ArrowIcon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="HeroImage" />
      </div>
    </section>
  );
};

export default Hero;
