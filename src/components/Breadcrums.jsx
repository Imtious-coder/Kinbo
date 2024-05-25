import React from "react";
import arrowIcon from "../assets/breadcrum_arrow.png";
import "../styles/Breadcrums.css";
const Breadcrums = (props) => {
  const { product } = props;
  return (
    <section className="breadcrum">
      HOME
      <img src={arrowIcon} alt="" /> SHOP <img src={arrowIcon} alt="" />{" "}
      {product.category} <img src={arrowIcon} alt="" /> {product.name}
    </section>
  );
};

export default Breadcrums;
