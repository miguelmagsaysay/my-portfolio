import React from "react";
import "./SkillsStyles.css";

function Skills() {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skill">
          <i className="fas fa-code"></i>
          <h2>Front-End Development</h2>
          <p>
            Proficient in building responsive and user-friendly front-end
            interfaces using <b>HTML5, CSS3, and JavaScript</b>. Familiar with modern
            libraries and frameworks like <b>React</b>.
          </p>
        </div>
        <div className="skill">
          <i className="fas fa-server"></i>
          <h2>Back-End Development</h2>
          <p>
            Experienced in designing and implementing server-side logic using
            <b>Node.js and Express.js</b>. Skilled in working with databases such as
            <b>MongoDB and SQL</b> for data storage and retrieval.
          </p>
        </div>
        <div className="skill">
          <i className="fas fa-paint-brush"></i>
          <h2>UI/UX Design</h2>
          <p>
            Knowledgeable in creating visually appealing designs using tools
            like Adobe XD and Figma. Strong understanding of design principles
            and user-centered design practices.
          </p>
        </div>
        <div className="skill">
          <i className="fas fa-code-branch"></i>
          <h2>Version Control</h2>
          <p>
            Proficient in using Git and GitHub for collaborative development,
            version control, and managing codebase changes within teams.
          </p>
        </div>
        <div className="skill">
          <i className="fas fa-terminal"></i>
          <h2>Command Line</h2>
          <p>
            Comfortable with using the command-line interface for tasks such as
            project setup, package management, and running development servers.
          </p>
        </div>
        <div className="skill">
          <i className="fas fa-globe"></i>
          <h2>Web Deployment</h2>
          <p>
            Skilled in deploying web applications using platforms like Netlify,
            Vercel, and Heroku, ensuring seamless user access and performance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
