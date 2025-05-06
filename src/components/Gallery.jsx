import React, { useState } from 'react';
import ena from '../assets/enaglasses.png';
import enabang from '../assets/EnaBang.png';
import mizuenaxmas from '../assets/mizuena_xmas.png';
import samurai from '../assets/samurai.png';
import sofi from '../assets/sofi.png';
import what from '../assets/what.png';
import enany from '../assets/enaNY.png';
import mizuena from '../assets/mizuena1.png';
import shinonomeena from '../assets/shinonomeena.png';

const hoverSound = new Audio(process.env.PUBLIC_URL + "/hover.wav");
const clickSound = new Audio(process.env.PUBLIC_URL + "/transition.wav");

hoverSound.preload = 'auto';
clickSound.preload = 'auto';

const images = [
  { src: ena, title: 'Shinonome Ena Bday Art', description: 'A drawing I made for Shinonome Ena - April 30, 2025.' },
  { src: enabang, title: 'Shinonome Ena', description: 'Trying out some dynamic poses with my wife as character.' },
  { src: mizuenaxmas, title: 'Mizuena Xmas', description: 'Mizuena is a character ship between Shinonome Ena and Akiyama Mizuki. This is my winter illustration for them.' },
  { src: samurai, title: 'Historical OC', description: 'An original character design in a historical setting. This is a Mount of Hua Sect inspired character.' },
  { src: sofi, title: 'Sofi', description: 'This drawing is an entry for an art contest with the character, Sofi.' },
  { src: what, title: 'Pan4`s Artstlye Study', description: 'This is an OC created with an attempt to recreate Pan4 - Lout of Count`s Family - artist.' },
  { src: enany, title: 'Shinonome Ena New Year Art', description: 'This is a drawing I made for New Year.' },
  { src: mizuena, title: 'Mizuena', description: 'A fanart for project sekai`s 5th Akiyama Mizuki`s focused event.' },
  { src: shinonomeena, title: 'Shinonome Ena Hermit', description: 'A Shinonome Ena Hermit Card and event Fanart.' },
];

const Gallery = () => {
  const [featured, setFeatured] = useState(images[0]);
  const [recent, setRecent] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleImageClick = (image) => {
    clickSound.currentTime = 0;
    clickSound.play();

    if (image.src === featured.src) return;

    setRecent((prev) => {
      const newRecent = [featured, ...prev.filter(i => i.src !== image.src && i.src !== featured.src)];
      return newRecent.slice(0, 2);
    });

    setFeatured(image);
    scrollToTop();
  };

  const handleHover = () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  };

  return (
    <div className="gallery-page">
      <h2 className="gallery-title">MY GALLERY</h2>
      <p className="gallery-description">
        You can find more of my arts on my social media accounts. I post my drawings on Twitter, Instagram and Tiktok.
      </p>

      <div className="gallery-top-section">
        <div className="featured-container">
          <img src={featured.src} alt={featured.title} className="featured-image" />
          <div className="image-info">
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
          </div>
        </div>

        <div className="recent-container">
          <h3 className="recent-title">RECENT</h3>
          {recent.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.title}
              className="recent-image"
              onMouseEnter={handleHover}
              onClick={() => handleImageClick(img)}
            />
          ))}
        </div>
      </div>

      <hr className="gallery-divider" />

      <div className="gallery-grid">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.title}
            className="gallery-thumbnail"
            onMouseEnter={handleHover}
            onClick={() => handleImageClick(img)}
          />
        ))}
      </div>

      <button
        className="scroll-to-top"
        onMouseEnter={handleHover}
        onClick={() => {
          clickSound.currentTime = 0;
          clickSound.play();
          scrollToTop();
        }}
      >
        ↑
      </button>
    </div>
  );
};

export default Gallery;
