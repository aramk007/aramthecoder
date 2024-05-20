import "./Skills.css";
import React, { useState } from "react";
import SoftwareSkills from "./SoftwareSkills";
import MarketingSkills from "./MarketingSkills";
import DesignSkills from "./DesignSkills";

export default function Skills() {
  // useState to show selected toggle state, fallback is software
  const [selected, setSelected] = useState("software");
  return (
    <div className="skillsWrapper">
      <h1 className="skillsAndToolsWords">Skills & Tools</h1>
      <p className="forThoseThatKnow">
        For those that know what to look for...
      </p>
      <div className="toggle-container">
        <div
          className={`toggler ${selected === "software" ? "selected" : null}`}
          onClick={() => setSelected("software")}
        >
          <p>Software</p>
        </div>
        <div
          className={`toggler ${selected === "design" ? "selected" : null}`}
          onClick={() => setSelected("design")}
        >
          <p>Design</p>
        </div>
        <div
          className={`toggler ${selected === "marketing" ? "selected" : null}`}
          onClick={() => setSelected("marketing")}
        >
          <p>Marketing</p>
        </div>
      </div>
      {selected === "software" && <SoftwareSkills />}
      {selected === "marketing" && <MarketingSkills />}
      {selected === "design" && <DesignSkills />}
    </div>
  );
}
