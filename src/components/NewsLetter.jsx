import React from "react";
import "../styles/NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="newsLetter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay connected.</p>
      <div>
        <input type="email" placeholder="Your Email ID"></input>
        <button>Subscribe</button>
      </div>
    </section>
  );
};

export default NewsLetter;
