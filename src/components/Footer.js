import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">EcoWaste Solutions</h3>
            <p className="footer-description">
              Professional waste management services with over 15 years of experience. 
              We're committed to sustainable waste disposal and exceptional customer service.
            </p>
            <div className="trust-signals">
              <div className="trust-item">
                <span className="trust-icon">🛡️</span>
                <span className="trust-text">Fully Licensed</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">⭐</span>
                <span className="trust-text">4.9/5 Rating</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">🚚</span>
                <span className="trust-text">Same Day Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Our Services</h4>
            <ul className="footer-list">
              <li>Skip Hire & Collection</li>
              <li>Waste Management</li>
              <li>Construction Waste</li>
              <li>Garden Clearance</li>
              <li>Commercial Services</li>
              <li>Recycling Solutions</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span className="contact-text">0800 123 4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span className="contact-text">hello@ecowaste.co.uk</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">Serving Norfolk & Beyond</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span className="contact-text">Mon-Fri: 7AM-6PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 EcoWaste Solutions. All rights reserved. 
            <span className="footer-links">
              <a href="#privacy">Privacy Policy</a> • 
              <a href="#terms">Terms of Service</a> • 
              <a href="#environmental">Environmental Policy</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 