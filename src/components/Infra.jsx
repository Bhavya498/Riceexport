import React from 'react'
import homeimg from "../Images/homeimg.jpg";
import infrastructure from "../Images/infrastructure.webp";
import infra1 from "../Images/infra1.webp";
import rice3 from "../Images/rice3.webp";
import rice4 from "../Images/rice4.webp";
import rice6 from "../Images/rice6.webp";
import rice7 from "../Images/rice7.webp";
import gold from "../Images/gold.jpeg";
import leaf from "../Images/leaf.webp";
import golden from "../Images/golden.webp";


export default function Infrastructure() {
    return (
        <div>

            <div className="about-banner"
                style={{ backgroundImage: `url(${homeimg})` }}
            >
                <div className="overlay"></div>
                <div className="about-text">
                    <h1>Our Infrastructure</h1>
                    <p>Home / Our Infrastructure</p>
                </div>
            </div>
            <br /><br /><br />

            <section className="infrastructure-section">
                <div className="decorative-circles">
                    <span className="circle small"></span>
                    <span className="circle medium"></span>
                </div>
                <div className="section-title">
                    <div className="subheading">
                        <img src={leaf} alt="Wheat Icon" className="icon" />
                        <span className="subtitle-text">OUR BENEFITS</span>
                    </div>
                </div>

                <div className="content">
                    <div className="left">
                        {/* <h4>Our Benefits</h4> */}
                        <p>
                            At Hemant Export, we take pride in offering unmatched value to our global customers. Here’s what sets us apart:
                        </p>
                        <h4>✅ Premium Quality Products</h4>
                        <p>
                            We ensure the highest standards of quality in every shipment through strict quality control, third-party inspections, and certifications like USFDA, BRC, HACCP, Kosher, and Halal.
                        </p>
                        <h4>✅ End-to-End Supply Chain Management</h4>
                        <p>
                            From sourcing raw materials to final shipment, we provide seamless logistics solutions, ensuring timely deliveries and compliance with international standards.
                        </p>
                        <h4>✅ Customized Solutions</h4>
                        <p>
                            We offer tailored packaging, labelling, and documentation as per buyer requirements to meet diverse market needs.
                        </p>
                        <h4>✅ Competitive Pricing</h4>
                        <p>
                            Thanks to our efficient operations and direct miller-to-customer approach, we provide the best prices without compromising on quality.
                        </p>
                        <h4>✅ Global Export Expertise</h4>
                        <p>
                            With decades of experience, we understand and comply with the regulations of various international markets, including Europe, the USA, and the Middle East.
                        </p>
                        <h4>✅ Reliable Customer Support</h4>
                        <p>
                            Our dedicated team ensures prompt communication and support at every stage of the order process, from inquiry to delivery.
                        </p>
                        <h4>✅ Sustainability Commitment</h4>
                        <p>
                            We promote eco-friendly practices in farming, processing, and packaging to contribute to a greener future.
                        </p>
                    </div>
                </div>
            </section><br /><br />

            <section class="gallery-section">
                <div class="image-grid">
                    <img src={infra1} alt="Infrastructure 1" loading="lazy" />
                </div>
            </section>

            <section className="products-section">
                <img src={leaf} alt="Wheat Icon" className="icon" />
                <div className="section-header">
                    <p className="tagline">INDIAN RICE VARIETIES WE OFFER</p>
                    <h2>Our Products Range</h2>
                </div>

                <div className="product-list">
                    <a href="/basmati" className="product-card">
                        <div className="product-card">
                            <div className="product-img">
                                <img src={rice3} alt="1121 Basmati Rice" />
                            </div>
                            <div className="product-label">1121 Basmati Rice</div>
                        </div>
                    </a>

                    <a href="/sella" className="product-card">
                        <div className="product-card">
                            <div className="product-img">
                                <img src={rice4} alt="1121 Sella Basmati Rice" />
                            </div>
                            <div className="product-label">1121 Sella Basmati Rice</div>
                        </div>
                    </a>

                    <a href="/golden" className="product-card">
                        <div className="product-card">
                            <div className="product-img">
                                <img src={golden} alt="GoldenBasmati Rice" />
                            </div>
                            <div className="product-label">Golden Basmati Rice</div>
                        </div>
                    </a>

                    <a href="/steam" className="product-card">
                        <div className="product-card">
                            <div className="product-img">
                                <img src={rice6} alt="1401 Basmati Rice" />
                            </div>
                            <div className="product-label">1509 Basmati Rice</div>
                        </div>
                    </a>

                    <a href="/sell" className="product-card">
                        <div className="product-card">
                            <div className="product-img">
                                <img src={rice7} alt="Sella Basmati Rice" />
                            </div>
                            <div className="product-label">1509 Sella Basmati Rice</div>
                        </div>
                    </a>

                    <a href="/gold" className="product-card">
                        <div className="product-card">
                            <div className="product-img">
                                <img src={gold} alt="Golden Rice" />
                            </div>
                            <div className="product-label">Golden Rice</div>
                        </div>
                    </a>

                </div>
            </section>

        </div>
    )
}
