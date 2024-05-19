import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Common/Navbar/Navbar";
import Hero from "../Components/Common/Hero/Hero";

export default function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
