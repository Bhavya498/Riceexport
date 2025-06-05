import React from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="left-section">
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        
        {/* ✅ Email link */}
        <a href="mailto:hemant@hemantexport.com" className="contact-link">
          <FaEnvelope /> hemant@hemantexport.com
        </a>

        {/* ✅ Phone link */}
        <a href="tel:+919328899372" className="contact-link">
          <FaPhoneAlt /> +91 9328899372
        </a>
      </div>

      <div className="right-section">
        <span className="tagline">Basmati And Non Basmati Rice</span>
        <a href="#who">
        <button className="who-we-are-btn">WHO WE ARE</button>
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
