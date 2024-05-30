import React, { useState } from "react";
import { images } from "../../../assets/Images";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { Icons, navbarIcons } from "../../../assets/Icons";
import "./Navbar.css";

// Navbar component
export default function Navbar({ isDark, toggleTheme }) {
  const [selected, setSelected] = useState(false); // State to manage the hamburger menu toggle

  // Function to handle opening and closing of the hamburger menu
  const toggleMenu = () => {
    setSelected(!selected);
    // Trigger reflow to restart CSS animations
    document
      .querySelectorAll(".navItems, .viewWorkButton, .switch, .nav-footer")
      .forEach((item) => {
        item.classList.remove("fadeIn");
        void item.offsetWidth; // Trigger reflow
        item.classList.add("fadeIn");
      });
  };

  // Function to close the menu when an item is clicked with a delay
  const closeMenuWithDelay = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    setTimeout(() => {
      setSelected(false);
      if (href.startsWith("#")) {
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }, 300); // Adjust delay as needed
  };

  return (
    <>
      <nav className="navBar">
        {/* Logo */}
        <img src={images.aramLogo} alt="logo" className="logo" />
        {/* Navigation links and theme switch */}
        <div className="side-nav-container">
          <div className="navLinks">
            <a href="#projects" className="navItems">
              Projects
            </a>
            <Link to="/capabilities" className="navItems">
              Capabilities
            </Link>
            <Link to="/contact" className="navItems">
              Contact
            </Link>
          </div>
          <div className="switch">
            <Switch
              checked={isDark}
              className="switch"
              checkedHandleIcon={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={Icons.lightMode} width={20} height={20} />
                </div>
              }
              uncheckedIcon={false}
              checkedIcon={false}
              uncheckedHandleIcon={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={Icons.darkMode} width={20} height={20} />
                </div>
              }
              onChange={toggleTheme}
            />
          </div>
        </div>
        {/* Hamburger icon for mobile view */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <img
            src={selected ? navbarIcons.close : navbarIcons.menu}
            alt="menu"
          />
        </div>
      </nav>
      {/* Hamburger menu content */}
      <div className={`hamburger-menu ${selected ? "show" : "hide"}`}>
        <div className="navLinks-responsive">
          <a
            href="#projects"
            className="navItems fadeIn"
            onClick={closeMenuWithDelay}
          >
            Projects
          </a>
          <a
            to="#capabilities"
            className="navItems fadeIn"
            onClick={closeMenuWithDelay}
          >
            Capabilities
          </a>
          <Link
            to="/contact"
            className="navItems fadeIn"
            onClick={closeMenuWithDelay}
          >
            Contact
          </Link>
          <button
            className="viewWorkButton fadeIn"
            onClick={closeMenuWithDelay}
          >
            Contact Me
          </button>
        </div>
        <div className="switch fadeIn">
          <Switch
            checked={isDark}
            className="switch"
            checkedHandleIcon={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Icons.lightMode} width={20} height={20} />
              </div>
            }
            uncheckedIcon={false}
            checkedIcon={false}
            uncheckedHandleIcon={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Icons.darkMode} width={20} height={20} />
              </div>
            }
            onChange={toggleTheme}
          />
        </div>
        <div className="nav-footer fadeIn">
          <p>
            I’m currently available for work
            <span className="pulse"></span>
          </p>
        </div>
      </div>
    </>
  );
}
