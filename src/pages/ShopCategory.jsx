import React, { useContext } from "react";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Item";
import { ShopContext } from "../context/ShopContext";
import "../styles/ShopCategory.css";

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);
  return (
    <section className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allProducts.map(
          ({ id, name, image, new_price, old_price, category }, index) => {
            if (props.category === category) {
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
            } else {
              return null;
            }
          }
        )}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </section>
  );
};

export default ShopCategory;
