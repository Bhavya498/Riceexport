import React, { useState } from "react";
import logo3 from "../Images/logo3.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={logo3} alt="Aarush Logo" />
        </a>
      </div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </div>

      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <li><a href="/">Home</a></li>

        <li className="dropdown">
          <a href="#">Our Company ▼</a>
          <ul className="dropdown-menu">
            <li><a href="/about">About Us</a></li>
            <li><a href="/certifications">Certifications</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#">Our Product ▼</a>
          <ul className="dropdown-menu">
            <li><a href="/basmati">1121 Steam Basmati Rice</a></li>
            <li><a href="/sella">1121 Sella Basmati Rice</a></li>
            <li><a href="/golden">1121 Golden Basmati Rice</a></li>
            <li><a href="/steam">1509 Steam Basmati Rice</a></li>
            <li><a href="/sell">1509 Sella Basmati Rice</a></li>
            <li><a href="/gold">1509 Golden Basmati Rice</a></li>
          </ul>
        </li>

        <li><a href="/infra">Infrastructure</a></li>
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>

      <a href="/contact" className="navbar-button">GET IN TOUCH</a>
    </nav>
  );
};

export default Navbar;
