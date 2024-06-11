import React from "react";
import { Link } from "react-router-dom";
import "../styles/Item.css";
import HeartEmptySVG from "../utils/HeartEmptySVG";
import StarSVG from "../utils/StarSVG";

const Item = ({ id, image, name, new_price, old_price, category }) => {
  return (
    <section className="item">
      <div className="image-fav">
        <Link to={`/product/${id}`}>
          <img onClick={window.scrollTo(0, 0)} src={image} alt="Images" />
        </Link>
        <div className="favIcon">
          <HeartEmptySVG />
        </div>
      </div>
      <h6>{category}</h6>
      <p>{name}</p>
      <div className="reviews">
        <StarSVG />
        <StarSVG />
        <StarSVG />
        <StarSVG />
        <StarSVG />
      </div>
      <h5>Lorem, ipsum consectetur dolore.</h5>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </section>
  );
};

export default Item;
