import React from "react";
import Footer from "../home/Footer";
import AboutHero from "./AboutHero";
import "./AboutUs.css";

const AboutUsApp = () => {
  return (
    <>
      
      <AboutHero />
      {/* Additional About content below */}
      <div className="about-container">
        <h2>Welcome to Kian Technologies</h2>
        <p>
          We are an EC-Council certified training partner offering specialized
          courses in cybersecurity and ethical hacking.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsApp;
