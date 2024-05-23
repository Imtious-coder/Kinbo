import React from "react";
import new_collection_data from "../assets/new_collections";
import "../styles/NewCollections.css";
import Item from "./Item";

const NewCollections = () => {
  return (
    <section className="newCollections">
      <h1>NEW COLLECTIONS</h1>
      <div className="line"> {"n"}</div>
      <div className="collections">
        {new_collection_data.map(
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

export default NewCollections;
