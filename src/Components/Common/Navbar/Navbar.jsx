import React, { useState } from "react";
import { images } from "../../../assets/Images";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { Icons } from "../../../assets/Icons";
import "./Navbar.css";
// isDark prop is being imported from app.jsx for the toggle button / localStorage.
// setIsDark will accept the dark/light theme state and send it back to app.jsx
export default function Navbar({ isDark, toggleTheme }) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <nav className="custom-hr navBar flex">
        <img src={images.aramLogo} alt="logo" />
        <div className="side-nav-container">
          <div className="navLinks">
            <Link className="navItems">Projects</Link>
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
      </nav>
    </>
  );
}
