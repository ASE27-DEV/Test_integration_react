import React from "react";

const RightArrow = ({ size = 16, color = '#3C4044' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33331 8H12.6666" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 3.33333L12.6667 7.99999L8 12.6667" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

export default RightArrow;