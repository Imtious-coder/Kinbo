import React from "react";
import "../styles/Item.css";

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <section className="item">
      <img src={image} alt="Images" />
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </section>
  );
};

export default Item;
