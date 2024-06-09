import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";
import { projectIcons } from "../../assets/Icons";
import CustomModal from "../Common/Modal/Modal";
import { projects } from "../../Constants/Projects/projects";

// Main Projects component
export default function Projects() {
  const [modalIsOpen, setIsOpen] = useState(false); // State to manage modal visibility
  const [selectedProject, setSelectedProject] = useState(null); // State to manage the selected project for the modal
  const sectionRef = useRef(null); // Ref to keep track of the projects section
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility of the section for animation

  // Function to open the modal and set the selected project
  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  // useEffect hook to set up the IntersectionObserver
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
    <>
      <h1 className="projects-heading">Projects</h1>
      {/* Projects wrapper with conditional animate class based on visibility */}
      <div
        ref={sectionRef}
        id="projects"
        className={`projects-wrapper ${isVisible ? "animate" : ""}`}
      >
        {/* First set of projects */}
        <div className="project-top">
          {projects.slice(0, 2).map((item) => (
            <div key={item.id} className="project-item">
              <div className="project-image-container">
                <img
                  onClick={() => openModal(item)}
                  src={item.image}
                  className="project-images"
                  alt={item.name}
                />
                <div
                  className="project-overlay"
                  onClick={() => openModal(item)}
                >
                  <div className="overlay-content">
                    <FontAwesomeIcon icon={faHandPointer} size="2x" />
                    <p>Explore</p>
                  </div>
                </div>
              </div>
              <div className="project-button">
                <p>{item.name}</p>
                <button onClick={() => openModal(item)}>
                  <img src={projectIcons.arrow_right} alt="arrow right" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="spacer"></div>
        {/* Second set of projects */}
        <div className="project-top">
          {projects.slice(2, 4).map((item) => (
            <div key={item.id} className="project-item">
              <div className="project-image-container">
                <img
                  onClick={() => openModal(item)}
                  src={item.image}
                  className="project-images"
                  alt={item.name}
                />
                <div
                  className="project-overlay"
                  onClick={() => openModal(item)}
                >
                  <div className="overlay-content">
                    <FontAwesomeIcon icon={faHandPointer} size="2x" />
                    <p>Explore</p>
                  </div>
                </div>
              </div>
              <div className="project-button">
                <p>{item.name}</p>
                <button onClick={() => openModal(item)}>
                  <img src={projectIcons.arrow_right} alt="arrow right" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom modal to show project details */}
      {selectedProject && (
        <CustomModal
          setIsOpen={setIsOpen}
          modalIsOpen={modalIsOpen}
          project={selectedProject}
        />
      )}
    </>
  );
}
