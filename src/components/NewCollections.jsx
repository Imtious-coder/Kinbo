import React, { useEffect, useState } from "react";
// import new_collection_data from "../assets/new_collections";
import "../styles/NewCollections.css";
import Item from "./Item";

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollection")
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  }, []);
  
  return (
    <section className="newCollections">
      <h1>New Collections</h1>
      <div className="line"> {"n"}</div>
      <div className="collections">
        {newCollection.map(
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

export default NewCollections;
