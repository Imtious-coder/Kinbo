import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Offers from "../components/Offers";
import NewCollections from "../components/NewCollections";

const Shop = () => {
  return (
    <section>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </section>
  );
};

export default Shop;
