import React, { useEffect, useState } from "react";
import { images } from "../../../assets/Images";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

  // onClick handler to scroll to proper #id
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Reduced stagger for faster animation
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section>
      <header>
        <div className="hero">
          <motion.div
            className="hero__left-side"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="mobile-pic-continer">
              {isDark ? (
                <img
                  src={images.darkModeBlueBg}
                  className="dark-img"
                  alt="Dark mode background"
                />
              ) : (
                <img src={images.lightModeImage} alt="Light mode background" />
              )}
            </div>
            <motion.div variants={itemVariants}>
              <div className="hello">
                <p>Hello there, I'm Aram</p>
                <img
                  className="emoji"
                  src={images.handEmoji}
                  alt="waving hand Emoji"
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h1 className="fullStackWebDeveloper">
                Full Stack Web Developer
              </h1>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="hero-description-container"
            >
              <p>
                I create user-centric web & mobile applications that drive
                conversions.
                <span className="extra-text">
                  {" "}
                  Let's transform your next idea into a successful project!
                </span>
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="btnViewWork">
              <button
                className="viewWorkButton"
                onClick={(e) => handleScroll(e, "#projects")}
                aria-label="View My Work"
              >
                View My Work
              </button>
              <a
                href="#capabilities"
                className="aboutMe"
                onClick={(e) => handleScroll(e, "#capabilities")}
                aria-label="More About Me"
              >
                More About Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__right-side"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              src={!isDark ? images.aramLightMode : images.aramDarkImage}
              alt="Aram Karapetyan Web Developer"
            />
          </motion.div>
        </div>
      </header>
    </section>
  );
}
