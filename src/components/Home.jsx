import React from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import homeimg from "../Images/homeimg.webp";
import rice1 from "../Images/rice1.webp";
import rice2 from "../Images/rice2.webp";
import rice3 from "../Images/rice3.webp";
import rice4 from "../Images/rice4.webp";
import rice6 from "../Images/rice6.webp";
import rice7 from "../Images/rice7.webp";
import gold from "../Images/gold.jpeg";
import rice16 from "../Images/rice16.webp";
import rice17 from "../Images/rice17.webp";
import rice18 from "../Images/rice18.webp";
import rice19 from "../Images/rice19.webp";
import rice20 from "../Images/rice20.webp";
import rice21 from "../Images/rice21.webp";
import rice22 from "../Images/rice22.webp";
import golden from "../Images/golden.jpg";
import leaf from "../Images/leaf.webp";
import machine from "../Images/machine.webp";
import food from "../Images/food.webp";
import food2 from "../Images/food2.webp";
import food3 from "../Images/food3.webp";
import apple from "../Images/apple.png";
import corn from "../Images/corn.png";
import milk from "../Images/milk.png";


const Home = () => {
  return (
    <>
      <section
        className="home"
        style={{ backgroundImage: `url(${homeimg})` }}
      >
        {/* Overlay for better text readability */}
        <div className="overlay"></div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://wa.me/919328899372" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:hemant@hemantexport.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+919328899372" aria-label="Phone">
            <i className="fas fa-phone-alt"></i>
          </a>
          <a href="mailto:yourmail@example.com?subject=Inquiry&body=Hi, I would like to know more..." aria-label="Send">
            <i className="fas fa-paper-plane"></i>
          </a>
        </div>

        {/* Home Content */}
        <div className="home-content">
          <h1>Experience the Heritage of<br /><span>Basmati Rice</span></h1>
          <a href="/contact" className="contact-btn">CONTACT US</a>
        </div>
      </section>


      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">
            <img src={apple} alt="Grain Quality" />
          </div>
          <h3>Grain Quality</h3>
          <p>
           Our rice is carefully sourced from selected farms in Northern India.
            A modern and controlled manufacturing process ensures consistently high 
            grain quality, meeting stringent European/US standards.
          </p>
          {/* <a href="#" className="read-more">Read More</a> */}
          <span className="card-number">01</span>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <img src={corn} alt="Grain Variety" />
          </div>
          <h3>Grain Variety</h3>
          <p>
            We offer a diverse range of rice varieties to meet the preferences of 
            different consumers and to suit a wide array of culinary applications
          </p>
          {/* <a href="#" className="read-more">Read More</a> */}
          <span className="card-number">02</span>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <img src={milk} alt="Health Benefits" />
          </div>
          <h3>Health Benefits</h3>
          <p>
            Rice, a staple food in North India, is energy-rich,
            highly nutritious, and enriched with essential vitamins.
          </p>
          {/* <a href="#" className="read-more">Read More</a> */}
          <span className="card-number">03</span>
        </div>
      </section>

      <div className="invest-banner">
        <div className="invest-text">
          The best way to be ready for future is to invest in it
        </div>


        <a href="tel:+919328899372" className="contact-link">
          <FaPhoneAlt /> +91 9328899372
        </a>
      </div>

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
              <h3 className="text-white">Excellent</h3>
              <p>Quality</p>
            </div>
          </div>
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


      <section class="testimonial-banner">
        <div class="banner-text">
          <span>Basmati Rice Manufacturer, Supplier, Exporter in India</span>
          <a href="/">
            <button class="view-more-btn">VIEW MORE</button>
          </a>
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

      <section class="timeline-section">
        <div class="timeline-container">
          <div class="timeline-card">
            <img src={rice16} alt="Rice Procurement" class="card-img" />
            <div class="card-content">
              <h3>Rice Procurement</h3>
              <p>We procure rice from farmers and various rice mandis including All India and Country.</p>
            </div>
          </div>

          <div class="timeline-card">
            <img src={rice17} alt="Rice Ageing" class="card-img" />
            <div class="card-content">
              <h3>Rice Ageing</h3>
              <p>After procurement, the rice is aged in our warehouses as per the requirement.</p>
            </div>
          </div>

          <div class="timeline-card">
            <img src={rice18} alt="Rice Cleaning" class="card-img" />
            <div class="card-content">
              <h3>Rice Cleaning</h3>
              <p>The rice is cleaned by undergoing various processes like de-stoning.</p>
            </div>
          </div>

          <div class="timeline-card">
            <img src={rice19} alt="Rice Silky & Polish" class="card-img" />
            <div class="card-content">
              <h3>Rice Silky & Polish</h3>
              <p>The rice is polished by spraying water through the rice chamber.</p>
            </div>
          </div>

          <div class="timeline-card">
            <img src={rice20} alt="Colour Sorter" class="card-img" />
            <div class="card-content">
              <h3>Colour Sorter</h3>
              <p>The impurities & discoloured and broken grains are sorted and separated.</p>
            </div>
          </div>

          <div class="timeline-card">
            <img src={rice21} alt="Grading" class="card-img" />
            <div class="card-content">
              <h3>Grading</h3>
              <p>After going through the sorter, rice is graded in various compartments on the basis of its length.</p>
            </div>
          </div>
        </div>
      </section>

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
          <h2 className="main-heading">Infrastructure</h2>
        </div>
      </section>

      <section className="infrastructure">
        <div className="content">
          <div className="left">
            <h4>Latest & Proven Technology</h4>
            <p>
              Our manufacturing unit is equipped with ultra-modern Machinery including Automated Dryers,
              Pre cleaners, Destoners, Precision-Sizers, Paddy Separators, De-Huskers, etc. The plant and its
              machinery are set up by Satake-Japan which is a world leader in grain processing systems
            </p>
            <p>
              producing a comprehensive range of individual machines, integrated systems, and totally engineered
              solutions for the processing of rice.
            </p>
            <h4>Processing And Milling</h4>
            <p>
              If you are a manufacturer of export products, as a merchant exporters, we help you market your products across the globe. We assist you spread your product / brand across various geographies, by being your global representative for your products. Let us know and we will help you grow your business internationally. We work with our suppliers as “partners in progress” and help them scale-up their businesses globally.

            </p>
          </div>
          <div className="right">
            <div className="image-arch">
              <img src={machine} alt="Processing" />
              <div className="year-label">
                <h3>2005</h3>
                <p>Existence<br />Since</p>
              </div>
            </div>
          </div>
        </div>
      </section><br /><br />

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



      <div className="latest-news-container">
        <div className="latest-news-subtitle">
          <span className="icon-circle">🌾</span>
          <span className="text">Latest News Post</span>
        </div>
        <h1 className="latest-news-title">Read More Our Latest<br />Articles Post</h1>
      </div>

      <section class="blog-section">
        <div class="blog-card">
          <div class="image-container">
            <img src={food} alt="Rice" />
            {/* <span class="date-badge">25 Jun</span> */}
          </div>
          <div class="card-content">
            <p class="admin"><i class="fa fa-user"></i> By Admin</p>
            <h3 class="title">Basmati Rice for Weight Loss: Does It Help?</h3>
            {/* <div class="read-more">
              <span>Read more</span>
              <div class="circle-btn">&#8594;</div>
            </div> */}
          </div>
        </div>

        <div class="blog-card">
          <div class="image-container">
            <img src={food3} alt="Rice Bowl" />
            {/* <span class="date-badge">25 Jun</span> */}
          </div>
          <div class="card-content">
            <p class="admin"><i class="fa fa-user"></i> By Admin</p>
            <h3 class="title">Organic Basmati Rice Manufacturer In India.</h3>
            {/* <div class="read-more">
              <span>Read more</span>
              <div class="circle-btn">&#8595;</div>
            </div> */}
          </div>
        </div>

        <div class="blog-card">
          <div class="image-container">
            <img src={food2} alt="Rice Export" />
            {/* <span class="date-badge">25 Jun</span> */}
          </div>
          <div class="card-content">
            <p class="admin"><i class="fa fa-user"></i> By Admin</p>
            <h3 class="title">Export Of Premium Rice From India To USA</h3>
            {/* <div class="read-more">
              <span>Read more</span>
              <div class="circle-btn">&#8595;</div>
            </div> */}
          </div>
        </div>
      </section><br /><br />

    </>


  );
};

export default Home;
