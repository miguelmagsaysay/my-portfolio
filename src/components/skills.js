import React from "react";
import "./SkillsStyles.css";
import skillsData from "../data/skillsData";
import "devicon/devicon.min.css"; // Import the devicon CSS

function Skills() {
  // Create an object to group skills by category
  const groupedSkills = {};

  skillsData.forEach((skill) => {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  });

  return (
    <div id="skills">
      <h1>Skills</h1>
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="skills-container">
            {skills.map((skill) => (
              <div className="skill" key={skill.id}>
                <i className={`devicon-${skill.icon}-plain`} aria-hidden="true"></i>
                <h3>{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
