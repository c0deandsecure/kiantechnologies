// src/components/CourseListing.jsx
import React, { useState } from 'react';
import CourseCard from './CourseCard';
import './CourseListing.css';

const coursesData = [
  {
    title: 'Web Development Bootcamp',
    image: 'https://via.placeholder.com/80',
    instructor: 'John Doe',
    duration: '8 weeks',
  },
  {
    title: 'Ethical Hacking Masterclass',
    image: 'https://via.placeholder.com/80',
    instructor: 'Alice Smith',
    duration: '6 weeks',
  },
  {
    title: 'React for Beginners',
    image: 'https://via.placeholder.com/80',
    instructor: 'Mike Johnson',
    duration: '4 weeks',
  },
];

const CourseListing = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('Popularity');

  return (
    <div className="course-container">
      <div className="filter-bar">
        <div className="dropdown-group">
          <label htmlFor="view">View By</label>
          <select id="view" className="dropdown">
            <option>9 Course</option>
            <option>7 Course</option>
            <option>2 Course</option>
            <option>0 Course</option>
          </select>
        </div>

        <div className="dropdown-group">
          <label htmlFor="sort">Sort By</label>
          <select
            id="sort"
            className="dropdown"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Popularity</option>
            <option>Most Read</option>
            <option>Most View</option>
            <option>Most Shared</option>
          </select>
        </div>

        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            🔳
          </button>
          <button
            className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            📃
          </button>
        </div>
      </div>

      <div className={`course-list ${viewMode}`}>
        {coursesData.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
