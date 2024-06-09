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
      <nav className="navBar" role="navigation" aria-label="Main Navigation">
        {/* Logo */}
        <img src={images.aramLogo} alt="Aram's logo" className="logo" />
        {/* Navigation links and theme switch */}
        <div className="side-nav-container">
          <div className="navLinks" role="menu">
            <a href="#projects" className="navItems" role="menuitem">
              Projects
            </a>
            <a href="#capabilities" className="navItems" role="menuitem">
              Capabilities
            </a>
            <Link to="/contact" className="navItems" role="menuitem">
              Contact
            </Link>
          </div>
          <div className="switch" aria-label="Theme Switch">
            <Switch
              checked={isDark}
              className="switch"
              aria-label="Toggle dark mode"
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
                  <img
                    src={Icons.lightMode}
                    width={20}
                    height={20}
                    alt="Light mode icon"
                  />
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
                  <img
                    src={Icons.darkMode}
                    width={20}
                    height={20}
                    alt="Dark mode icon"
                  />
                </div>
              }
              onChange={toggleTheme}
            />
          </div>
        </div>
        {/* Hamburger icon for mobile view */}
        <div
          className="hamburger-icon"
          onClick={toggleMenu}
          role="button"
          aria-expanded={selected}
          aria-controls="menu-list"
        >
          <img
            src={selected ? navbarIcons.close : navbarIcons.menu}
            alt="menu toggle"
          />
        </div>
      </nav>
      {/* Hamburger menu content */}
      <div
        id="menu-list"
        className={`hamburger-menu ${selected ? "show" : "hide"}`}
      >
        <div className="navLinks-responsive" role="menu">
          <a
            href="#projects"
            className="navItems fadeIn"
            onClick={closeMenuWithDelay}
            role="menuitem"
          >
            Projects
          </a>
          <a
            href="#capabilities"
            className="navItems fadeIn"
            onClick={closeMenuWithDelay}
            role="menuitem"
          >
            Capabilities
          </a>
          <Link
            to="/contact"
            className="navItems fadeIn"
            onClick={closeMenuWithDelay}
            role="menuitem"
          >
            Contact
          </Link>
          <button
            className="viewWorkButton fadeIn"
            onClick={closeMenuWithDelay}
            aria-label="Contact Me"
          >
            Contact Me
          </button>
        </div>
        <div className="switch fadeIn" aria-label="Theme Switch">
          <Switch
            checked={isDark}
            className="switch"
            aria-label="Toggle dark mode"
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
                <img
                  src={Icons.lightMode}
                  width={20}
                  height={20}
                  alt="Light mode icon"
                />
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
                <img
                  src={Icons.darkMode}
                  width={20}
                  height={20}
                  alt="Dark mode icon"
                />
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
