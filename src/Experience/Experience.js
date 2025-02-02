import React from "react";
import intern from "./intern.json";
import exp from "./Exp.json";
import "./Experience.css"; // Import CSS file

function Experience() {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Software Engineer at Subex</h2>
      <ul className="experience-list">
        {exp.map((item, index) => (
          <li key={index} className="experience-item">
            {item.description}
          </li>
        ))}
      </ul>

      <h2 className="experience-title">Software Engineer Intern</h2>
      <ul className="experience-list">
        {intern.map((item, index) => (
          <li key={index} className="experience-item">
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
