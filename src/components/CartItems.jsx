import React, { useContext } from "react";
import RemoveIcon from "../assets/cart_cross_icon.png";
import { ShopContext } from "../context/ShopContext";
import "../styles/CartItems.css";

const CartItems = () => {
  const { AllProdductData, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  return (
    <section className="cart_items">
      <div className="cart_items-formate-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {AllProdductData.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart_items-format cart_items-formate-main">
                <img className="carticon-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart_items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                className="carticon-remove-icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  src={RemoveIcon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </section>
  );
};

export default CartItems;
