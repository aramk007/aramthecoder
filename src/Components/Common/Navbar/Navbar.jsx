import React, { useState } from "react";
import { images } from "../../../assets/Images";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { Icons, navbarIcons } from "../../../assets/Icons";
import "./Navbar.css";
// isDark prop is being imported from app.jsx for the toggle button / localStorage.
// setIsDark will accept the dark/light theme state and send it back to app.jsx
export default function Navbar({ isDark, toggleTheme }) {
  const [checked, setChecked] = useState(false);

  const [selected, setSelected] = useState(false);

  return (
    <>
      <nav className="custom-hr navBar flex">
        <img src={images.aramLogo} alt="logo" />
        <div className="side-nav-container">
          <div className="navLinks">
            <a href="#projects" className="navItems">
              Projects
            </a>
            <Link className="navItems">Capabilities</Link>
            <Link className="navItems">Contact</Link>
          </div>
          <div className="switch">
            <Switch
              checked={isDark}
              className="switch"
              checkedHandleIcon={
                <>
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
                </>
              }
              uncheckedIcon={false}
              checkedIcon={false}
              uncheckedHandleIcon={
                <>
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
                </>
              }
              onChange={toggleTheme}
            />
          </div>
        </div>

        <div className="hamburger-icon">
          {!selected ? (
            <>
              <img
                src={navbarIcons.menu}
                alt="menu"
                onClick={() => setSelected(!selected)}
              />
            </>
          ) : (
            <>
              <img
                src={navbarIcons.close}
                alt="menu"
                onClick={() => setSelected(!selected)}
              />
            </>
          )}
        </div>
      </nav>

      <div className={`hamburger-menu ${selected ? "show" : "hide"}`}>
        <div className="navLinks-responsive">
          <a href="#projects" className="navItems">
            Projects
          </a>
          <Link className="navItems">Capabilities</Link>
          <Link className="navItems">Contact</Link>
          <button className="viewWorkButton">Contact Me</button>
        </div>
        <div className="switch">
          <Switch
            checked={isDark}
            className="switch"
            checkedHandleIcon={
              <>
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
              </>
            }
            uncheckedIcon={false}
            checkedIcon={false}
            uncheckedHandleIcon={
              <>
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
              </>
            }
            onChange={toggleTheme}
          />
        </div>

        <div className="nav-footer">
          <p>
            I’m currently available for work
            <span className="pulse"></span>
          </p>
        </div>
      </div>
    </>
  );
}
