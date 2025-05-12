// src/components/CourseCard.jsx
import React from 'react';
import './CourseListing.css';

const CourseCard = ({ title, image, instructor, duration }) => {
  return (
    <div className="course-card" data-aos="fade-up">
      <img src={image} alt={title} />
      <div className="details">
        <h3>{title}</h3>
        <p className="meta">By {instructor} • {duration}</p>
      </div>
    </div>
  );
};

export default CourseCard;
