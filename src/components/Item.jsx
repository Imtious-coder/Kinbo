import React from "react";
import { Link } from "react-router-dom";
import "../styles/Item.css";

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <section className="item">
      <Link to={`/product/${id}`}>
        <img src={image} alt="Images" />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </section>
  );
};

export default Item;
