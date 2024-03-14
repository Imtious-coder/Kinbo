import React, { useState } from "react";
import cartIcon from "../assets/cart_icon.png";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("shop");
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
          Shop {selectedMenu === "shop" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setSelectedMenu("mens");
          }}
        >
          Men {selectedMenu === "mens" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setSelectedMenu("womens");
          }}
        >
          Women {selectedMenu === "womens" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setSelectedMenu("kinds");
          }}
        >
          Kids {selectedMenu === "kinds" ? <hr /> : ""}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cartIcon} alt="Cart_Icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </nav>
  );
};

export default Navbar;
