import React from 'react';
import './ProjectsCard.css';

function ProjectCard({ image, title, repoLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} preview`} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="project-links">
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-repo">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
