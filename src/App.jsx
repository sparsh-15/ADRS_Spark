// /routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import CoursePage from "./pages/CoursePage"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar";
import WhyADRSSpark from "./pages/WhyADRSspark";

const AppRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses/:id" element={<CoursePage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/why-adrs-spark" element={<WhyADRSSpark/>} />
    </Routes>
    </>
  );
};

export default AppRoutes;
