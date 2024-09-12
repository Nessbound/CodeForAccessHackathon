// ContrastToggle.js
// Challenge: Color Contrast Enhancer
// Objective: Create a button that toggles between normal and high-contrast modes, improving readability for users with visual impairments.

import React, { useState } from 'react';
import '../../css/ContrastToggle.css';

function ContrastToggle() {
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    var toggleButton = document.getElementsByTagName("button")[0];

    toggleButton.setAttribute("aria-pressed", "false");

    if(toggleButton.classList.contains("high-contrast-button")) {
      toggleButton.classList.remove("high-contrast-button");
    }
    else {
      toggleButton.classList.add("high-contrast-button");
    }

    setHighContrast(!highContrast);
  };

  return (
    <div className={`contrast-container ${highContrast ? 'high-contrast' : 'normal-contrast'}`}>
      {/* Bug 1: The aria-pressed attribute is incorrectly implemented. */}
      <button 
        onClick={toggleContrast} 
        aria-pressed="false"
        className="contrast-toggle-button"
        autoFocus
      >
        {highContrast ? 'Switch to Normal Contrast' : 'Switch to High Contrast'}
      </button>

      <p className="sample-text">This is a sample text to demonstrate contrast toggling.</p>
      <h1 className="sample-text">This is a sample H1 to demonstrate contrast toggling.</h1>
      <h3 className="sample-text">This is a sample H3 to demonstrate contrast toggling.</h3>

      {/* TODO 1: Add more text elements with varying sizes to test contrast */}
    </div>
  );
}

export default ContrastToggle;
