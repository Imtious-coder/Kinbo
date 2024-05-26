import React from "react";
import product_data from "../assets/data.js";
import "../styles/RelatedProducts.css";
import Item from "./Item";

const RelatedProducts = () => {
  return (
    <section className="related_products">
      <h1>Related Products</h1>
      <hr />
      <div className="related_products-item">
        {product_data.map(
          ({ id, name, image, new_price, old_price }, index) => {
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
          }
        )}
      </div>
    </section>
  );
};

export default RelatedProducts;
