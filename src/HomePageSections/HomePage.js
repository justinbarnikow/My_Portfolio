import React from 'react'
import ScrollToTop from '../ScrollButton/ScrollToTop';
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

function HomePage() {
  return (
      <div className="homePage">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <ScrollToTop />
      </div>
  );
}

export default HomePage;