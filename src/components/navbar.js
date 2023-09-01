import React, { Component } from "react";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleScroll = (event, targetId) => {
    event.preventDefault();

    // Close the navigation menu by setting clicked to false
    this.setState({ clicked: false });

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetOffsetTop = targetElement.offsetTop;
      const scrollOptions = {
        top: targetOffsetTop,
        behavior: "smooth",
      };

      window.scrollTo(scrollOptions);
    }
  };

  render() {
    return (
      <>
        <nav>
          <a href="#home">
            <p id="logo">&lt;myportfolio&gt;</p>
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "active" : ""}
            >
              <li>
                <a href="#home" onClick={(e) => this.handleScroll(e, "home")}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  onClick={(e) => this.handleScroll(e, "project")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => this.handleScroll(e, "skills")}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#contactme" onClick={(e) => this.handleScroll(e, "contactme")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
