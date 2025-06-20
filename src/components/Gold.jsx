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
                    <h1>1509 Golden Basmati Rice</h1>
                    <p>Home / 1509 Golden Basmati Rice</p>
                </div>
            </div>
            <br /><br />

            <section class="rice-info">
                <div class="container">
                    <h2>1509 Golden Basmati Rice</h2>
                    <p>
                    <strong>1509 Golden Basmati Rice</strong>is a premium long-grain basmati variety known for its exquisite aroma, delicate texture, and extra-long grain size. Often considered a healthier and more flavorful alternative to traditional basmati, 1509 Golden Basmati is cherished in both home kitchens and professional kitchens worldwide.

                    </p>
                </div>
            </section>

            <section class="spec-table-section">
                <table class="spec-table">
                    <thead>
                        <tr>
                            <th colspan="2">1509 GOlden Basmati Rice Specifications</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Grain Type</td>
                            <td>Extra-long slender grains</td>
                        </tr>
                        <tr>
                            <td>Average Grain Length (Raw)</td>
                            <td>8.30 mm – 8.50 mm</td>
                        </tr>
                        <tr>
                            <td>After Cooking Length</td>
                            <td>Up to 18–20 mm (almost doubles!)</td>
                        </tr>
                        <tr>
                            <td>Texture</td>
                            <td>Non-sticky, fluffy</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Golden-hued, aromatic grains</td>
                        </tr>
                        <tr>
                            <td>Moisture Content</td>
                            <td> 12%</td>
                        </tr>
                        <tr>
                            <td>Broken Grains</td>
                            <td> 1%</td>
                        </tr>
                        <tr>
                            <td>Aroma</td>
                            <td>Signature basmati aroma</td>
                        </tr>
                        <tr>
                            <td>Shelf Life</td>
                            <td>1–2 years (stored in a cool, dry place)</td>
                        </tr>
                
                    </tbody>
                </table>
            </section>


            <section class="spec-table-section">
                <table class="spec-table">
                    <thead>
                        <tr>
                            <th colspan="2">🍚 Nutrition Value (Per 100g uncooked)</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th>Nutrient</th>
                            <th>Per 100 g (uncooked)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Energy</td>
                            <td>350-360 kcal</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>77-78 g</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>7-8 g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>0.5-0.6 g</td>
                        </tr>
                        <tr>
                            <td>Fibre</td>
                            <td>1-2 g</td>
                        </tr>
                        <tr>
                            <td>Sodium</td>
                            <td>5 mg</td>
                        </tr>
                        <tr>
                            <td>Calcium </td>
                            <td>5–10 mg</td>
                        </tr>
                        <tr>
                            <td>Iron</td>
                            <td>1–2 mg</td>
                        </tr>

                    </tbody>
                </table>
            </section>

            <div class="cooking-section">
                <section class="dish-list">
                    <h2><span class="icon">🍚</span> Popular Dishes</h2>
                    <ul>
                        <li><strong>✅Biryani</strong> </li>
                        <li><strong>✅Pulao</strong></li>
                        <li><strong>✅Fried Rice</strong></li>
                        <li><strong>✅Jeera Rice</strong></li>
                        <li><strong>✅Lemon Rice</strong></li>
                        <li><strong>✅Plain Steamed Rice</strong></li>
                    </ul>
                </section>

                <section class="cooking-method">
                    <h2><span class="icon">🍳</span> Cooking Method</h2>
                    <div class="ingredients">
                        <h3>Absorption Method:</h3>
                        <ul>
                            <li><strong>✅Rinse & Soak:</strong>  Rinse the rice 2–3 times until water runs clear. Soak for 20–30 minutes to enhance elongation during cooking.</li>
                            <li><strong>✅ Boiling Method:</strong> Use 4–5 cups of water per cup of rice. Boil and cook until rice is tender.</li>
                            <li><strong>✅ Drain & Fluff:</strong>  Drain excess water and let the rice sit covered for 5–10 minutes to absorb steam and become fluffy.</li>
                            <li><strong>✅ Steaming Method:</strong> Cook using a rice cooker or pot with a tight lid (1 part rice: 1.5–2 parts water).</li>
                            
                        </ul>
                    </div>
                </section>

                <div class="health-benefits">
                    <h2><span class="icon">💚</span> Health Benefits</h2>
                    <ul>
                        <li><span class="check">✔</span>  Low in fat and cholesterol, promoting heart health.</li>
                        <li><span class="check">✔</span>  Good source of carbohydrates for quick energy.</li>
                        <li><span class="check">✔</span> Gluten-free, suitable for gluten-sensitive individuals.</li>
                        <li><span class="check">✔</span>  Contains some essential minerals like iron and magnesium</li>
                        <li><span class="check">✔</span>Easily digestible and light on the stomach.</li>
                    </ul>
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

            <br /><br />

        </div>
    )
}
