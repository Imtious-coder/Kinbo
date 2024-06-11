import React, { useEffect, useState } from "react";
// import ProductData from "../assets/data";
import "../styles/Popular.css";
import Item from "./Item";

const Popular = () => {
  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularInWomen")
      .then((res) => res.json())
      .then((data) => setPopularProduct(data));
  }, []);

  return (
    <section className="popular">
      <h1>Popular In Women</h1>
      <div className="line"> {"n"}</div>
      <div className="popular-item">
        {popularProduct.map(
          ({ id, name, image, new_price, old_price, category }, index) => {
            return (
              <Item
                key={index}
                id={id}
                name={name}
                image={image}
                new_price={new_price}
                old_price={old_price}
                category={category}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default Popular;
