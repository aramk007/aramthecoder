import React, { useEffect, useRef } from "react";
import "./Capabilities.css";
import { designIcons } from "../../assets/Icons";

export default function Capabilities() {
  const leftContainerRef = useRef(null);
  const centerContainerRef = useRef(null);
  const rightContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    }, options);

    const leftContainer = leftContainerRef.current;
    const centerContainer = centerContainerRef.current;
    const rightContainer = rightContainerRef.current;

    if (leftContainer) observer.observe(leftContainer);
    if (centerContainer) observer.observe(centerContainer);
    if (rightContainer) observer.observe(rightContainer);

    return () => {
      if (leftContainer) observer.unobserve(leftContainer);
      if (centerContainer) observer.unobserve(centerContainer);
      if (rightContainer) observer.unobserve(rightContainer);
    };
  }, []);

  return (
    <div id="capabilities" className="wrapper">
      <h1>Capabilities</h1>
      <div className="Capabilities--Wrapper">
        <div ref={leftContainerRef} className="Capabilities--Left--Container">
          <div className="icons">
            <img src={designIcons.heart} alt="Website Design Icon" />
          </div>
          <ul className="headings">Web Design</ul>
          <li>Mobile-Friendly Websites</li>
          <li>Design Frameworks</li>
          <li>UI / UX Design</li>
          <li>Accessibility Design</li>
          <li>Wireframing & Prototyping</li>
          <li>Design Audits</li>
          <li>Usability Testing</li>
        </div>
        <div
          ref={centerContainerRef}
          className="Capabilities--Center--Container"
        >
          <div className="icons">
            <img src={designIcons.developer} alt="Web Developer Icon" />
          </div>
          <ul className="headings">Web Development</ul>
          <li>Software Engineering</li>
          <li>Mobile-Friendly Websites</li>
          <li>Interactive Websites</li>
          <li>Custom Applications</li>
          <li>SaaS Solutions</li>
          <li>Mobile Applications</li>
          <li>Unit / Integration Testing</li>
        </div>
        <div ref={rightContainerRef} className="Capabilities--Right--Container">
          <div className="icons">
            <img
              className="icons"
              src={designIcons.rocket}
              alt="Marketing Icon"
            />
          </div>
          <ul className="headings">Marketing</ul>
          <li>Search Engine Optimization "SEO"</li>
          <li>Search Engine Marketing "SEM"</li>
          <li>Google Ads (formerly AdWords)</li>
          <li>Load Speed Optimization</li>
          <li>Conversion Rate Optimization (CRO)</li>
          <li>Lower Bounce Rate</li>
          <li>Enhance User Engagement</li>
          <li>Marketing Automation</li>
        </div>
      </div>
    </div>
  );
}
