import React, { createContext, useState, useEffect } from 'react';

// Context Creation
const ScreenContext = createContext({
  isMobile: false,
  setIsMobile: () => { }
});

// Update the value if screen resize and give the value to all other component
export const ScreenProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ isMobile }}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenContext;