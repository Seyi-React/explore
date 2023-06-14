import React from "react";
import "./hero.css";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-cont">
        <h1 className="grow bouncing-text">growing with data analytics</h1>
        <h3 className="data">grow with data</h3>
        <p className="flex">
          flex,flexible financing for{" "}
          <Typed
            strings={["SASS", "ANALYSIS", "EXPLORE"]}
            typeSpeed={60}
            backSpeed={50}
            loop
          />
        </p>
        <p className="data">
          Monitor data analytics to increase revenues for BTB,BTC, & SASS
          platforms
        </p>
        <Link>
            <button>Get started</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
