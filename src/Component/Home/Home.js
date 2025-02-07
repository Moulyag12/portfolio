import React, { useEffect, useState } from 'react';
import developer from '../developer.svg'; 
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Home.css';

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "FrontEnd Developer";
  const [isDisappearing, setIsDisappearing] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Moulya_Res.pdf';
    link.download = 'Moulya_G_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDisappearing) {
        if (index < fullText.length) {
          setDisplayedText((prev) => prev + fullText[index]);
          setIndex((prev) => prev + 1);
        } else {
          setIsDisappearing(true);
        }
      } else {
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setIsDisappearing(false);
          setIndex(0);
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, [index, isDisappearing, fullText]);

  return (
    <div id="home" className="home-container">
      <div className="intro-dev">
        <h1>Hi, I am Moulya</h1>
        <div className="animated-text">
          <h2>{displayedText}</h2>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/moulya-g/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={25} />
          </a>
          <a href="mailto:gmoulya2001@gmail.com" className="social-icon">
            <FaEnvelope size={25} />
          </a>
          <a href="https://github.com/Moulyag12" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={25} />
          </a>
          <a href="https://www.instagram.com/moulya_g_reddy/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={25} />
          </a>
        </div>

        <button className="res-button" onClick={downloadResume}>
          <FaDownload /> Resume
        </button>
      </div>

      <div className="image-container">
        <img src={developer} alt="Developer illustration" className="right-image" />
      </div>
    </div>
  );
}

export default Home;
