import React from "react";
import ProductData from "../assets/data";
import "../styles/Popular.css";
import Item from "./Item";

const Popular = () => {
  return (
    <section className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <div className="line"> {"n"}</div>
      <div className="popular-item">
        {ProductData.map(({ id, name, image, new_price, old_price }, index) => {
          return (
            <Item
              key={index}
              id={id}
              name={name}
              image={image}
              new_price={new_price}
              old_price={old_price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
