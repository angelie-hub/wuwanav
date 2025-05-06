import React, { useEffect, useState } from 'react';
import encoreGif from '../assets/encore.gif';


const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // New state for fade-out effect

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out after the loading
      setTimeout(() => setLoading(false), 500); 
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`loader-screen ${fadeOut ? 'fade-out' : ''}`}>
        <div className="spinner">
          <img src={encoreGif} alt="encore" className="Encore" />

        </div>
        <div className="loader_text">
          <h1>ENCORE IS ON HER WAY...</h1>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loader;
