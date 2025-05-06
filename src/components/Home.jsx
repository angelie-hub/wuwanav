import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoo from '../../public/wuwaa.png'; 
import logoo1 from '../../public/wuwuwa.png'; 

const TRANSITION_DURATION = 1700; // ms — how long your gif should be shown before navigating

// Image paths
const images = [
  {logoo},
  {logoo1},
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    const transitionSound = new Audio('/transition.wav');
    transitionSound.play();
  
    setIsTransitioning(true);
  
    setTimeout(() => {
      navigate('/about');
    }, TRANSITION_DURATION); 
  
    // Optional: hide overlay after a bit more if you want it gone even post-nav
    setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_DURATION + 500); 
  };
  
  const handleMouseEnter = () => {
    setCurrentImage(1);
  };

  const handleMouseLeave = () => {
    setCurrentImage(0);
  };

  return (
    <>
      <div className={`page-transition ${isTransitioning ? 'active' : ''}`}></div>
      <div className="home-container">
        <div className="img-holder">
          <img
            src={images[currentImage]}
            className="imagewuwa"
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="text-content">
          <h1>WELCOME, ROVER!</h1>
          <p>
            I'm a digital artist and a web developer just starting out in the commission and freelance world.
            I love creating character art, and original pieces that bring ideas to life.
          </p>
          <button onClick={handleClick} className="cta-button">
            Learn more about me
          </button>
        </div>
      </div>


    </>
  );
};

export default Home;
