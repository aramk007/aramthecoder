import React, { useEffect, useState } from "react";
import { images } from "../../../assets/Images";
import "./Hero.css";

export default function Hero() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsDark(JSON.parse(localStorage.getItem("isDark")));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <section>
        <header>
          <div className="hero">
            <div className="hero__left-side">
              <div className="hello">
                <p>Hello there, I'm Aram</p>
                <img
                  className="emoji"
                  src={images.handEmoji}
                  alt="waving hand Emoji"
                />
              </div>
              <h1 className="fullStackWebDeveloper">
                Full Stack Web Developer
              </h1>
              <div className="hero-description-container">
                <p>
                  I create user-centric web & Mobile applications that drive
                  conversions. Let's transform your next idea into a successful
                  project!
                </p>
              </div>
              <div className="btnViewWork">
                <button className="viewWorkButton">View My Work</button>
                <a className="aboutMe" href="#">
                  More About Me
                </a>
              </div>
            </div>

            <div className="hero__right-side">
              <img
                src={!isDark ? images.aramLightMode : images.aramDarkImage}
                alt="Aram Karapetyan Web Developer"
              />
            </div>
          </div>
        </header>
      </section>
    </>
  );
}
