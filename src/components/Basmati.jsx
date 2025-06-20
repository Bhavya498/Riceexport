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
                    <h1>1121 Basmati Rice</h1>
                    <p>Home / 1121 Basmati Rice</p>
                </div>
            </div>
            <br /><br />

            <section class="rice-info">
                <div class="container">
                    <h2>1121 Basmati Rice: Small Introduction</h2>
                    <p>
                        1121 Steam Basmati Rice is a premium-quality, long-grain rice variety known for its exquisite aroma, delicate texture, and extra-long slender grains that elongate beautifully upon cooking. Grown mainly in the fertile regions of India and Pakistan, it undergoes a special steaming process that preserves its natural nutrients and enhances its cooking performance. This rice is especially popular in international markets for its consistent quality and superior taste.
                    </p>
                </div>
            </section>

            <section class="spec-table-section">
                <table class="spec-table">
                    <thead>
                        <tr>
                            <th colspan="2">1121 Basmati Rice Specifications</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Grain Type</td>
                            <td>Long-grain Basmati rice</td>
                        </tr>
                        <tr>
                            <td>Variety </td>
                            <td>1121 Steam Basmati</td>
                        </tr>
                        <tr>
                            <td>Grain Length</td>
                            <td>8.30 mm minimum (before cooking)</td>
                        </tr>
                        <tr>
                            <td>Moisture Content</td>
                            <td>12% maximum</td>
                        </tr>
                        <tr>
                            <td>Broken Grains</td>
                            <td>1% maximum</td>
                        </tr>
                        <tr>
                            <td>Foreign Matter</td>
                            <td>0.5% maximum</td>
                        </tr>
                        <tr>
                            <td>Chalky Grains</td>
                            <td>1.5% maximum</td>
                        </tr>
                        <tr>
                            <td>Damaged / Discolored</td>
                            <td>1% maximum</td>
                        </tr>
                        <tr>
                            <td>Red & Red Streaked</td>
                            <td>Nil</td>
                        </tr>
                        <tr>
                            <td>Average Kernel Width</td>
                            <td>1.50–1.60 mm</td>
                        </tr>
                        <tr>
                            <td>Whiteness (Kett Whiteness)</td>
                            <td>35–40 minimum</td>
                        </tr>
                        <tr>
                            <td>Milling Grade</td>
                            <td>Well-milled and double-polished</td>
                        </tr>
                        <tr>
                            <td>Aroma</td>
                            <td>Distinctive Basmati aroma</td>
                        </tr>
                        <tr>
                            <td>Cooking Time</td>
                            <td>12–15 minutes</td>
                        </tr>
                        <tr>
                            <td>Origin</td>
                            <td>India/Pakistan (as per EU standards)</td>
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
                            <td>350 kcal (approx.)</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>77 g</td>
                        </tr>
                        <tr>
                            <td>– of which sugars</td>
                            <td>0 g</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>8 g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>0.5 g</td>
                        </tr>
                        <tr>
                            <td>– of which saturates</td>
                            <td>0.1 g</td>
                        </tr>
                        <tr>
                            <td>Fibre</td>
                            <td>1 g</td>
                        </tr>
                        <tr>
                            <td>Sodium</td>
                            <td>0 mg</td>
                        </tr>
                        <tr>
                            <td>Calcium</td>
                            <td>10 mg</td>
                        </tr>
                        <tr>
                            <td>Iron</td>
                            <td>1 mg</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <div class="cooking-section">
                <section class="dish-list">
                    <h2><span class="icon">🍚</span> Popular Dishes</h2>
                    <ul>
                        <li><strong>Biryani:</strong> Chicken, mutton, or vegetable biryani featuring fragrant, fluffy rice grains.</li>
                        <li><strong>Pulao:</strong> Aromatic rice cooked with mild spices and vegetables.</li>
                        <li><strong>Jeera Rice:</strong> Rice with cumin seeds, simple and flavorful.</li>
                        <li><strong>Fried Rice:</strong> Lightly stir-fried with vegetables or meats.</li>
                        <li><strong>Plain Steamed Rice:</strong> Served as a side with curries, dals, or kebabs.</li>
                    </ul>
                </section>

                <section class="cooking-method">
                    <h2><span class="icon">🍳</span> Cooking Method</h2>
                    <p>Here’s a standard method to cook <strong>1121 Steam Basmati Rice</strong>:</p>

                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul>
                            <li>1 cup 1121 Steam Basmati Rice</li>
                            <li>4 cups water</li>
                            <li>Salt (optional)</li>
                        </ul>
                    </div><br />

                    <div class="steps">
                        <h3>Steps</h3>
                        <ol>
                            <li><strong>Rinse:</strong> Rinse the rice in cold water 2–3 times until the water runs clear.</li>
                            <li><strong>Soak:</strong> Soak the rice for 20–30 minutes (optional but recommended for best texture).</li>
                            <li><strong>Boil:</strong> In a pot, bring water to a boil, add the soaked rice and a pinch of salt.</li>
                            <li><strong>Cook:</strong> Let it cook uncovered for 8–10 minutes until the rice is tender and grains are separate.</li>
                            <li><strong>Drain & Steam:</strong> Drain excess water and cover with a lid. Let it rest for 5 minutes.</li>
                            <li>
                                <strong>Fluff & Serve:</strong> Fluff the rice with a fork and serve hot. <br />
                                <em>Alternatively, you can use the absorption method: 1 part rice to 2 parts water, simmering covered until water is absorbed.</em>
                            </li>
                        </ol>
                    </div>
                </section>
            {/* <br/> */}

            <div class="health-benefits">
                <h2><span class="icon">🩺</span> Health Benefits</h2>
                <ul>
                    <li><span class="check">☑</span> <strong>Low in Fat:</strong> Virtually fat-free, making it ideal for low-fat diets.</li>
                    <li><span class="check">☑</span> <strong>Good Source of Energy:</strong> Rich in complex carbohydrates for sustained energy.</li>
                    <li><span class="check">☑</span> <strong>Gluten-Free:</strong> Suitable for those with gluten intolerance or celiac disease.</li>
                    <li><span class="check">☑</span> <strong>Easily Digestible:</strong> Gentle on the stomach and light on digestion.</li>
                    <li><span class="check">☑</span> <strong>Aromatic and Delicious:</strong> Encourages mindful eating and enhances meal satisfaction.</li>
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
