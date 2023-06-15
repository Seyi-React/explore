import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-1">
          <h3>Explore</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            incidunt est temporibus autem voluptate provident nemo, obcaecati
            ad, itaque quo in voluptatum illo magnam numquam inventore dolorum
            labore modi. Iure!
          </p>
          <AiFillFacebook size={28} style={{ paddingRight: "10px" }} />
          <AiOutlineTwitter size={28} style={{ paddingRight: "10px" }} />
          <AiFillLinkedin size={28} style={{ paddingRight: "10px" }} />
        </div>
        <div className="foot-2">
          <p>Solutions</p>
          <p>Analytics</p>
          <p>Marketing</p>
          <p>Commerce</p>
          <p>Insights</p>
        </div>
        <div className="foot-3">
          <p>Support</p>
          <p>Pricing</p>
          <p>Documentation</p>
          <p>Guides</p>
          <p>API Guides</p>
        </div>
        <div className="foot-4">
          <p>Company</p>
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Press</p>
        </div>
      </div>
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontFamily: "cantarell",
          fontSize: "13px",
          paddingTop: "10px",
          paddingBottom:'10px',
          color:'#00df9a'
        }}
      >
        {" "}
        &copy; {new Date().getFullYear()} Explore
      </p>
    </div>
  );
};

export default Footer;
