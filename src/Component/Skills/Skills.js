import React from "react";
import './Skills.css';
import htmlimage from '../assets/html.png';
import CSSimage from '../assets/css.png';
import JSimage from '../assets/js.png';
import Javaimage from '../assets/java.png';
import Angimage from '../assets/angular.png';
import rectimage from '../assets/react.png';
import jenkinImage from '../assets/Jenkin.png';
import pyimage from '../assets/python.jpg';
const skills = [
    { skillName: 'HTML', skillUrl: htmlimage },
     { skillName: 'CSS', skillUrl: CSSimage },
    { skillName: 'JavaScript', skillUrl: JSimage },
     {skillName:'Java',skillUrl:Javaimage},
     {skillName:'Angular',skillUrl: Angimage},
    {skillName:'React',skillUrl:rectimage},
    {skillName:'Jenkins',skillUrl:jenkinImage},
    {skillName:'python',skillUrl:pyimage}

];
function Skills() {
    return <div>
   <h1 className="skills-heading"> Skills</h1>
   <div className="skill-container">
    {skills.map((skill,index)=>(
        <div key={index} className="skill-item">
          <img src={skill.skillUrl} alt={skill.skillName} className="skill-image"/>
          <p>{skill.skillName}</p>
        </div>
    ))}
   </div>
  </div>
  }
  
export default Skills;
  