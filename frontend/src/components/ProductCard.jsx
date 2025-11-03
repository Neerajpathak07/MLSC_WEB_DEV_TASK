import React from 'react';
import './HomePage.css';

const ProductCard = ({ title, items, footerLink }) => {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <div className="card-grid">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            <a href={item.link} className="grid-item-link">
              <div className="image-container">
                <img 
                  src={item.image} 
                  alt={item.label} 
                  className="grid-item-image"
                  onError={(e) => {
                    // Fallback in case image fails to load
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found';
                  }}
                />
              </div>
              <span className="grid-item-label">{item.label}</span>
            </a>
          </div>
        ))}
      </div>
      <a href="#" className="card-footer-link">{footerLink}</a>
    </div>
  );
};

export default ProductCard;