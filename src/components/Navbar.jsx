import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/wuwa.png'; 

const items = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'CONTACTS', path: '/contact' }
];

const Navbar = () => {
  const [clickedLink, setClickedLink] = useState(null);
  const [showJumpscare, setShowJumpscare] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 👈 new state for burger

  const handleNavClick = (name) => {
    const clickSound = new Audio('/click.wav');
    clickSound.play();

    setClickedLink(name);
    setTimeout(() => {
      setClickedLink(null);
    }, 600);
    setMenuOpen(false); // close menu after clicking a link
  };

  const handleLogoClick = () => {
    const audio = new Audio('/jumpscare.mp3');
    audio.play();

    setShowJumpscare(true);
    setTimeout(() => {
      setShowJumpscare(false);
    }, 2000);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <img
          src={logo}
          alt="logo"
          className="wuwalogo"
          onClick={handleLogoClick}
        />

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {items.map((item, index) => (
            <div key={item.name} className="nav-link-wrapper">
              <NavLink
                to={item.path}
                onClick={() => handleNavClick(item.name)}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'active' : ''} ${
                    clickedLink === item.name ? 'clicked' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
              {index !== items.length - 1 && <span className="separator">|</span>}
            </div>
          ))}
        </div>

        {/* burger menu icon */}
        <div className="burger" onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>

      {showJumpscare && (
        <div className="jumpscare-overlay">
          <img
            src="https://i.pinimg.com/originals/14/e2/c8/14e2c8d3ca22b9e4f79f1415741497c4.gif"
            alt="jumpscare"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
