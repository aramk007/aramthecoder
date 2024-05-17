import React, { useState } from "react";
import { images } from "../../../assets/Images";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { Icons } from "../../../assets/Icons";
import "./Navbar.css";
export default function Navbar() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <nav className="custom-hr navBar flex">
        <img src={images.aramLogo} alt="logo" />
        <div className="side-nav-container">
          <div className="navLinks">
            <Link className="navItems">Home</Link>
            <Link className="navItems">Projects</Link>
            <Link className="navItems">Collaboration</Link>
            <Link className="navItems">About</Link>
          </div>
          <div>
            <Switch
              checked={checked}
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
              onChange={() => setChecked(!checked)}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
