import React, { useState } from "react";
import logo3 from "../Images/logo3.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // track open dropdown in mobile

  const toggleDropdown = (name) => {
    if (dropdownOpen === name) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(name);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <a href="/">
          <img src={logo3} alt="Aarush Logo" />
        </a>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </div>

      {/* Nav Links */}
      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <li><a href="/">Home</a></li>

        <li className={`dropdown ${dropdownOpen === "company" ? "show" : ""}`}>
          <a href="#" onClick={() => toggleDropdown("company")}>Our Company ▼</a>
          <ul className="dropdown-menu">
            <li><a href="/about">About Us</a></li>
            <li><a href="/certifications">Certifications</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </li>

        <li className={`dropdown ${dropdownOpen === "product" ? "show" : ""}`}>
          <a href="#" onClick={() => toggleDropdown("product")}>Our Product ▼</a>
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

      {/* CTA Button */}
      <a href="/contact" className="navbar-button">GET IN TOUCH</a>
    </nav>
  );
};

export default Navbar;
