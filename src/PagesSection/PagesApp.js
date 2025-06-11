// src/Pages/PagesApp.js
import React from 'react';
import PagesHero from './pagesHero';
import Teacher from './Teacher';
import Blog from './Blog';
import FacultyDetails from './FacultyDetails';
import CaseStudies from './CaseStudies';

import Contact from '../home/Contact';
import './Pages.css';

const PagesApp = () => {
  return (
    <div className="pages-container">
      <PagesHero />
      {/* The following components can be rendered conditionally based on the route or user interaction */}
      <Teacher />
      <Blog />
      <FacultyDetails />
      <CaseStudies />
      <Contact />
    </div>
  );
};

export default PagesApp;