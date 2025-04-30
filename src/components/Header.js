import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Kian Technologies</div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Register</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;