import React from 'react';
import '../design/Contact.css';

const hoverSound = new Audio(process.env.PUBLIC_URL + "../assets/hover.wav");
const clickSound = new Audio(process.env.PUBLIC_URL + "../assets/click.wav");

hoverSound.preload = 'auto';
clickSound.preload = 'auto';

const Contact = () => {
  const handleHover = () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  };

  const handleClick = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };

  return (
    <div className="contact-container" id="contacts">
      <div className="text-content-contacts">
        <h1 className="portfolio-title">MY CONTACTS AND SOCIALS:</h1>
        <div className="links">
          <a
            href="https://www.instagram.com/ginn_mzn/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleHover}
            onClick={handleClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
              alt="Instagram icon"
              className="social-icon"
            />
            Instagram
          </a>

          <a
            href="https://discordapp.com/users/902044009269166130"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleHover}
            onClick={handleClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968756.png"
              alt="Discord icon"
              className="social-icon"
            />
            Discord
          </a>

          <a
            href="https://www.tiktok.com/@ginn_mzn"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleHover}
            onClick={handleClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2504/2504942.png"
              alt="TikTok icon"
              className="social-icon"
            />
            TikTok
          </a>

          <a
            href="https://x.com/ginn_mzn"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleHover}
            onClick={handleClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
              alt="Twitter icon"
              className="social-icon"
            />
            Twitter
          </a>

          <a
            href="https://github.com/angelie-hub"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleHover}
            onClick={handleClick}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
              alt="GitHub icon"
              className="social-icon"
            />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
