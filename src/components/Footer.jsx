import React from "react";
import instagram_icon from "../assets/instagram_icon.png";
import footer_logo from "../assets/logo_big.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Logo" />
        <p>KINBO</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Social Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="Social Icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="Social Icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
