import React from "react";
import "./cta.css";
export default function Cta() {
  return (
    <div className="cta-wrapper">
      <div className="cta-left">
        <h1>
          In need of a<br />
          designer/developer?
        </h1>
        <p>
          <span className="pulse"></span>
          I’m currently available for work.
        </p>

        <button className="viewWorkButton">Send a message</button>
      </div>

      <div className="cta-right">
        <p>+1310 424 8341</p>
        <p>aramk007@gmail.com</p>
      </div>
    </div>
  );
}
