import React from 'react';
import './SkipCard.css';

const SkipCard = ({ skip, isSelected, onSelect }) => {
  return (
    <div className={`skip-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <div className="skip-image-section">
        {skip.image ? (
          <img 
            src={skip.image} 
            alt={skip.name}
            className="skip-image"
          />
        ) : (
          <div className="skip-placeholder">
            <span className="skip-icon">🗑️</span>
            <div className="skip-size-overlay">{skip.size} Yard</div>
          </div>
        )}
      </div>
      
      <div className="skip-content">
        <div className="skip-header">
          <div className="skip-title-section">
            <h3 className="skip-name">{skip.name}</h3>
            <p className="skip-description">{skip.description}</p>
            {!skip.allowedOnRoad && (
              <div className="road-warning">
                <span className="warning-icon">⚠️</span>
                <span className="warning-text">Cannot be placed on public roads - private property access required</span>
              </div>
            )}
          </div>
          <div className="skip-pricing">
            <div className="price-current">{skip.price}</div>
            <div className="price-note">Inc. VAT</div>
          </div>
        </div>
        
        <div className="skip-features">
          {skip.features.map((feature, index) => (
            <div key={index} className="feature-item">
              <span className="feature-bullet">•</span>
              <span className="feature-text">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="skip-badges">
          {skip.allowedOnRoad && (
            <span className="feature-badge road-allowed">✓ Road Placement OK</span>
          )}
          {skip.allowsHeavyWaste && (
            <span className="feature-badge heavy-waste">✓ Heavy Waste</span>
          )}
        </div>
        
        <button className={`select-button ${isSelected ? 'selected' : ''}`}>
          {isSelected ? (
            <>
              <span className="checkmark">✓</span>
              <span>Selected</span>
            </>
          ) : (
            <>
              <span>Select This Skip</span>
              <span className="arrow">→</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SkipCard; 