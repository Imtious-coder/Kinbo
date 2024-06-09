import React from "react";
import Hero from "../components/Hero";
import NewCollections from "../components/NewCollections";
import NewsLetter from "../components/NewsLetter";
import Offers from "../components/Offers";
import Popular from "../components/Popular";

const Shop = () => {
  return (
    <section style={{ overflow: "hidden" }}>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </section>
  );
};

export default Shop;
