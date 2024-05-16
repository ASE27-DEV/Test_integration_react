import React from 'react';

const SeparationLine = ({ width = 699, color = '#D1D1D1', opacity = 1 }) => (
  <svg width={width} height="1" viewBox={`0 0 ${width} 1`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="4.37114e-08" y1="0.5" x2="699" y2="0.500061" stroke={color} strokeOpacity={opacity} />
  </svg>
);

export default SeparationLine;
