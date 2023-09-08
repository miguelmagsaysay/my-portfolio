// data/projectsData.js
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";

const projectsData = [
  {
    img: project1,
    title: "Workout Buddy",
    description: "An agile MERN  (MongoDB, Express.js, React, Node.js) stack application proficiently executing CRUD operations with precision and efficiency",
    stack: ["html5","css3","mongodb","express","react", "nodejs"],
    githubLink: "https://github.com/miguelmagsaysay/workout-buddy",
    websiteLink: "TBA",
  },
  {
    img: project3,
    title: "School AMS",
    description: "An application for monitoring students, instructor, and staff in a campus or classroom, utilizing barcode technology for seamless tracking",
    stack: ["dotnetcore", "mysql", "php"],
    githubLink: "https://github.com/miguelmagsaysay/MyBudget-v1.0",
    websiteLink: "TBA",
  },
  {
    img: project2,
    title: "MyBudget (Budget Tracker)",
    description: "With a strong foundation in PHP, a versatile server-side scripting language. Seamlessly track, analyze, and manage your financial data",
    stack: ["html5", "css3", "php", "mysql"],
    githubLink: "https://github.com/miguelmagsaysay/MyBudget-v1.0",
    websiteLink: "TBA",
  }
  
];

export default projectsData;
