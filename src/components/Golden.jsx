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
                    <h1>1121 Golden Basmati Rice</h1>
                    <p>Home / 1121 Golden Basmati Rice</p>
                </div>
            </div>
            <br /><br />

            <section class="rice-info">
                <div class="container">
                    <h2>1121 Golden Basmati Rice: Introduction</h2>
                    <p>
                        1121 Golden Basmati Rice is a premium long-grain basmati rice variety, known for its exceptional length, delicate aroma, and golden sheen. It is famous for its slender, elongated grains that expand significantly after cooking. This rice is cultivated in the fertile regions of the Indian subcontinent, offering a rich, nutty flavor and an impressive presentation, making it ideal for gourmet dishes and special occasions.

                    </p>
                </div>
            </section>

            <section class="spec-table-section">
                <table class="spec-table">
                    <thead>
                        <tr>
                            <th colspan="2">1121 Golden Basmati Rice Specifications</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Grain Type</td>
                            <td>Extra-long, slender grains</td>
                        </tr>
                        <tr>
                            <td>Grain Length (Before)</td>
                            <td>8.30 mm and above</td>
                        </tr>
                        <tr>
                            <td>Grain Length (After)</td>
                            <td>18-24 mm (average)</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Golden-hued, translucent</td>
                        </tr>
                        <tr>
                            <td>Aroma</td>
                            <td>Sweet, aromatic fragrance</td>
                        </tr>
                        <tr>
                            <td>Texture (Cooked)</td>
                            <td>Fluffy, non-sticky, separate grains</td>
                        </tr>
                        <tr>
                            <td>Moisture Content</td>
                            <td>≤ 13%</td>
                        </tr>
                        <tr>
                            <td>Broken Grains</td>
                            <td>≤ 1%</td>
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
                            <td>360 kcal</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>8 g</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>78-80 g</td>
                        </tr>
                        <tr>
                            <td>sugars</td>
                            <td>1 g</td>
                        </tr>
                        <tr>
                            <td>Dietary Fibre</td>
                            <td>1-2 g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>0.5-1 g</td>
                        </tr>
                        <tr>
                            <td>Sodium</td>
                            <td>1-2 mg</td>
                        </tr>
                        <tr>
                            <td>Iron</td>
                            <td>1-2 g</td>
                        </tr>
                        <tr>
                            <td>Calcium</td>
                            <td>10-15 mg</td>
                        </tr>

                    </tbody>
                </table>
            </section>

            <div class="cooking-section">
                <section class="dish-list">
                    <h2><span class="icon">🍚</span> Popular Dishes</h2>
                    <ul>
                        <li><strong>Biryani:</strong> (Chicken, mutton, or veg)</li>
                        <li><strong>Pulao:</strong> (vegetables, Peas, Jeera )</li>
                        <li><strong>Jeera Rice:</strong> </li>
                        <li><strong>Fried Rice:</strong> </li>
                        <li><strong>Kheer (Rice Pudding)</strong></li>
                        <li><strong> Zafrani Pulao (Saffron Rice)</strong></li>
                        <li><strong>Lemon Rice</strong> </li>

                    </ul>
                </section>

                <section class="cooking-method">
                    <h2><span class="icon">🍳</span> Cooking Method</h2>
                    <div class="ingredients">
                        <h3>Absorption Method:</h3>
                        <ul>
                            <li><strong>Rinse:</strong> Wash rice 2-3 times to remove excess starch.</li>
                            <li><strong>Soak:</strong> Soak rice in water for 20-30 minutes for better elongation.</li>
                            <li><strong>Boil:</strong> Use 1.5 to 2 cups of water per 1 cup of rice.</li>
                            <li><strong>Cook:</strong>  Bring to a boil, then cover and simmer on low heat for 10-12 minutes.</li>
                            <li><strong>Rest:</strong>  1.Let it sit for 5 minutes after cooking, then fluff with a fork.</li>
                        </ul>
                    </div>
                </section>

                <div class="health-benefits">
                    <h2><span class="icon">💚</span> Health Benefits</h2>
                    <ul>
                        <li><span class="check">✔</span> <strong>Gluten-free</strong> – Ideal for people with gluten sensitivity or celiac disease.</li>
                        <li><span class="check">✔</span> <strong>Low in fat & Sodium</strong> – Promotes heart health.</li>
                        <li><span class="check">✔</span> <strong> Complex Carbohydrates</strong> –  Sustained energy release</li>
                        <li><span class="check">✔</span> <strong>Good Source of Fibe</strong> – Aids digestion and supports gut health.</li>
                        <li><span class="check">✔</span> <strong>Rich in Aromatic Compounds</strong> – Provides mental satisfaction and culinary pleasure.</li>
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
