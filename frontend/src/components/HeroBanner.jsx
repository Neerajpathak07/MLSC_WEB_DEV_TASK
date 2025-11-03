import React from 'react';
import './HomePage.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Starting ₹799</h2>
          <h1>Gun massager</h1>
          <div className="hero-brands">
            <span>Lifelong</span> | <span>cult</span>
          </div>
        </div>
        <div className="hero-image">
          <img src="/HomeKitchen.png" alt="Gun Massager" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
      <div className="hero-offer-banner">
        <strong>Extra 5% unlimited cashback</strong> with Amazon Pay ICICI bank credit card
      </div>
    </div>
  );
};

export default HeroBanner;