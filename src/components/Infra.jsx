import React from 'react'
import homeimg from "../Images/homeimg.webp";
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

            <section class="infrastructure">
                <h2 class="section-title">Our Infrastructure</h2>

                <div class="infra-container">
                    <div class="infra-content">
                        <p>
                            As we know Infrastructure is the backbone of economic growth which improves excess of basic services to boost the business.
                            Our primary aim is to satisfy customers with our deliverables and services so that they can serve a plate with the most aromatic and quality rice.
                            Our mill is equipped with the largest machinery and technology imported from Japan and the UK, which involves rice milling, processing, and packaging.
                        </p>

                        <h3>Procurement Process</h3>
                        <p>
                            Carrying the document, Evidence of Weighing, Quality Check Results Sheet, and Payment Order are the important aspects of the export.
                            This process requires a lot of understanding and a database of rich markets.
                            For quality assurance, we associated with intermediates i.e. Kaccha Aarti, and a chain of farmers.
                            This intermediate helps us to procure high and premium quality rice.
                        </p>
                    </div>

                    <div class="infra-image-box">
                        <div class="tag-yellow">100%<br />Pure Organic Rice</div>
                        <img src={infrastructure} alt="Mill" class="main-image" />
                        <div class="tag-blue">Indian<br />Basmati Rice</div>
                    </div>
                </div>
            </section>

            <section class="process-section">
                <div class="process-block">
                    <h3>Processing And Milling</h3>
                    <p>
                        Our rice mills are a stage of art and to attain the desired quality of rice we need to use pre-cleaners, de-huskers, polishers, sortex, silky, rice bins, and magnets to completely protect the food. And this process leads against contamination and other impurities during the food process of milling. The natural form of rice is inedible, hence there are several operations that need to be done for the final product.
                    </p>
                </div>

                <div class="process-block">
                    <h3>Drying Of The Rice At Drying Plant</h3>
                    <p>
                        Our company has installed a unique fully automatic and mechanized sensor-based temperature-controlled drying system with metric tonnes per hour drying capacity which ensures the consistency and uniform drying of paddy without breakage of grains while processing. Our technology avoids fungal, and bacterial infections, fermentations, and retaining of the natural aroma.
                    </p>
                </div>

                <div class="process-block">
                    <h3>Parboiling</h3>
                    <p>
                        To maintain and preserve the natural fragrance and aroma of the grains during the whole process we need to do Parboiling. The grains become free from unwanted smells and are hygienic. It’s steam for removal of the Hull and Barn layer. In this process paddy is kept for soaking for 12hrs in water and in every 4 hours needs to change water for no bacterial formation, thus ensuring the best hygienic and parboiled rice always. These steps ensure 100% quality of rice for the end user. Maintaining the temperature is an essential and crucial step as normal water hampers the taste and aroma of grains.
                    </p>
                </div>

                <div class="process-block">
                    <h3>Milling</h3>
                    <p>
                        Milling is the last and final step of the overall procedure. Our professional team of employees ensures 100% quality control, right from the procurement of paddy, milling, parboiling, the cleaning process, packaging, and logistics. The only aim of our company is to provide the best service and highly nutritious rice with exceptional quality and aroma as our company is upgrading the working system every year.
                    </p>
                </div>
            </section>

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
