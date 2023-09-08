import React from "react";
import "./ProjectStyles.css";
import projectsData from "../data/projectData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Project() {
  return (
    <div id="project">
      <h1>Projects</h1>
      <h3>Dive into efficient development, where stacked technology and OOP expertise meet famous functions like RESTful APIs. From a MERN app excelling in CRUD to an innovative Barcode Attendance System and a seamless PHP-backed financial manager, discover the world of efficient development.</h3>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.img} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="stack">
              {/* Add a label for the technology stack */}
              <p><b>Stack Used:</b></p>
              <div className="stack-icons">
                {/* Display technology stack icons */}
                {project.stack.map((tech, techIndex) => (
                  <span key={techIndex}>
                    <i className={`devicon-${tech}-plain`} aria-hidden="true"></i>
                  </span>
                ))}
              </div>
            </div>
            <div className="buttons">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-button github-button">
                  <FaGithub className="button-icon" /> View on GitHub
                </button>
              </a>
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-button website-button">
                  <FaExternalLinkAlt className="button-icon" /> View Website
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
