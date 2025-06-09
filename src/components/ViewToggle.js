import React from 'react';
import './ViewToggle.css';

const ViewToggle = ({ viewMode, onViewModeChange }) => {
  return (
    <div className="view-toggle">
      <div className="view-toggle-container">
        <button 
          className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => onViewModeChange('grid')}
        >
          <span className="toggle-icon">⊞</span>
          <span className="toggle-text">Grid View</span>
        </button>
        <button 
          className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => onViewModeChange('list')}
        >
          <span className="toggle-icon">☰</span>
          <span className="toggle-text">List View</span>
        </button>
      </div>
    </div>
  );
};

export default ViewToggle; 