import React, { useContext } from "react";
import ratingIconsEmpty from "../assets/star_dull_icon.png";
import ratingIcons from "../assets/star_icon.png";
import { ShopContext } from "../context/ShopContext";
import "../styles/ProductDetails.css";

const ProductDetails = (props) => {
  const { id, image, name, new_price, old_price } = props.product;
  const { addToCart } = useContext(ShopContext);
  return (
    <section className="productDetails">
      <div className="productDetails-left">
        <div className="productDetails-img-list">
          <img src={image} alt="Product_Image" />
          <img src={image} alt="Product_Image" />
          <img src={image} alt="Product_Image" />
          <img src={image} alt="Product_Image" />
        </div>
        <div className="productDetails-img">
          <img
            className="productDetails-main-img"
            src={image}
            alt="Product_Image"
          />
        </div>
      </div>
      <div className="productDetails-right">
        <h1>{name}</h1>
        <div className="productDetails-right-stars">
          <img src={ratingIcons} alt="Ratings" />
          <img src={ratingIcons} alt="Ratings" />
          <img src={ratingIcons} alt="Ratings" />
          <img src={ratingIcons} alt="Ratings" />
          <img src={ratingIconsEmpty} alt="Ratings" />
          <p>(169)</p>
        </div>
        <div className="productDetails-right-prices">
          <div className="productDetails-right-price-old">${old_price}</div>
          <div className="productDetails-right-price-new">${new_price}</div>
        </div>
        <div className="productDetails-right-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          asperiores vel corporis, quidem natus culpa debitis dolor alias a.
          Incidunt temporibus, non corporis quisquam ut rem at consectetur unde
          ipsam.
        </div>
        <div className="productDetails-right-size">
          <h1>Select Size</h1>
          <div className="productDetails-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productDetails-right-category">
          <span>Category : </span> Women, T-Shirt, Crop Top
        </p>
        <p className="productDetails-right-category">
          <span>Tags : </span> Modern, Latest
        </p>
      </div>
    </section>
  );
};

export default ProductDetails;
