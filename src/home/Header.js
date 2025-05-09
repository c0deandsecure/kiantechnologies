import React from "react";
import "./Header.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const images = [
    "https://images.unsplash.com/photo-1531497865144-0464ef8fb9c0",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          KT <span>KIAN TECHNOLOGIES</span>
        </div>
        <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/courses">COURSES</Link></li>
          <li><Link to="#contact">CONTACT US</Link></li>
          <li>PAGES</li>
          <li>REGISTER</li>
        </ul>
      </nav>

      <Slide duration={5000} transitionDuration={800} arrows autoplay infinite>
        {images.map((url, index) => (
          <div
            className="each-slide"
            key={index}
            style={{ backgroundImage: `url(${url})` }}
          >
            <div className="overlay">
              <motion.h3
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                EDUCATION & TRAINING ORGANIZATION
              </motion.h3>
              <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <b>Get</b> Certified <br />
                <b>Get</b> Ahead
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Kian Technologies offers authorized training for EC-Council
                certifications, including <b>CEH</b>, <b>CHFI</b>, <b>ECSA</b>,
                <b> LPT</b>, and <b>CISSP</b> programs.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="cta-button"
              >
                CONTACT US <FaArrowRight />
              </motion.button>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Header;
