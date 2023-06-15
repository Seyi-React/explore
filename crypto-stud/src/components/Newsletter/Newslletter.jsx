import React from "react";
import "./newsletter.css";
const Newslletter = () => {
  return (
    <div className="newsletter">
      <div className="news-parent">
        <div className="wants">
          <h1>Wants Tips & Tricks to optimize your flow</h1>
          <p>Sign up to newsletter and stay up to date</p>
        </div>
        <div className="notify">
          <input type="text" placeholder="Email Us" />
          <button>Notify Me</button>
        </div>
      </div>
    </div>
  );
};

export default Newslletter;
