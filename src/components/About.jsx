import React from 'react';
import homeimg from "../Images/homeimg.webp";
import rice1 from "../Images/rice1.webp";
import rice2 from "../Images/rice2.webp";
import rice3 from "../Images/rice3.webp";
import rice4 from "../Images/rice4.webp";
import rice5 from "../Images/rice5.webp";
import rice6 from "../Images/rice6.webp";
import rice7 from "../Images/rice7.webp";
import golden from "../Images/golden.webp";
import leaf from "../Images/leaf.webp";
import gold from "../Images/gold.jpeg";
import acc1 from "../Images/acc1.jpg";
import acc2 from "../Images/acc2.jpg";
import acc3 from "../Images/acc3.jpg";
import acc4 from "../Images/acc4.png";
import acc5 from "../Images/acc5.jpg";
import acc6 from "../Images/acc6.png";
import acc7 from "../Images/acc7.jpg";
import pro1 from "../Images/pro1.jpg";
import pro2 from "../Images/pro2.jpg";
import pro3 from "../Images/pro3.jpg";
import pro4 from "../Images/pro4.jpg";
import pro5 from "../Images/pro5.png";
import pro6 from "../Images/pro6.jpg";
import pro7 from "../Images/pro7.jpg";
import pro8 from "../Images/pro8.jpg";


