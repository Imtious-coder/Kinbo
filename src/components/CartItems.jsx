import React, { useContext } from "react";
import RemoveIcon from "../assets/cart_cross_icon.png";
import { ShopContext } from "../context/ShopContext";
import "../styles/CartItems.css";

const CartItems = () => {
  const {
    AllProdductData,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

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
        return null;
      })}
      <div className="cart_items-down">
        <div className="cart_items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart_items-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart_items-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart_items-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart_items-promobox">
            <input type="text" name="" id="" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
