import React from 'react'
import homeimg from "../Images/homeimg.jpg";
import recipe1 from "../Images/recipe1.webp";
import recipe2 from "../Images/recipe2.webp";
import recipe3 from "../Images/recipe3.webp";
import recipe4 from "../Images/recipe4.webp";
import recipe5 from "../Images/recipe5.webp";
import recipe6 from "../Images/recipe6.webp";
import rice3 from "../Images/rice3.webp";
import rice4 from "../Images/rice4.webp";
import rice6 from "../Images/rice6.webp";
import rice7 from "../Images/rice7.webp";
import gold from "../Images/gold.jpeg";
import leaf from "../Images/leaf.webp";
import golden from "../Images/golden.webp";


export default function Recipes() {
    return (
        <div>
            <div className="about-banner"
                style={{ backgroundImage: `url(${homeimg})` }}
            >
                <div className="overlay"></div>
                <div className="about-text">
                    <h1>Recipes</h1>
                    <p>Home / Recipes</p>
                </div>
            </div>
            <br /><br /><br /><br />


            <div class="card-container">
                <div class="card">
                    <img src={recipe1} alt="Chilli Garlic Fried Rice" />
                    <div class="card-content">
                        <h3>Chilli Garlic Fried Rice</h3>
                        <hr />
                        {/* <div class="card-footer">
                            <a href="#">Read more</a>
                            <div class="circle-arrow">➜</div>
                        </div> */}
                    </div>
                </div>

                <div class="card">
                    <img src={recipe2} alt="Lemon Rice" />
                    <div class="card-content">
                        <h3>Lemon Rice</h3>
                        <hr />
                        {/* <div class="card-footer">
                            <a href="#">Read more</a>
                            <div class="circle-arrow">➜</div>
                        </div> */}
                    </div>
                </div>

                <div class="card">
                    <img src={recipe3} alt="Jeera Rice" />
                    <div class="card-content">
                        <h3>Jeera Rice</h3>
                        <hr />
                        {/* <div class="card-footer">
                            <a href="#">Read more</a>
                            <div class="circle-arrow">➜</div>
                        </div> */}
                    </div>
                </div>

                <div class="card">
                    <img src={recipe4} alt="Veg Dum Biryani" />
                    <div class="card-content">
                        <h3>Veg Dum Biryani</h3>
                        <hr />
                        {/* <div class="card-footer">
                            <a href="#">Read more</a>
                            <div class="circle-arrow">➜</div>
                        </div> */}
                    </div>
                </div>

                <div class="card">
                    <img src={recipe5} alt="Turmeric Rice" />
                    <div class="card-content">
                        <h3>Turmeric Rice</h3>
                        <hr />
                        {/* <div class="card-footer">
                            <a href="#">Read more</a>
                            <div class="circle-arrow">➜</div>
                        </div> */}
                    </div>
                </div>

                <div class="card">
                    <img src={recipe6} alt="Corn Pulao" />
                    <div class="card-content">
                        <h3>Corn Pulao</h3>
                        <hr />
                        {/* <div class="card-footer">
                            <a href="#">Read more</a>
                            <div class="circle-arrow">➜</div>
                        </div> */}
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
