// src/AboutUs/AboutUsApp.js
import React from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";

const AboutUsApp = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "2rem" }}>
        <h1>About Kian Technologies</h1>
        <p>
          Welcome to Kian Technologies! We are an EC-Council authorized training partner providing top-tier cybersecurity and ethical hacking courses.
        </p>
        {/* Add more about content here */}
      </div>
      <Footer />
    </>
  );
};

export default AboutUsApp;
