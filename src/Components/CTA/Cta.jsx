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
        <p>+316 57 041 097</p>
        <p>hi@rubenkuipers.design</p>
      </div>
    </div>
  );
}
