import React from "react";
import { Icons } from "../../assets/Icons";
import { designIcons } from "../../assets/Icons";

export default function DesignSkills() {
  return (
    <div className="skills-container">
      <div className="skills">
        <img src={designIcons.figma} alt="" />
        <p>Figma</p>
      </div>
      <div className="skills">
        <img src={designIcons.tailwind} alt="" />
        <p>Tailwind</p>
      </div>
      <div className="skills">
        <img src={designIcons.bootstrap} alt="" />
        <p>Bootstrap</p>
      </div>
      <div className="skills">
        <img src={designIcons.html5} alt="" />
        <p>HTML5</p>
      </div>
      <div className="skills">
        <img src={designIcons.css3} alt="" />
        <p>CSS3</p>
      </div>
      <div className="skills">
        <img src={designIcons.accessibility} alt="" />
        <p>Accessibility</p>
      </div>
      <div className="skills">
        <img src={designIcons.uiUx} alt="" />
        <p>UI / UX</p>
      </div>
      <div className="skills">
        <img src={designIcons.photoshop} alt="" />
        <p>Photoshop</p>
      </div>
      <div className="skills">
        <img src={designIcons.canva} alt="" />
        <p>Canva</p>
      </div>
      <div className="skills">
        <img src={designIcons.userJourney} alt="" />
        <p>User Journey</p>
      </div>
      <div className="skills">
        <img src={designIcons.wordpress} alt="" />
        <p>Wordpress</p>
      </div>
      <div className="skills">
        <img src={designIcons.ecommerce} alt="" />
        <p>E-Commerce</p>
      </div>
    </div>
  );
}
