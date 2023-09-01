import React from "react";
import "./ProjectStyles.css";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
const projectsData = [
  {
    img: project1,
    title: "Workout Buddy",
    description: "MERN Stack Application that performs CRUD operations",
  },
  {
    img: project2,
    title: "My Budget",
    description: "Budget tracker application using PHP on the backend",
  },
 
 
];

function Project() {
  return (
    <div id="project">
      <h1>Projects</h1>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.img} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
