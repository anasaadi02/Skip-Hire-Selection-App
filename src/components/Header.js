import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo">
            <div className="logo-icon">♻️</div>
            <div className="logo-text">
              <h1 className="company-name">REMWaste</h1>
              <p className="company-tagline">Professional Waste Management</p>
            </div>
          </div>
        </div>
        
        <div className="header-right">
          <div className="service-highlights">
            <div className="highlight">
              <span className="highlight-icon">🚚</span>
              <span className="highlight-text">Free Delivery</span>
            </div>
            <div className="highlight">
              <span className="highlight-icon">📅</span>
              <span className="highlight-text">14-Day Hire</span>
            </div>
            <div className="highlight">
              <span className="highlight-icon">📞</span>
              <span className="highlight-text">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 