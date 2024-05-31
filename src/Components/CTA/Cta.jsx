import React, { useEffect, useRef } from "react";
import "./cta.css";

export default function Cta() {
  const ctaRef = useRef(null);

  // Function to handle intersection observer callback
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };

  // useEffect hook to setup the intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the element is in view
    });

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <div className="cta-wrapper" ref={ctaRef}>
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
