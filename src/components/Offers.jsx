import React from "react";
import "../styles/Offers.css";
import exclusive_image from "../assets/exclusive_image.png"

const Offers = () => {
  return (
    <section className="offers">
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers_right">
        <img src={exclusive_image} alt="exclusive_image" />
      </div>
    </section>
  );
};

export default Offers;
