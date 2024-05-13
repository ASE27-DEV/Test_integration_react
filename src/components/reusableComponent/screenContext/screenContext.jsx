import React, { createContext, useState, useEffect } from 'react';

// Création du contexte
const ScreenContext = createContext({
  isMobile: false,
  setIsMobile: () => {}
});

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