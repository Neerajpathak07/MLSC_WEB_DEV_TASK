import React from 'react';
import './HomePage.css'; // We'll create this file later

// Icons (using simple text as placeholders)
const MenuIcon = () => <span>☰</span>;
const SearchIcon = () => <span>s</span>;
const CartIcon = () => <span>🛒</span>;

const Navbar = () => {
  return (
    <>
      <nav className="navbar-main">
        <div className="nav-left">
          <div className="nav-logo">Amazon.in</div>
          <div className="nav-location">
            <span className="nav-text-small">Delivering to Mumbai 400001</span>
            <span className="nav-text-bold">Update location</span>
          </div>
        </div>
        <div className="nav-search">
          <button className="nav-search-dropdown">All</button>
          <input type="text" className="nav-search-input" placeholder="Search Amazon.in" />
          <button className="nav-search-button">
            <SearchIcon />
          </button>
        </div>
        <div className="nav-right">
          <div className="nav-link">
            <span className="nav-text-small">Hello, sign in</span>
            <span className="nav-text-bold">Account & Lists</span>
          </div>
          <div className="nav-link">
            <span className="nav-text-small">Returns</span>
            <span className="nav-text-bold">& Orders</span>
          </div>
          <div className="nav-cart">
            <CartIcon />
            <span className="nav-text-bold">Cart</span>
          </div>
        </div>
      </nav>
      <nav className="navbar-sub">
        <ul>
          <li><MenuIcon /> All</li>
          <li>Fresh</li>
          <li>MX Player</li>
          <li>Sell</li>
          <li>Best Sellers</li>
          <li>Today's Deals</li>
          <li>Mobiles</li>
          {/* ...other links */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;