
import React from 'react'
import homeimg from "../Images/homeimg.jpg";
import gallery1 from '../Images/gallery1.webp';
import gallery2 from '../Images/gallery2.webp';
import gallery3 from '../Images/gallery3.webp';
import gallery4 from '../Images/gallery4.webp';
import gallery5 from '../Images/gallery5.webp';
import gallery6 from '../Images/gallery6.webp';
import gallery7 from '../Images/gallery7.webp';
import gallery8 from '../Images/gallery8.webp';
import gallery9 from '../Images/gallery9.webp';
import rice3 from "../Images/rice3.webp";
import rice4 from "../Images/rice4.webp";
import rice6 from "../Images/rice6.webp";
import rice7 from "../Images/rice7.webp";
import gold from "../Images/gold.jpeg";
import leaf from "../Images/leaf.webp";
import golden from "../Images/golden.webp";

export default function Gallery() {

    return (
        <div>
            <div className="about-banner"
                style={{ backgroundImage: `url(${homeimg})` }}
            >
                <div className="overlay"></div>
                <div className="about-text">
                    <h1>Gallery</h1>
                    <p>Home / Gallery</p>
                </div>
            </div>
            <br /><br /><br /><br />
            <div class="gallery-grid">
                <div class="gallery-item">
                    <img src={gallery1} alt="Gallery 1" />
                </div>
                <div class="gallery-item">
                    <img src={gallery2} alt="Gallery 2" />
                </div>
                <div class="gallery-item">
                    <img src={gallery3} alt="Gallery 3" />
                </div>
                <div class="gallery-item">
                    <img src={gallery4} alt="Gallery 4" />
                </div>
                <div class="gallery-item">
                    <img src={gallery5} alt="Gallery 5" />
                </div>
                <div class="gallery-item">
                    <img src={gallery6} alt="Gallery 6" />
                </div>
                <div class="gallery-item">
                    <img src={gallery7} alt="Gallery 7" />
                </div>
                <div class="gallery-item">
                    <img src={gallery8} alt="Gallery 8" />
                </div>
                <div class="gallery-item">
                    <img src={gallery9} alt="Gallery 9" />
                </div>
            </div>


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

