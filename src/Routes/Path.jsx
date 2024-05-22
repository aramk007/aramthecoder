import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Common/Navbar/Navbar";
import Hero from "../Components/Common/Hero/Hero";
import Footer from "../Components/Common/Footer/Footer";
import Skills from "../Components/Skills/Skills";
// doing prop drilling to bring toggle props from app.jsx to path, then to navbar
export default function Path({ isDark, toggleTheme }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar isDark={isDark} toggleTheme={toggleTheme} />
              <Hero />
              <Skills />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
