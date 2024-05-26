import React from "react";
import { Icons } from "../../assets/Icons";

export default function SoftwareSkills() {
  return (
    <div className="skills-container">
      <div className="skills">
        <img src={Icons.react} alt="" />
        <p>React</p>
      </div>
      <div className="skills">
        <img src={Icons.vanillaJs} alt="" />
        <p>Vanilla JS</p>
      </div>
      <div className="skills">
        <img src={Icons.nodeJs} alt="" />
        <p>NodeJs</p>
      </div>
      <div className="skills">
        <img src={Icons.nextJs} alt="" />
        <p>NextJs</p>
      </div>
      <div className="skills">
        <img className="Jsx" src={Icons.jsxIcon} alt="" />
        <p>JSX</p>
      </div>
      <div className="skills">
        <img src={Icons.mongoose} alt="" />
        <p>Mongoose</p>
      </div>
      <div className="skills">
        <img src={Icons.mongodb} alt="" />
        <p>MongoDB</p>
      </div>
      <div className="skills">
        <img src={Icons.redux} alt="" />
        <p>Redux</p>
      </div>

      <div className="skills">
        <img src={Icons.gatsby} alt="" />
        <p>Gatsby</p>
      </div>

      <div className="skills">
        <img src={Icons.react} alt="" />
        <p>Rest API</p>
      </div>
      <div className="skills">
        <img src={Icons.express} alt="" />
        <p>ExpressJs</p>
      </div>
      <div className="skills">
        <img src={Icons.sass} alt="" />
        <p>Sass</p>
      </div>
      <div className="skills">
        <img src={Icons.git} alt="" />
        <p>Git</p>
      </div>
      <div className="skills">
        <img src={Icons.aws} alt="" />
        <p>AWS</p>
      </div>
      <div className="skills">
        <img src={Icons.vercel} alt="" />
        <p>Vercel</p>
      </div>
    </div>
  );
}
