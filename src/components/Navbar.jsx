import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart_icon.png";
import logo from "../assets/logo.png";
import { ShopContext } from "../context/ShopContext";
import "../styles/Navbar.css";
import CrossSVG from "../utils/CrossSVG";
import MenuSVG from "../utils/MenuSVG";

const TopStripe = () => {
  return (
    <nav className="nav-top-stripe flex justify-center md-space-between">
      <p>Free Shipping Over $100 & Free returns</p>
      <p className="hidden md-block">
        Hotline: <a href="tel:+8801635501610">+880163*****10</a>
      </p>
    </nav>
  );
};

const NavLogo = () => (
  <div className="nav-logo">
    <img src={logo} alt="logo" />
    <p>KINBOO</p>
  </div>
);

const NavItem = ({ to, label, selectedMenu, setSelectedMenu }) => (
  <li
    onClick={() => {
      setSelectedMenu(label.toLowerCase());
    }}
  >
    <Link to={to}>{label}</Link>
    {selectedMenu === label.toLowerCase() && <hr />}
  </li>
);

const NavLoginCart = ({ getTotalCartItems }) => {
  const isLoggedIn = localStorage.getItem("auth-token");

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.replace("/");
  };

  return (
    <div className="nav-login-cart">
      {isLoggedIn ? (
        <button className="button-orange" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="button-black">Login</button>
        </Link>
      )}
      <Link to="/cart">
        <img src={cartIcon} alt="Cart_Icon" />
      </Link>
      <div className="nav-cart-count">{getTotalCartItems()}</div>
    </div>
  );
};

const MobileNavLoginCart = ({ getTotalCartItems }) => {
  const isLoggedIn = localStorage.getItem("auth-token");

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.replace("/");
  };

  return (
    <div className="nav-login-cart-mobile ">
      {isLoggedIn ? (
        <button className="button-orange" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="button-black">Login</button>
        </Link>
      )}
      <Link to="/cart">
        <button className="button-black">Cart - {getTotalCartItems()}</button>
      </Link>
    </div>
  );
};

const MainNavbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <nav className="navbar hidden lg-flex">
      <Link to={"/"} className="text-decoration-none">
        <NavLogo />
      </Link>
      <ul className="nav-menu">
        <NavItem
          to="/"
          label="Shop"
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
        <NavItem
          to="/mens"
          label="Men"
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
        <NavItem
          to="/womens"
          label="Women"
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
        <NavItem
          to="/kids"
          label="Kids"
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      </ul>
      <NavLoginCart cartIcon={cartIcon} getTotalCartItems={getTotalCartItems} />
    </nav>
  );
};

const MobileNavbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <section className="navbar-mobile block lg-hidden">
      <nav className="flex items-center space-between">
        <Link to={"/"} className="text-decoration-none">
          <NavLogo />
        </Link>
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-icon pointer"
        >
          {isMenuOpen ? <CrossSVG /> : <MenuSVG />}
        </div>
      </nav>
      <div
        className={`${isMenuOpen ? "mobile-menu-open" : "mobile-menu-hidden"}`}
      >
        <ul className="nav-menu-mobile">
          <NavItem
            to="/"
            label="Shop"
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          <NavItem
            to="/mens"
            label="Men"
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          <NavItem
            to="/womens"
            label="Women"
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          <NavItem
            to="/kids"
            label="Kids"
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
        </ul>
        <MobileNavLoginCart
          cartIcon={cartIcon}
          getTotalCartItems={getTotalCartItems}
        />
      </div>
    </section>
  );
};

const Navbar = () => {
  return (
    <>
      <TopStripe />
      <MainNavbar />
      <MobileNavbar />
    </>
  );
};

export default Navbar;
