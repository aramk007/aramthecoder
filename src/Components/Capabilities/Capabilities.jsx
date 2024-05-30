import React from "react";
import "./Capabilities.css";

export default function Capabilities() {
  return (
    <div id="capabilities" className="wrapper">
      <h1>Capabilities</h1>
      <div className="Capabilities--Wrapper">
        <div className="Capabilities--Left--Container">
          <span className="headings">Web Design</span>
          <p>Interface Design</p>
          <p>Aesthetic Design</p>
          <p>Brand Identities</p>
          <p>Design Frameworks</p>
          <p>Responsive Design</p>
          <p>Mobile-Friendly Websites</p>
          <p>Modular Layout Systems</p>
          <p>Brand Standards</p>
        </div>
        <div className="Capabilities--Center--Container">
          <span className="headings">Web Development</span>
        </div>
        <div className="Capabilities--Right--Container">
          <span className="headings">Marketing</span>
        </div>
      </div>
    </div>
  );
}
