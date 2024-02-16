import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="Logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why US</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
