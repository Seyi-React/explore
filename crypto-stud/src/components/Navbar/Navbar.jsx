import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
// import {AiOutlineAlignRight} from 'react-icons'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="desktop-navbar">
          <div className="desktop-h1">
            <h2>FORT</h2>
          </div>
          <div className="desktop-nav"> 
            <Link to="/">
                 <a href="#">Home</a>
            </Link>
            <Link to="/resource">
                <a href="#">Resource</a>
            </Link>
            <Link to="/about">
                <a href="#">About</a>
            </Link>
            <Link to="/contact">
                <a href="#"> Contact</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