export default function About() {
    return (
        <div>
            <div
                className="about-banner"
                style={{ backgroundImage: `url(${homeimg})` }}
            >
                <div className="overlay"></div>
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>Home / About</p>
                </div>
            </div>
            <br /><br /><br /><br />

            <section className="who-we-are" id="who">
                <div className="who-left">
                    <div className="main-img">
                        <img src={rice1} alt="Rice Scoop" />
                    </div>
                    <div className="overlay-img">
                        <img src={rice2} alt="Bowl of Rice" />
                    </div>
                </div>

                <div className="who-right">
                    <div className="heading">
                        <p className="sub-title">
                            <i className="fas fa-seedling"></i> WELCOME TO Hemant FOOD GRAINS PVT. LIMITED
                        </p>
                        <h2>Who We Are</h2>
                    </div>
                    <p className="description">
                        <strong> “HEMANT EXPORT” </strong>is a reputed & reliable merchant exporter, established and backed by 2nd generation business house. We believe that business grows on trust along with commitment & passion. We export products with a complete check on quality, vendor scrutinization and traceability. We offer products to our clients with a complete check on all parameters of products giving detailed insights into specifications. Our experienced team is equipped to source the best products at the best price in the best timelines.

                    </p>

                    <div className="features">
                        <div className="feature-box yellow">
                            <i className="fas fa-award"></i>
                            <h3>100%</h3>
                            <p>Organic Rice</p>
                        </div>
                        <div className="feature-box blue">
                            <i className="fas fa-user"></i>
                            <h3>Excellent</h3>
                            <p>Quality</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="about-section">
                <p>
                    <strong> “HEMANT EXPORT” </strong>, is a perfect blend of experienced professionals with solid experience of technical, commercial, trading, logistics and financial background. What sets “HEMANT EXPORT”, to stand out is that, we provide a price advantage, personalized service and also encourage orders of all sizes and volumes.

                </p>

                <div className="circle-divider"></div>

                <p>
                    We offer deep insights into product specifications and provide constant feedback to our clients and suppliers on its availability. We also provide tracking assistance for whereabouts of the containers and distances from the destination. We are committed to provide one-stop solution for all the requirements of our clients from sourcing to shipment and from logistics support to delivery.
                </p>
                <p>
                    We have experience in sourcing, merchandising, buying & trading commodities across product categories. As a leading merchant exporter, we are a team of passionate business professionals with hands-on approach towards business. We are committed to keep up to the promises & deliver beyond satisfaction.
                </p>
            </div>



            <section className="accreditation-section">
                <h2>ACCREDITATION</h2>
                <div className="accreditation-logos">
                    <img src={acc1} alt="FIEO" />
                    <img src={acc2} alt="ISO Certified" />
                    <img src={acc3} alt="APEDA" />
                    <img src={acc4} alt="IAF" />
                    <img src={acc5} alt="MSME" />
                    <img src={acc6} alt="DGFT" />
                    <img src={acc7} alt="REX European Commission" />
                </div>
            </section>

            <section class="special-propositions">
                <h2>SPECIAL PROPOSITIONS</h2>
                <div class="props-grid">

                    <div class="prop-card">
                        <img src={pro1} alt="Customer Satisfaction" />
                        <div>
                            <strong>Customer satisfaction:</strong> Customer satisfaction is the basic criteria and essential part of our company leading to build the best business relationship in future by way of providing the best possible service.
                        </div>
                    </div>

                    <div class="prop-card">
                        <img src={pro2} alt="Best Pricing" />
                        <div>
                            <strong>Best pricing:</strong> Our company provides the best pricing to our customers for accommodating and fulfilling the requirements of the customer in most convenient and efficient manner.
                        </div>
                    </div>

                    <div class="prop-card">
                        <img src={pro3} alt="Excellent Service" />
                        <div>
                            <strong>Excellent service:</strong> We provide state-of-art customer services and it has always been our first priority and essential part of our company, where we work for solving every problems of our customer as fast as possible.
                        </div>
                    </div>

                    <div class="prop-card">
                        <img src={pro4} alt="Commitment" />
                        <div>
                            <strong>Commitment:</strong> Commitment is a legal promise to our customer reflecting our complete dedication for building the best business relationship in all terms.
                        </div>
                    </div>

                    <div class="prop-card">
                        <img src={pro5} alt="Good Quality Product" />
                        <div>
                            <strong>Good quality product:</strong> Our organization works for providing best quality products. Our products are verified for quality by institutes like SGS, Geo Chem and various govt. Approved agencies.
                        </div>
                    </div>

                    <div class="prop-card">
                        <img src={pro6} alt="Customer Relationship" />
                        <div>
                            <strong>Customer relationship:</strong> Our company believes in building the customer relationship, by having the best interaction with the customers leading to strengthening of business relations in future.
                        </div>
                    </div>

                    <div class="prop-card">
                        <img src={pro7} alt="Business Ethics" />
                        <div>
                            <strong>Ethics:</strong> The term business ethics refers to business morals, practices and policies that guide decision-making and managing controversies or issues. These principles govern every aspect of the company's operations, including its interaction with the government and other businesses, its treatment of its employees and its relationship with its customers.
                        </div>
                    </div>

                    <div class="prop-card">
                        <img src={pro8} alt="Excellence" />
                        <div>
                            <strong>Excellence:</strong> Excellence is being able to perform on customer’s expectation over and over again. Excellence is not to have a single happy customer for short term but being able to have all our customer be happy as long as we deal.
                        </div>
                    </div>

                </div>
            </section>

            <section class="testimonial-section">
                <div class="section-header">
                    <div class="tagline">
                        <img src={leaf} alt="Wheat Icon" className="icon" />
                        <span>CLIENT TESTIMONIAL</span>
                        <hr />
                    </div>
                    <h2>What Does the Customer<br />Have to Say?</h2>
                </div>
            </section>

            <section class="testimonial-cards">

                <div class="card">
                    <h3>Anono Wiliam</h3>
                    <hr />
                    <p>
                        Rice suppliers and Really very unhappy with their service scare to go overseas,
                        but I find this website when I am surfing the internet, and I am quite impressed
                        with their products and services.
                    </p>
                </div>
                <div class="card">
                    <h3>Hamis Hamza</h3>
                    <hr />
                    <p>
                        Best quality parboiled rice exporters in India. I really want to appreciate
                        their service because the packages are very perfect and strong. All the bags are
                        packed in very hygienic conditions.
                    </p>
                </div>
                <div class="card">
                    <h3>Tony Hanson</h3>
                    <hr />
                    <p>
                        Best Quality of Indian Rice is Delivered. I felt happy when I came to know that
                        these people are using the latest technologies, Machineries within India. I am
                        happy that I approach these People.
                    </p>
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
