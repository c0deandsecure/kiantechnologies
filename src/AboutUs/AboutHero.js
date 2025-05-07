import React from "react";
import "./AboutUs.css"; // Make sure this path is correct
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-hero">
      <div className="overlay">
        <div className="hero-content" data-aos="fade-up">
          <h1 data-aos="zoom-in">
            Genius <span>About</span>
          </h1>
          <div className="breadcrumb" data-aos="fade-up" data-aos-delay="300">
            <a href="/">HOME</a>
            <span className="current">ABOUT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
