// src/components/CourseCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CourseCard = ({ course, viewMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        className="course-card list-view"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        whileHover="hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="course-image">
          <img src={course.image} alt={course.title} />
        </div>
        <div className="course-details">
          <div className="course-header">
            <h3>{course.title}</h3>
            <div className="course-meta">
              <span className="provider">{course.provider}</span>
              <span className="students">{course.students}</span>
              <span className="rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                {course.rating}
              </span>
            </div>
          </div>
          <div className="course-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="course-footer">
            <div className="course-info">
              <div className="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>Starts: {course.starts}</span>
              </div>
              <div className="info-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{course.duration}</span>
              </div>
            </div>
            <div className="course-price">
              <span>{course.price}</span>
              <button className="enroll-btn">
                Enroll Now
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h13M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="course-card grid-view"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="course-image">
        <img src={course.image} alt={course.title} />
        <div className="popularity-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
          <span>{course.popularity}% Popular</span>
        </div>
      </div>
      <div className="course-details">
        <div className="course-header">
          <h3>{course.title}</h3>
          <div className="course-meta">
            <span className="provider">{course.provider}</span>
            <span className="students">{course.students}</span>
          </div>
        </div>
        <div className="course-footer">
          <div className="course-info">
            <div className="info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{course.duration}</span>
            </div>
            <div className="rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>{course.rating}</span>
            </div>
          </div>
          <div className="course-price">
            <span>{course.price}</span>
            <button className="enroll-btn">
              Enroll Now
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h13M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;