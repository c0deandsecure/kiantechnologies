import React from 'react';
import './Contact.css'; // Import the CSS

const Contact = () => {
  return (
    <section className="registration-section">
      <div className="container">
        
        {/* Left Side - Registration Form */}
        <div className="form-container">
          <div className="form-card">
            <h2>Get a <span>Free</span> Registration.</h2>
            <p>Fill the form to get your free demo session</p>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="text" placeholder="Your Number" required />
              <input type="email" placeholder="Email Address" required />
              <select required>
                <option value="">Select Course</option>
                <option value="Ethical Hacking">Ethical Hacking</option>
                <option value="Python Programming">Python Programming</option>
                <option value="Data Science">Data Science</option>
              </select>
              <input type="date" required />
              <textarea placeholder="Message"></textarea>
              <button type="submit">SUBMIT REQUEST</button>
            </form>
          </div>
        </div>

        {/* Right Side - About Content */}
        <div className="content-container">
          <h5>SORT ABOUT US</h5>
          <h1>We are <span>Best Course in Bhilai</span> </h1>
          <p className="subtitle">
            Revolutionize life worldwide through cutting-edge innovation, advanced technology, and interdisciplinary education, setting new benchmarks for excellence in every field.
          </p>
          <p className="description">
            Kian Technologies is dedicated to shaping future cybersecurity experts through advanced training in ethical hacking, penetration testing, and network security. We provide hands-on experience with the latest tools and techniques, guided by industry professionals. Our mission is to empower students to protect the digital world with cutting-edge skills and knowledge.
          </p>
          <ul>
            <li>Versatile and skilled management professionals</li>
            <li>We Connect Learners To The Best Universities From Around The World</li>
            <li>Our Mission: Increasing Global Access To Quality Education</li>
            <li>International affiliations with leading proprietary’s like, EC-Council, Comptia etc</li>
          </ul>
          <div className="buttons">
            <a href="#about" className="btn about">ABOUT US</a>
            <a href="#contact" className="btn contact">CONTACT US</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
