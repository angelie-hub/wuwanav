import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';  // ⬅️ added Navigate
import './design/Home.css';
import './design/About.css';
import './design/Main.css';
import './design/Projects.css';
import './design/Gallery.css';  
import './design/Contact.css';
import './design/Responsive.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Loading from './components/Loader';
import Footer from './components/Footer';

function App() {
  
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (initialLoad) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* ⬇️ catch-all: redirects any unknown path to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
