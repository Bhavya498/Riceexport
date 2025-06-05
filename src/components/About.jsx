import React from 'react'
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

            <section className="who-we-are">
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
                            <i className="fas fa-seedling"></i> WELCOME TO AARUSH FOOD GRAINS PVT. LIMITED
                        </p>
                        <h2>Who We Are</h2>
                    </div>
                    <p className="description">
                        Aarush Food Grain Pvt. Ltd. is one of the leading Miller, Processor and Exporter of Basmati and Non-Basmati Rice i.e., 1121 Basmati, Pusa Basmati, 1509 Basmati, Traditional Basmati, 1401 Basmati, Sugandha, Sharbati, PR11/14, Parmal Rice varieties having two Rice Milling & Processing units, one in Pakhana, Dist. Karnal, Haryana, India. Our Quality meets the customer’s needs & expectations. We are focused towards customer satisfaction from the beginning.
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
                    As we are known as the Basmati rice manufacturer and exporter in India, the mill is best equipped for hygienic rice warehouses.
                    As we are certified with <strong>ISO 9001:2015, ISO 22000:2018, HACCP, GMP, HALAL, KOSHER, FSSAI, REX, and USFDA</strong> we provide
                    advanced processing, quality control, packaging, and warehouse needs which capable to accomplish the requirements of clients worldwide.
                    We have a final production capacity of <strong>200 MT per day/ 5000 MT per month</strong> from 03 automatic production units and have amazing
                    storage facilities of <strong>25,000 MT</strong>. The capacity of the storage unit helps us to stock rice with hygienic conditions and helps us
                    to complete targets while prioritizing timely deliverables.
                </p>

                <div className="circle-divider"></div>

                <p>
                    Our aim is to satisfy our clients with the finest quality of each grain with the best services to meet international standards.
                    Internationally also we are appreciated for our superfine kernels, high quality, freshness, and longer shelf life rice also with amazing
                    volumes in terms of purity, flavor, delectable taste & refreshing aroma. Also, we are exporting the finest Indian rice to
                    <strong> Europe, the USA, Canada, Saudi Arabia, Iraq, Erbil, Israel, Lebanon, Jordan, Yemen, Australia, Kuwait, Oman, Bahrain, Egypt, Turkey, Libya, Syria, Kyrgyzstan, Belarus</strong> & many more.
                </p>
            </div>

            <div className="table-container">
                <table className="info-table">
                    <tbody>
                        <tr>
                            <th>Nature of Business</th>
                            <td>Manufacturer, Processor & Exporter</td>
                        </tr>
                        <tr>
                            <th>Year of Establishment</th>
                            <td>1998</td>
                        </tr>
                        <tr>
                            <th>Products</th>
                            <td>Basmati & Non Basmati Rice</td>
                        </tr>
                        <tr>
                            <th>Factory Address</th>
                            <td>
                                Galib kheri road, village pakhana, taraori district karnal, haryana, India. Pin:- 132116
                            </td>
                        </tr>
                        <tr>
                            <th>Production Line</th>
                            <td>03 (Automatic)</td>
                        </tr>
                        <tr>
                            <th>Production Capacity</th>
                            <td>4000 Metric Tons Monthly</td>
                        </tr>
                        <tr>
                            <th>No. of Warehouse</th>
                            <td>04</td>
                        </tr>
                        <tr>
                            <th>Warehouse Capacity</th>
                            <td>25000 Metric Tons</td>
                        </tr>
                        <tr>
                            <th>Annual Turnover</th>
                            <td>140 Crore USD Approx.</td>
                        </tr>
                        <tr>
                            <th>Export Percentage</th>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <th>Main Overseas Market</th>
                            <td>
                                Egypt, KSA, USA, Europe, Iraq, Greece, Germany, Jordan, Malaysia, Turkey, Oman, Qatar, Kuwait
                            </td>
                        </tr>
                        <tr>
                            <th>Nearest Port</th>
                            <td>Mundra Port, Gujarat (India)</td>
                        </tr>
                        <tr>
                            <th>Ownership Type</th>
                            <td>Director Firm</td>
                        </tr>
                        <tr>
                            <th>PAN</th>
                            <td>AAUCA2641N</td>
                        </tr>
                        <tr>
                            <th>TAN</th>
                            <td>	RTKA18280D</td>
                        </tr>
                        <tr>
                            <th>IEC</th>
                            <td>AAUCA2641N</td>
                        </tr>
                        <tr>
                            <th>RCMC NO</th>
                            <td>213998</td>
                        </tr>
                        <tr>
                            <th>GSTIN</th>
                            <td>	06AAUCA2641N1Z8</td>
                        </tr>
                        <tr>
                            <th>USFDA No.</th>
                            <td>13740288114</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="table-container">
                <h2 className="table-heading">Payment, Loading & Delivery Conditions</h2>
                <table className="info-table">
                    <tbody>
                        <tr>
                            <th>Payment Condition</th>
                            <td>30% Advance & balance on loading (FOR).</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>30% Advance & balance on delivery at Indian Port (FOB)</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>30% Advance & balance against documents (CIF).</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>100% at sight LC from prime international bank (CIF).</td>
                        </tr>

                        <tr>
                            <th>Loading Condition</th>
                            <td>Truckload</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>Container (Factory Stuffing)</td>
                        </tr>

                        <tr>
                            <th>Delivery Condition</th>
                            <td>FOR</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>FOB</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>CIF</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
