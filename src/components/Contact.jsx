import React from 'react'
import homeimg from "../Images/homeimg.webp";
import rice3 from "../Images/rice3.webp";
import rice4 from "../Images/rice4.webp";
import rice5 from "../Images/rice5.webp";
import rice6 from "../Images/rice6.webp";
import rice7 from "../Images/rice7.webp";
import gold from "../Images/gold.jpeg";
import leaf from "../Images/leaf.webp";
import golden from "../Images/golden.webp";


export default function Contact() {
  return (
    <div>
      <div
        className="about-banner"
        style={{ backgroundImage: `url(${homeimg})` }}
      >
        <div className="overlay"></div>
        <div className="about-text">
          <h1>Contact Us</h1>
          <p>Home / Contact</p>
        </div>
      </div>
      <br /><br /><br />
      <br /><br /><br />

        <div className="contact-info-box">
        <h4 className="subtitle">🌾 GET IN TOUCH</h4>
        <h1 className="heading">For Rice<br />Requirements</h1>

        {/* Phone Contact */}
        <div className="contact-detail">
          <div className="icon-circle">📞</div>
          <div>
            <p className="label">Hemant</p>
            <p className="phone-number">+91 93288 99372</p>
            <a href="tel:+919328899372" className="contact-link">
              👉 Tap to Call
            </a>
          </div>
        </div>

        {/* Office Address */}
        <div className="contact-detail">
          <div className="icon-circle">📍</div>
          <div>
            <p className="label">Our Office</p>
            <p className="address">
              OPP PRANJAL RESIDENCY, 30 SHASWAT BLIZ,<br />
              KARAMSADSANDESAR ROAD, KARAMSAD,<br />
              Anand, Gujarat, 388325
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=OPP+PRANJAL+RESIDENCY,+30+SHASWAT+BLIZ,+KARAMSADSANDESAR+ROAD,+KARAMSAD,+Anand,+Gujarat,+388325"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link" >
              📍 Tap to Open in Maps
            </a>
          </div>
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
