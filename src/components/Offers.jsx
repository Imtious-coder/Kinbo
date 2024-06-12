import React from "react";
import exclusive_image from "../assets/exclusive_img.png";
import "../styles/Offers.css";

const Offers = () => {
  return (
    <section className="offer-banner">
      <div className="offer-left">
        <p>Exclusive</p>
        <p>Offers For You</p>
        <h2>ONLY ON BEST SELLERS PRODUCTS </h2>
        <div className="btn">
          <div>Check Now</div>
        </div>
      </div>
      {/* IMAGE */}
      <div className="offer-right hidden md-flex">
        <img src={exclusive_image} alt="exclusive_image" />
      </div>
    </section>
  );
};

export default Offers;
