import "./Skills.css";
import React, { useState } from "react";
import SoftwareSkills from "./SoftwareSkills";
import MarketingSkills from "./MarketingSkills";
import DesignSkills from "./DesignSkills";

export default function Skills() {
  const [selected, setSelected] = useState("software");

  return (
    <div className="skillsWrapper">
      <h1 className="skillsAndToolsWords">Skills & Tools</h1>
      <p className="forThoseThatKnow">
        For those that know what to look for...
      </p>

      <div className="toggle-container">
        <div className="radio-block">
          <input
            type="radio"
            name="options"
            id="option-one"
            value="software"
            checked={selected === "software"}
            onChange={() => setSelected("software")}
          />
          <label htmlFor="option-one">Software</label>
          <input
            type="radio"
            name="options"
            id="option-three"
            value="design"
            checked={selected === "design"}
            onChange={() => setSelected("design")}
          />
          <label htmlFor="option-three">Web Design</label>
          <input
            type="radio"
            name="options"
            id="option-two"
            value="marketing"
            checked={selected === "marketing"}
            onChange={() => setSelected("marketing")}
          />
          <label htmlFor="option-two">Marketing</label>

          <span className="selected" aria-hidden="true"></span>
        </div>
      </div>
      {selected === "software" && <SoftwareSkills />}
      {selected === "marketing" && <MarketingSkills />}
      {selected === "design" && <DesignSkills />}
    </div>
  );
}
