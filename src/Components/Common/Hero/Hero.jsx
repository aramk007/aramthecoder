import React, { useEffect, useState } from "react";
import { images } from "../../../assets/Images";
import "./Hero.css";
import { Link } from "react-router-dom";
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
              <div className="mobile-pic-continer">
                {isDark ? (
                  <>
                    <img
                      src={images.darkModeBlueBg}
                      className="dark-img"
                      alt="bg"
                    />
                  </>
                ) : (
                  <>
                    <img src={images.lightModeImage} alt="bg" />
                  </>
                )}
              </div>
              <div>
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
                    conversions.
                    <span className="extra-text">
                      {" "}
                      Let's transform your next idea into a successful project!
                    </span>
                  </p>
                </div>
                <div className="btnViewWork">
                  <button className="viewWorkButton">View My Work</button>
                  <Link className="aboutMe" to="/">
                    More About Me
                  </Link>
                </div>
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
