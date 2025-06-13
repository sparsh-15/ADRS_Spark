// /routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import CoursePage from "./pages/CoursePage"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar";
import WhyADRSSpark from "./pages/WhyADRSspark";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import AllCourses from "./pages/AllCoursesPage";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/why-adrs-spark" element={<WhyADRSSpark />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/allcourses" element={<AllCourses />} />
      </Routes>
        
      <Footer/>
    </>
  );
};

export default AppRoutes;
