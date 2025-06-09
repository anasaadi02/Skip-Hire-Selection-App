import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ steps }) => {
  return (
    <div className="progress-bar">
      <div className="progress-container">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={`progress-step ${step.completed ? 'completed' : ''} ${step.active ? 'active' : ''}`}>
              <div className="step-circle">
                {step.completed ? (
                  <span className="checkmark">✓</span>
                ) : (
                  <span className="step-icon">{step.icon}</span>
                )}
              </div>
              <span className="step-label">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`progress-line ${step.completed ? 'completed' : ''}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar; 