import React from 'react';
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import ProductCard from './ProductCard';
import './HomePage.css';

// Product data using available images
const homeStyleItems = [
  { link: '#', image: '/HomeKitchen.png', label: 'Home & Kitchen Essentials' },
  { link: '#', image: '/MOBILE_STAND.jpg', label: 'Mobile Accessories' },
  { link: '#', image: '/HEADPHONE_1.jpg', label: 'Audio Devices' },
  { link: '#', image: '/HEADPHONE_2.jpg', label: 'Premium Headphones' },
];

// Reusing images for other categories as placeholders
const appliancesItems = [
  { link: '#', image: '/HEADPHONE_1.jpg', label: 'Audio Systems' },
  { link: '#', image: '/HEADPHONE_2.jpg', label: 'Wireless Earbuds' },
  { link: '#', image: '/MOBILE_STAND.jpg', label: 'Mobile Stands' },
  { link: '#', image: '/HomeKitchen.png', label: 'Home Appliances' },
];

const headphonesItems = [
  { link: '#', image: '/HEADPHONE_1.jpg', label: 'Starting ₹249 | Premium Headphones' },
  { link: '#', image: '/HEADPHONE_2.jpg', label: 'Starting ₹549 | Wireless Earbuds' },
  { link: '#', image: '/MOBILE_STAND.jpg', label: 'Starting ₹199 | Mobile Stands' },
  { link: '#', image: '/HomeKitchen.png', label: 'Starting ₹799 | Home Essentials' },
];

const homeImprovementItems = [
  { link: '#', image: '/MOBILE_STAND.jpg', label: 'Under ₹299 | Mobile Accessories' },
  { link: '#', image: '/HEADPHONE_1.jpg', label: 'Under ₹599 | Audio Devices' },
  { link: '#', image: '/HEADPHONE_2.jpg', label: 'Under ₹499 | Headphones' },
  { link: '#', image: '/HomeKitchen.png', label: 'Under ₹999 | Home & Kitchen' },
];

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <main className="homepage-main-content">
        <HeroBanner />
        
        <div className="product-grid-container">
          <ProductCard 
            title="Revamp your home in style" 
            items={homeStyleItems} 
            footerLink="Explore all" 
          />
          <ProductCard 
            title="Appliances for your home | Up to 55% off" 
            items={appliancesItems} 
            footerLink="See more" 
          />
          <ProductCard 
            title="Starting ₹149 | Headphones" 
            items={headphonesItems} 
            footerLink="See all offers" 
          />
          <ProductCard 
            title="Under ₹499 | Deals on home improvement essentials" 
            items={homeImprovementItems} 
            footerLink="Explore all" 
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;