import React from "react";
import "./Capabilities.css";

export default function Capabilities() {
  return (
    <div className="wrapper">
      <h1>Capabilities</h1>
      <div className="Capabilities--Wrapper">
        <div className="Capabilities--Left--Container">
          <span className="headings">Web Design</span>
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
