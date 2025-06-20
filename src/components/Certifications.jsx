import React, { useState } from 'react';
import homeimg from "../Images/homeimg.jpg";
import certi1 from "../Images/certi1.webp";
import certi2 from "../Images/certi2.webp";
import certi3 from "../Images/certi3.webp";
import certi4 from "../Images/certi4.webp";
import certi5 from "../Images/certi5.webp";
import certi6 from "../Images/certi6.webp";
import rice3 from "../Images/rice3.webp";
import rice4 from "../Images/rice4.webp";
import rice6 from "../Images/rice6.webp";
import rice7 from "../Images/rice7.webp";
import gold from "../Images/gold.jpeg";
import leaf from "../Images/leaf.webp";
import golden from "../Images/golden.webp";

export default function Certifications() {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (imgSrc) => {
        setModalImage(imgSrc);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div>
            <div
                className="about-banner"
                style={{ backgroundImage: `url(${homeimg})` }}
            >
                <div className="overlay"></div>
                <div className="about-text">
                    <h1>Certifications</h1>
                    <p>Home / Certifications</p>
                </div>
            </div>

            <br /><br /><br /><br />

            {/* Certifications Section */}
            <section className="certificate-section">
                <div className="certificate-grid">
                    <div className="certificate-card" onClick={() => openModal(certi1)}>
                        <img src={certi1} alt="EXPORTER" loading="lazy" />
                        <p>EPORTER</p>
                    </div>
                    <div className="certificate-card" onClick={() => openModal(certi2)}>
                        <img src={certi2} alt="UDHYAM" loading="lazy" />
                        <p>UDHYAM REGISTRATION</p>
                    </div>
                    <div className="certificate-card" onClick={() => openModal(certi3)}>
                        <img src={certi3} alt="------" loading="lazy" />
                        <p>GST</p>
                    </div>
                     <div className="certificate-card" onClick={() => openModal(certi4)}>
                        <img src={certi4} alt="------" loading="lazy" />
                        <p>APEDA</p>
                    </div>
                     <div className="certificate-card" onClick={() => openModal(certi5)}>
                        <img src={certi5} alt="------" loading="lazy" />
                        <p>RCMC</p>
                    </div>
                     <div className="certificate-card" onClick={() => openModal(certi6)}>
                        <img src={certi6} alt="------" loading="lazy" />
                        <p>MSME</p>
                    </div>
                </div>
            </section>

            {/* Modal Popup */}
            {modalImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img src={modalImage} alt="Certificate" />
                        <button onClick={closeModal} className="close-button">×</button>
                    </div>
                </div>
            )}

            {/* Products Section */}
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
    );
}
