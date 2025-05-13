// src/components/CourseListing.jsx
import React, { useState } from 'react';
import CourseCard from './CourseCard';
import './CourseListing.css';

const coursesData = [
  {
    id: 1,
    title: 'Certified Ethical Hacking (CEH)',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    provider: 'EC-Council',
    students: '77 Students',
    duration: '4 Months',
    price: '$120.25',
    starts: '04-11-2024',
    category: 'IT Security',
    popularity: 95,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'IT Security and Ethical Hacking',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    provider: 'CISCO',
    students: '96 Students',
    duration: '4 Months',
    price: '$120.25',
    starts: '04-11-2024',
    category: 'IT Security',
    popularity: 88,
    rating: 4.6,
  },
  {
    id: 3,
    title: 'Computer Hacking Forensic Investigator (CHFI)',
    image: 'https://images.unsplash.com/photo-1563191911-e65f8655ebf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    provider: 'EC-Council',
    students: '20 Students',
    duration: '3 Months',
    price: '$110.50',
    starts: '05-01-2024',
    category: 'Forensics',
    popularity: 82,
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Linux Operating System',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    provider: 'Linux Foundation',
    students: '120 Students',
    duration: '2 Months',
    price: '$90.00',
    starts: '04-11-2024',
    category: 'Operating Systems',
    popularity: 78,
    rating: 4.7,
  },
  {
    id: 5,
    title: 'Advanced Penetration Testing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    provider: 'Offensive Security',
    students: '65 Students',
    duration: '6 Weeks',
    price: '$150.00',
    starts: '05-15-2024',
    category: 'IT Security',
    popularity: 90,
    rating: 4.9,
  },
  {
    id: 6,
    title: 'Network Security Fundamentals',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    provider: 'CISCO',
    students: '110 Students',
    duration: '8 Weeks',
    price: '$95.75',
    starts: '04-01-2024',
    category: 'Networking',
    popularity: 85,
    rating: 4.4,
  },
  {
    id: 7,
    title: 'Cybersecurity Essentials',
    image: 'https://images.unsplash.com/photo-1563770660941-10a63607739e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    provider: 'CompTIA',
    students: '150 Students',
    duration: '6 Weeks',
    price: '$85.00',
    starts: '04-22-2024',
    category: 'IT Security',
    popularity: 92,
    rating: 4.7,
  },
  {
    id: 8,
    title: 'Digital Forensics',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    provider: 'EC-Council',
    students: '45 Students',
    duration: '3 Months',
    price: '$130.00',
    starts: '05-08-2024',
    category: 'Forensics',
    popularity: 80,
    rating: 4.3,
  },
  {
    id: 9,
    title: 'Cloud Security',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    provider: 'AWS',
    students: '75 Students',
    duration: '2 Months',
    price: '$140.00',
    starts: '04-15-2024',
    category: 'Cloud Computing',
    popularity: 87,
    rating: 4.6,
  },
];

const CourseListing = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('Popularity');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories
  const categories = ['All Categories', ...new Set(coursesData.map(course => course.category))];

  // Filter and sort courses
  const filteredCourses = coursesData
    .filter(course => 
      (selectedCategory === 'All Categories' || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'Popularity') return b.popularity - a.popularity;
      if (sortBy === 'Rating') return b.rating - a.rating;
      if (sortBy === 'Price') return a.price.slice(1) - b.price.slice(1);
      return 0;
    });

  return (
    <div className="course-listing">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Find Your <span>Course</span></h1>
          <p>Discover the perfect course to advance your career in IT security and ethical hacking</p>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="filters-section">
          <div className="filter-group">
            <label>COURSE TYPE</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="styled-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>STUDY LEVEL</label>
            <select className="styled-select">
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <div className="filter-group">
            <label>SORT BY</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="styled-select"
            >
              <option>Popularity</option>
              <option>Rating</option>
              <option>Price</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="view-options">
          <div className="results-count">
            {filteredCourses.length} Courses Found
          </div>
          <div className="view-toggle">
            <button
              className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="no-results">
            <h3>No courses found matching your criteria</h3>
            <p>Try adjusting your filters or search term</p>
          </div>
        ) : (
          <div className={`course-list ${viewMode}`}>
            {filteredCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                viewMode={viewMode}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseListing;