import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';

const galleryImages = [
  "https://kiantechnologies.in/assets/img/gallery/g-1.jpg",
  "https://kiantechnologies.in/assets/img/gallery/g-2.jpg",
  "https://kiantechnologies.in/assets/img/gallery/g-3.jpg",
  "https://kiantechnologies.in/assets/img/gallery/g-4.jpg",
  "https://kiantechnologies.in/assets/img/gallery/g-5.jpg",
  "https://kiantechnologies.in/assets/img/gallery/g-6.jpg"
];

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-col" data-aos="fade-up">
          <img
            src="https://kiantechnologies.in/assets/img/logo/logo12.png"
            alt="Kian Logo"
            className="footer-logo"
          />
          <p>
            Based in Bhilai, India, Kian Technologies is a premier provider of IT Security Training
            and Services, dedicated to empowering corporations and aspiring IT professionals.
          </p>
        </div>

        {/* Useful Links */}
        <div className="footer-col" data-aos="fade-up" data-aos-delay="100">
          <h4>Useful Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Course</li>
            <li>Contact Us</li>
            <li>Registration</li>
          </ul>
        </div>

        {/* Account Info */}
        <div className="footer-col" data-aos="fade-up" data-aos-delay="200">
          <h4>Account Info</h4>
          <ul>
            <li>Teacher</li>
            <li>Blog Details</li>
            <li>Casestudy</li>
            <li>Masterclass</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Photo Gallery */}
        <div className="footer-col gallery-col" data-aos="fade-up" data-aos-delay="300">
          <h4>Photo Gallery</h4>
          <div className="gallery">
            {galleryImages.map((src, index) => (
              <img key={index} src={src} alt={`gallery-${index}`} className="gallery-img" />
            ))}
          </div>
        </div>
      </div>

      {/* Social + Newsletter */}
      <div className="footer-bottom" data-aos="fade-up">
        <div className="social-icons">
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter"></i>
        </div>
        <div className="newsletter">
          <input type="email" placeholder="Email Address..." />
          <button>Subscribe Now</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
