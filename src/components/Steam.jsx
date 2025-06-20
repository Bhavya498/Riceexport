import React from 'react'
import homeimg from "../Images/homeimg.jpg";
import steam from "../Images/steam.webp";
import sella from "../Images/sella.webp";
import golden from "../Images/golden.webp";
import leaf from "../Images/leaf.webp";
import rice3 from "../Images/rice3.webp";
import rice4 from "../Images/rice4.webp";
import rice6 from "../Images/rice6.webp";
import rice7 from "../Images/rice7.webp";
import gold from "../Images/gold.jpeg";

export default function Basmati() {
    return (
        <div>
            <div
                className="about-banner"
                style={{ backgroundImage: `url(${homeimg})` }}
            >
                <div className="overlay"></div>
                <div className="about-text">
                    <h1>1509 Steam Basmati Rice</h1>
                    <p>Home / 1509 Steam Basmati Rice</p>
                </div>
            </div>
            <br /><br />

            <section class="rice-info">
                <div class="container">
                    <h2> 1509 Steam Basmati Rice: A Premium Choice for Every Kitchen</h2>
                    <p>
                        1509 Steam Basmati Rice is a premium variety of long-grain rice known for its exceptional aroma, slender grains, and delightful taste. It’s a newer variant of traditional basmati rice, offering quick cooking and superior fluffiness, making it perfect for both home cooks and professional chefs.

                    </p>
                </div>
            </section>

            <section class="spec-table-section">
                <table class="spec-table">
                    <thead>
                        <tr>
                            <th colspan="2">1509 Steam Basmati Rice Specifications</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Variety </td>
                            <td>Basmati (Steam)</td>
                        </tr>
                        <tr>
                            <td>Standard</td>
                            <td>European Standard 1509</td>
                        </tr>
                        <tr>
                            <td>Grain Length (uncooked)</td>
                            <td>7.4 mm minimum (average)</td>
                        </tr>
                        <tr>
                            <td>Moisture</td>
                            <td>Max 12%</td>
                        </tr>
                        <tr>
                            <td>Broken Grains</td>
                            <td>Max 2%</td>
                        </tr>
                        <tr>
                            <td>Foreign Matter</td>
                            <td>Max 0.5%</td>
                        </tr>
                        <tr>
                            <td>Chalky Grains</td>
                            <td>Max 2%</td>
                        </tr>
                        <tr>
                            <td>Damaged / Discolored</td>
                            <td>Max 1%</td>
                        </tr>
                        <tr>
                            <td>Milling Degree</td>
                            <td>Well-milled and well-polished</td>
                        </tr>
                        <tr>
                            <td>Purity</td>
                            <td>95% minimum</td>
                        </tr>
                        <tr>
                            <td>Aroma</td>
                            <td>Distinctive Basmati aroma</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>White or creamy, depending on polish</td>
                        </tr>
                        <tr>
                            <td>Whiteness</td>
                            <td>Min 38 Kett whiteness scale (or equivalent)</td>
                        </tr>
                        <tr>
                            <td>Crop Year</td>
                            <td>Current / Latest</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section class="spec-table-section">
                <table class="spec-table">
                    <thead>
                        <tr>
                            <th colspan="2">🍚 Nutrition Value (Per 100g)</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th>Nutrient</th>
                            <th>Per 100 g </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Energy</td>
                            <td>350-360kcal</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>78-80 g</td>
                        </tr>
                        <tr>
                            <td>sugars</td>
                            <td>0-0.5 g</td>
                        </tr>
                        <tr>
                            <td>Dietary Fibre</td>
                            <td>1-2 g</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>7-9 g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>0.5-1 g</td>
                        </tr>
                        <tr>    
                            <td>saturated Fat</td>
                            <td>0.1-0.3 g</td>
                        </tr>
                        <tr>
                            <td>Sodium</td>
                            <td>0-5 mg</td>
                        </tr>
                        <tr>
                            <td>Iron</td>
                            <td>0.5-1 mg</td>
                        </tr>
                        <tr>
                            <td>Calcium</td>
                            <td>5-10 mg</td>
                        </tr>
                         <tr>
                            <td>Potassium</td>
                            <td>50-70 mg</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <div class="cooking-section">
                <section class="dish-list">
                    <h2><span class="icon">🍚</span> Popular Dishes</h2>
                    <h6> 1509 Steam Basmati Rice is versatile and can be used in a wide range of dishes:</h6>
                    <ul>
                        <li><strong>Biryani:</strong> (Chicken, mutton, or veg)</li>
                        <li><strong>Pulao:</strong></li>
                        <li><strong>Jeera Rice:</strong></li>
                        <li><strong>Fried Rice:</strong></li>
                        <li><strong>Kheer:</strong></li>
                        <li><strong>Lemon Rice:</strong></li>
                        <li><strong>Rice Bowls and Buddha Bowls</strong></li>
                        <li><strong>Stuffed Peppers with Rice</strong></li>
                        <li><strong>Rice Salads</strong></li>
                    </ul>
                </section>

                <section class="cooking-method">
                    <h2><span class="icon">🍳</span> Cooking Method</h2>
                    <p>Here’s a standard method to cook <strong>1509 Steam Basmati Rice</strong>:</p>
                    <div class="steps">
                        <h3>Steps</h3>
                        <ol>
                            <li><strong>Rinse:</strong> Wash 1 cup of rice in cold water until the water runs clear.</li>
                            <li><strong>Soak:</strong>  Soak for 15–20 minutes to enhance grain length.</li>
                            <li><strong>Boil:</strong> 1. Bring 4 cups of water to a boil. Add soaked rice and a pinch of salt.</li>
                            <li><strong>Simmer:</strong> 1.Cover and cook on low flame for 10–12 minutes or until the rice is tender.</li>
                            <li><strong>Drain & Fluff :</strong> Drain excess water if any, fluff gently with a fork, and let it rest for a few minutes</li>
                        </ol>
                    </div>
                </section>
            {/* <br/> */}

            <div class="health-benefits">
                <h2><span class="icon">🩺</span> Health Benefits</h2>
                <ul>
                    <li><span class="check">☑</span> <strong>Low in Fat:</strong>  Naturally low in fat and cholesterol, making it heart-friendly.</li>
                    <li><span class="check">☑</span> <strong>Good Source of Carbohydrates:</strong>Provides energy for daily activities.</li>
                    <li><span class="check">☑</span> <strong>Gluten-Free:</strong>Suitable for gluten-intolerant individuals.</li>
                    <li><span class="check">☑</span> <strong>Rich in Essential Nutrients:</strong> Contains vitamins and minerals for overall health.</li>
                    <li><span class="check">☑</span> <strong>Promotes Satiety:</strong> Keeps you full longer, aiding in weight management.</li>
                    <li><span class="check">☑</span> <strong>Easily Digestible:</strong>  Gentle on the stomach and great for people of all ages.</li>

                </ul>
            </div>
            </div>
            <br/>

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
                         </section><br />


     </div>
    )
}
