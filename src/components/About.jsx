import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../design/About.css";
import next from "../assets/next.png";
import prev from "../assets/previous.png";
import loadingproj from "../assets/loadingproj.png";
import ena from "../assets/enaglasses.png";
import contacts from "../assets/contacts.png";

const cardImages = {
  PROJECTS: loadingproj, 
  GALLERY: ena,  
  CONTACTS: contacts,  
};

const cardRoutes = {
  PROJECTS: "/projects",
  GALLERY: "/gallery",
  CONTACTS: "/contact",
};

const cardTitles = ["PROJECTS", "GALLERY", "CONTACTS"];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const hoverSound = new Audio(process.env.PUBLIC_URL + "/hover.wav");
  const clickSound = new Audio(process.env.PUBLIC_URL + "/transition.wav");


  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cardTitles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cardTitles.length - 1 ? 0 : prev + 1));
  };

  const playHoverSound = () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  };

  const playClickSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };

  return (
    <div className="about-container">
      <div className="about-description">
        <h2 className="card-title">ABOUT ME</h2>
        <p>
          I'm a second-year IT student with a passion for creating websites and exploring the world of web development.
          During my free time, I enjoy expressing myself through drawing, which helps me stay creative and inspired.
          I'm always looking for new ways to combine my technical skills with my artistic interests!
        </p>
      </div>

      <div className="card-section">
        {cardTitles.map((title, index) => {
          const relativeIndex = (index - activeIndex + cardTitles.length) % cardTitles.length;
          let positionClass = "";

          if (relativeIndex === 0) positionClass = "left";
          else if (relativeIndex === 1) positionClass = "middle";
          else if (relativeIndex === 2) positionClass = "right";

          return (
            <Link to={cardRoutes[title]} key={index} onClick={playClickSound}>
              <div
                className={`magic-card ${positionClass}`}
                onMouseEnter={playHoverSound}
              >
                <img src={cardImages[title]} alt={title} className="card-image" />
                <div className="card-info">
                  <h3>{title}</h3>
                  <p>Click the card for more info...</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="arrow-container">
      <button
        className="arrow-button"
        onClick={() => {
          handlePrev();
          playHoverSound(); // play sound on click only
        }}
      >
        <img src={prev} alt="Left Arrow" className="arrow-icon" />
      </button>

      <button
        className="arrow-button"
        onClick={() => {
          handleNext();
          playHoverSound(); // play sound on click only
        }}
      >
        <img src={next} alt="Right Arrow" className="arrow-icon" />
      </button>
    </div>

    </div>
  );
}
