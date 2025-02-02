import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar'; 
import Footer from './Footer/Footer';
import About from './About/About';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import 'particles.js';

function App() {
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

  useEffect(() => {
    
    window.particlesJS.load('particles-js', '/particles-config.json', function () {
      console.log('Particles.js loaded!');
    });    
  }, []);

  return (
    <>
    <div className="App">
      <div id="particles-js"></div>
      <Navbar />

      {/* Sections with IDs for smooth scrolling */}
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience/></section>
      <section id="contact"><Contact /></section>


      <Footer />
    </div>
    </>
  );
}

export default App;

