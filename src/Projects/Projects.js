import React from 'react';
import ProjectsCard from './ProjectsCard';
import './Projects.css';
import newsImage from '../assets/news.png';
import scroll from '../assets/Infinite_scroll.png';
import weatherApp from '../assets/weather.png';
function Projects() {
  const projects = [
    {
      image: newsImage, 
      title: 'News Website',
      repoLink: 'https://github.com/Moulyag12/newsapp',
    },
    {
      image: scroll,
      title: 'Infinite Scroll',
      repoLink: 'https://github.com/Moulyag12/Javascript-infinite-scroll',
    },
    {
      image: weatherApp,
      title: 'WeatherSite',
      repoLink: 'https://github.com/Moulyag12/Weather-App',
    },
    

  ];

  return (
    <div className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
