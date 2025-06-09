import React from 'react';
import SkipCard from './SkipCard';
import './SkipSelection.css';

const SkipSelection = ({ skipOptions, selectedSkip, onSkipSelect }) => {
  const selectedSkipData = skipOptions.find(skip => skip.id === selectedSkip);

  const handleBackToSelection = () => {
    onSkipSelect(null);
  };

  return (
    <div className="skip-selection">
      <div className="skip-selection-header">
        <h1 className="skip-selection-title">Choose Your Perfect Skip</h1>
        <p className="skip-selection-subtitle">
          Our waste management experts have curated the perfect skip sizes for every project. 
          Select the one that best fits your needs.
        </p>
      </div>
      
      <div className="skip-list">
        {skipOptions.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip === skip.id}
            onSelect={() => onSkipSelect(skip.id)}
          />
        ))}
      </div>
      
      {selectedSkipData && (
        <div className="bottom-cta">
          <div className="selected-skip-summary">
            <div className="summary-content">
              <h3 className="summary-title">{selectedSkipData.name}</h3>
              <p className="summary-description">{selectedSkipData.description}</p>
              <div className="summary-price">
                <span className="current-price">{selectedSkipData.price}</span>
                <span className="price-note">Inc. VAT</span>
              </div>
            </div>
            <div className="cta-buttons">
              <button className="btn-secondary" onClick={handleBackToSelection}>
                Back to Selection
              </button>
              <button className="btn-primary">Continue to Permits →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipSelection; 