// src/Pages/PagesApp.js
import React from 'react';
import Teacher from './Teacher';
import Blog from './Blog';
import FacultyDetails from './FacultyDetails';
import CaseStudies from './CaseStudies';
import Masterclass from './Masterclass';
import './Pages.css';

const PagesApp = () => {
  return (
    <div className="pages-container">
      <Teacher />
      <Blog />
      <FacultyDetails />
      <CaseStudies />
      <Masterclass />
    </div>
  );
};

export default PagesApp;