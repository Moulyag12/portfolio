import React from "react";
import intern from "./intern.json";
import exp from "./Exp.json";
import "./Experience.css";

function Experience() {
  return (
    <div>
      <h1 className="section-title">My Experience</h1>
    <div className="experience-container">
      <div className="experience-section">
        <h2 className="experience-title">Software Engineer at Subex</h2>
        <ul className="experience-list">
          {exp.map((item, index) => (
            <li key={index} className="experience-item">
              {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="experience-section">
        <h2 className="experience-title">SDE Intern at Subex</h2>
        <ul className="experience-list">
          {intern.map((item, index) => (
            <li key={index} className="experience-item">
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Experience;
