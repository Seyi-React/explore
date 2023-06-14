import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div>
      <nav>
        <div className="desktop-navbar">
          <div className="desktop-h1">
            <h2>Explore</h2>
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
          {/* Mobile view */}
          <div onClick={handleClick} className="menu">
            {nav ? (
              <AiOutlineClose color="white" size={30} />
            ) : (
              <BiMenuAltLeft color="white" size={30} />
            )}
          </div>
          {nav && (
            <div className="side-nav">
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
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
