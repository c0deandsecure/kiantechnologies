import React from 'react';
import './Courses.css'; // Your styles can go here or use Tailwind/CSS Modules

const courses = [
  {
    title: 'IT Security and Ethical Hacking (Beginner to Pro)',
    students: '330 students',
    category: 'Ethical Hacking',
    image: 'https://kiantechnologies.in/uploads/courses/it.png',
    rating: 5,
  },
  {
    title: 'IT Security and Ethical Hacking (Basic)',
    students: '110 Students',
    category: 'Ethical Hacking',
    image: 'https://kiantechnologies.in/uploads/courses/it.png',
    rating: 5,
  },
  {
    title: 'Python',
    students: '55 Students',
    category: 'Scripting Language',
    image: 'https://kiantechnologies.in/uploads/courses/python.png',
    rating: 5,
  },
];

const Courses = () => {
  return (
    <section className="courses-section">
      <div className="section-header text-center">
        <p className="subtitle">LEARN NEW SKILLS</p>
        <h2><span>Popular</span> Courses</h2>
      </div>

      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              <div className="course-meta">
                <span className="course-category">{course.category}</span>
                <span className="course-students">{course.students}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <div className="course-rating">
                {'⭐'.repeat(course.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="button-row">
        <button className="course-btn">ABOUT US</button>
        <button className="course-btn">CONTACT US</button>
      </div>
    </section>
  );
};

export default Courses;
