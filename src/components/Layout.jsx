import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery'; 
import Recipes from './Recipes'; // Assuming you have a Recipes component
import Infra from './Infra';
import Certifications from './Certifications'; // Assuming you have a Certifications component
import Footer from './Footer';
import Basmati from './Basmati'; // Assuming you have a Basmati component
import Sella from './Sella'; // Assuming you have a Sella component
import Golden from './Golden'; // Assuming you have a Golden component
import Steam from './Steam'; // Assuming you have a Steam component
import Sell from './Sell'; // Assuming you have a Sell component
import Gold from './Gold';


export default function Layout() {
  return (
    <BrowserRouter>
    <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/infra' element={<Infra />} />
        <Route path='/basmati' element={<Basmati />} />
        <Route path='/sella' element={<Sella />} />
        <Route path='/golden' element={<Golden />} />
        <Route path='/steam' element={<Steam />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/gold' element={<Gold />} />

        <Route path='/certifications' element={<Certifications />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
