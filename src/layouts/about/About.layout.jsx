import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import AboutSection from "../../components/about-section/AboutSection.component";
import YoutubeSection from "../../components/youtube-section/YoutubeSection.component";
import BlogSection from "../../components/blog-section/BlogSection.component";

const About = () => {
  const [cartItems,setCartItems] = useState({ context: 'random', toolId: 'facts/plants/' });

  return (
    <>
      <Outlet />
      <div className="mr-2 ml-2 mt-5 mb-5">
        <AboutSection />
        <BlogSection />
        <YoutubeSection/>
      </div>
    </>
  );
};

export default About;
