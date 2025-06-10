import React from 'react'
import homeimg from "../Images/homeimg.webp";
import logo3 from "../Images/logo3.png";
import rice26 from "../Images/rice26.webp";
import rice27 from "../Images/rice27.webp";


export default function Footer() {
    return (
        <div>
            <footer className="footer" style={{ backgroundImage: `url(${homeimg})` }}>
                <div className="footer-container">
                    <div className="footer-column">
                        <a href="/" className="footer-logo-link">
                        <img src={logo3} alt="Logo" className="footer-logo" />
                        </a>
                        <p className="footer-desc">
                            Hemant Food Grain Pvt. Ltd. is one of the leading Miller, Processor and Basmati<br />
                            Manufacturer, Supplier, Exporter in India
                        </p>
                    </div>

                    <div className="footer-column">
                        <h3>Links</h3>
                        <ul>
                            <a href="/" className="text-white"><li>&#9658; Home</li></a>
                            <a href="/about" className="text-white"><li>&#9658; About Us</li></a>
                            <a href="/certifications" className="text-white"><li>&#9658; Certifications</li></a>
                            <a href="/gallery" className="text-white"><li>&#9658; Gallery</li></a>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Explore Link</h3>
                        <ul>
                            <a href="/infra" className="text-white"><li>&#9658; Infrastructure</li></a>
                            <a href="/recipes" className="text-white"><li>&#9658; Recipes</li></a>
                            {/* <li>&#9658; Blog</li> */}
                            <a href="/contact" className="text-white"><li>&#9658; Contact Us</li></a>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Popular Post</h3>
                        <div className="post">
                            <img src={rice26} alt="Post" />
                            <p>Top 10 Rice Mill in Haryana</p>
                        </div>
                        <div className="post">
                            <img src={rice27} alt="Post" />
                            <p>Top Largest Exporter of<br />Basmati Rice in India</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © 2023 <span className="highlight">Hemant Food Grain Pvt. Ltd </span>
                            {/* - All Rights Reserved by <span className="highlight">Navel Studio</span> */}
                    </p>
                    <div className="social-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </footer>
        </div>
    )
}
