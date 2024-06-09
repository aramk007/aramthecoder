import "./Skills.css";
import React, { useState, useEffect, useRef } from "react";
import SoftwareSkills from "./SoftwareSkills";
import MarketingSkills from "./MarketingSkills";
import DesignSkills from "./DesignSkills";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Skills() {
  const [selected, setSelected] = useState("software"); // State to manage the selected skill category
  const sectionRef = useRef(null); // Ref to keep track of the skills section
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility of the section for animation

  // useEffect hook to set up the Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If the section is in the viewport
          setIsVisible(true); // Set visibility to true
          observer.disconnect(); // Disconnect the observer once triggered
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    // Clean up the observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`skillsWrapper ${isVisible ? "animate" : ""}`}
    >
      <h1 className="skillsAndToolsWords">Skills & Tools</h1>
      <div className="para-container">
        <p className="forThoseThatKnow">
          For those that know what to look for...
        </p>
      </div>

      <div
        className="toggle-container"
        role="radiogroup"
        aria-labelledby="skills-category-label"
      >
        <div className="radio-block">
          <legend id="skills-category-label" className="sr-only">
            Select a skills category
          </legend>
          {/* Radio buttons to switch between skill categories */}
          <input
            type="radio"
            name="options"
            id="option-one"
            value="software"
            checked={selected === "software"}
            onChange={() => setSelected("software")}
            aria-labelledby="label-option-one"
          />
          <label id="label-option-one" htmlFor="option-one">
            Software
          </label>
          <input
            type="radio"
            name="options"
            id="option-three"
            value="design"
            checked={selected === "design"}
            onChange={() => setSelected("design")}
            aria-labelledby="label-option-three"
          />
          <label id="label-option-three" htmlFor="option-three">
            Web Design
          </label>
          <input
            type="radio"
            name="options"
            id="option-two"
            value="marketing"
            checked={selected === "marketing"}
            onChange={() => setSelected("marketing")}
            aria-labelledby="label-option-two"
          />
          <label id="label-option-two" htmlFor="option-two">
            Marketing
          </label>

          <span className="selected" aria-hidden="true"></span>
        </div>
      </div>
      <div className="skills-container">
        <TransitionGroup component={null}>
          {/* Conditionally render skill sections with transition effects */}
          {selected === "software" && (
            <CSSTransition key="software" timeout={500} classNames="fade">
              <div
                className="skill-section"
                role="region"
                aria-labelledby="software-skills"
              >
                <h2 id="software-skills" className="sr-only">
                  Software Skills
                </h2>
                <SoftwareSkills />
              </div>
            </CSSTransition>
          )}
          {selected === "marketing" && (
            <CSSTransition key="marketing" timeout={500} classNames="fade">
              <div
                className="skill-section"
                role="region"
                aria-labelledby="marketing-skills"
              >
                <h2 id="marketing-skills" className="sr-only">
                  Marketing Skills
                </h2>
                <MarketingSkills />
              </div>
            </CSSTransition>
          )}
          {selected === "design" && (
            <CSSTransition key="design" timeout={500} classNames="fade">
              <div
                className="skill-section"
                role="region"
                aria-labelledby="design-skills"
              >
                <h2 id="design-skills" className="sr-only">
                  Design Skills
                </h2>
                <DesignSkills />
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </div>
  );
}
