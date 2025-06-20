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
                    <h1>1509 Sella Basmati Rice</h1>
                    <p>Home / 1509 Sella Basmati Rice</p>
                </div>
            </div>
            <br /><br />

            <section class="rice-info">
                <div class="container">
                    <h2> 1509 Sella Basmati Rice:</h2>
                    <p>
                       1509 Sella Basmati Rice is a premium quality, long-grain rice variety known for its extraordinary length, fluffy texture, and delightful aroma. Parboiled (sella) during processing, it retains more nutrients, making it a healthier choice. This rice is especially popular in biryanis, pulaos, and festive dishes for its superb taste and non-sticky grains.
                    </p>
                </div>
            </section>

            <section class="spec-table-section">
                <table class="spec-table">
                    <thead>
                        <tr>
                            <th colspan="2">1509 Sella Basmati Rice Specifications</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Type</td>
                            <td>Parboiled Basmati Rice (Sella Basmati)</td>
                        </tr>
                        <tr>
                            <td>Grain Length (before cooking)</td>
                            <td>Minimum 7.40 mm</td>
                        </tr>
                        <tr>
                            <td>Moisture</td>
                            <td>Maximum 12%</td>
                        </tr>
                        <tr>
                            <td>Broken Grains</td>
                            <td>Maximum 2%</td>
                        </tr>
                        <tr>
                            <td>Foreign Matter</td>
                            <td>Maximum 0.2%</td>
                        </tr>
                        <tr>
                            <td>Chalky Grains</td>
                            <td>Maximum 5%</td>
                        </tr>
                        <tr>
                            <td>Damaged / Discolored</td>
                            <td>Maximum 1%</td>
                        </tr>
                        <tr>
                            <td>Paddy Grain</td>
                            <td>Nil</td>
                        </tr>
                        <tr>
                            <td>Red & Red Streaked Grains</td>
                            <td>Maximum 0.2%</td>
                        </tr>
                        <tr>
                            <td>Milling Degree</td>
                            <td>Well-milled</td>
                        </tr>
                        <tr>
                            <td>Polishing</td>
                            <td>Double polished</td>
                        </tr>
                        <tr>
                            <td>Whiteness</td>
                            <td>Minimum 38 Kett Whiteness</td>
                        </tr>
                        <tr>
                            <td>Average Grain Width</td>
                            <td>1.50 - 1.65 mm</td>
                        </tr>
                        <tr>
                            <td>Sortex Clean</td>
                            <td>100% Sortex Clean</td>
                        </tr>
                        <tr>
                            <td>Aroma (before cooking)</td>
                            <td>Slight natural arom</td>
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
                            <td>360kcal</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>78 g</td>
                        </tr>
                        <tr>
                            <td>sugars</td>
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
                            <td>saturated Fat</td>
                            <td>0 g</td>
                        </tr>
                        <tr>
                            <td>Fibre</td>
                            <td>1 g</td>
                        </tr>
                        <tr>
                            <td>Sodium</td>
                            <td>1 mg</td>
                        </tr>
                        <tr>
                            <td>Iron</td>
                            <td>1.5 mg</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <div class="cooking-section">
                <section class="dish-list">
                    <h2><span class="icon">🍚</span> Popular Dishes</h2>
                    <ul>
                        <li><strong>Biryani:</strong>  (veg, chicken, mutton, seafood)</li>
                        <li><strong>Pulao:</strong> (veg, paneer, peas)</li>
                        <li><strong>Fried Rice:</strong></li>
                        <li><strong>Jeera Rice:</strong></li>
                        <li><strong>Kheer:</strong> (rice pudding)</li>
                        <li><strong>Rice salads and rice bowls</strong></li>
                    </ul>
                </section>

                <section class="cooking-method">
                    <h2><span class="icon">🍳</span> Cooking Method</h2>
                    <strong>(Absorption Method)</strong>
                    <div class="steps">
                        <h3>Steps</h3>
                        <ol>
                            <li><strong>Rinse:</strong>Wash the rice 2-3 times in water to remove excess starch.</li>
                            <li><strong>Soak:</strong>   Soak in water for 30 minutes (optional, helps with fluffiness).</li>
                            <li><strong>Boil:</strong>  In a pot, add 1 cup rice to 2 cups water.</li>
                            <li><strong>Cook</strong>  Bring to a boil, then cover and simmer on low heat for 10-12 minutes until water is absorbed.</li>
                            <li><strong>Rest:</strong>  1.Turn off heat and let it rest, covered, for 5 minutes.</li>
                            <li><strong>Fluff :</strong> Gently fluff with a fork and serve hot.</li>
                        </ol>
                    </div>
                </section>
            {/* <br/> */}

            <div class="health-benefits">
                <h2><span class="icon">🩺</span> Health Benefits</h2>
                <ul>
                    <li><span class="check">☑</span> <strong> Better Nutrition:</strong>  The parboiling process retains more vitamins and minerals compared to raw rice.</li>
                    <li><span class="check">☑</span> <strong>Easily Digestible:</strong>  The fluffy texture and natural fiber content aid digestion.</li>
                    <li><span class="check">☑</span> <strong>Low in Fat:</strong>Suitable for heart-healthy and weight-conscious diets.</li>
                    <li><span class="check">☑</span> <strong>Source of Energy:</strong> Rich in carbohydrates for an energy boost.</li>
                    <li><span class="check">☑</span> <strong>Gluten-Free:</strong> Ideal for those with gluten sensitivity or celiac disease.</li>
                    <li><span class="check">☑</span> <strong> Good Source of Iron and Calcium:</strong> Helps maintain healthy bones and blood.</li>

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
