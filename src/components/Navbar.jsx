import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart_icon.png";
import logo from "../assets/logo.png";
import { ShopContext } from "../context/ShopContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>KINBOO</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setSelectedMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {selectedMenu === "shop" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setSelectedMenu("mens");
          }}
        >
          <Link to="/mens">Men</Link>
          {selectedMenu === "mens" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setSelectedMenu("womens");
          }}
        >
          <Link to="/womens">Women</Link>
          {selectedMenu === "womens" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setSelectedMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {selectedMenu === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart_Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </nav>
  );
};

export default Navbar;
