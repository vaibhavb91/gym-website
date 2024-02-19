import React from "react";
import "./footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="logo-f">
          <img src={Logo} alt="logo" />
        </div>
        <div className="socail">
          <img className="social-links" src={Github} alt="Github" />
          <img className="social-links" src={Instagram} alt="Instagram" />
          <img className="social-links" src={LinkedIn} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
