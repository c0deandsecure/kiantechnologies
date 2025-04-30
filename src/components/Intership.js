import React from 'react';
import './Internship.css';

const InternshipCard = ({ title, description, imageSrc }) => {
  return (
    <div className="col-md-3">
      <div className="teacher-img-content">
        <div className="teacher-cntent">
          <div className="teacher-social-name ul-li-block">
            <div className="teacher-name">
              <span>{title}</span>
            </div>
          </div>
          <div className="teacher-img-category">
            <div className="teacher-img">
              <img src={imageSrc} alt={title} />
              <div className="course-price text-uppercase text-center gradient-bg">
                <a href="registration.php"><span>Apply Now</span></a>
              </div>
            </div>
            <div className="teacher-category">
              <span className="st-name">{description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div
      className="jarallax"
      data-jarallax-original-styles="null"
      style={{
        position: 'relative',
        zIndex: 0,
        backgroundImage: 'none',
        backgroundAttachment: 'scroll',
        backgroundSize: 'auto'
      }}
    >
      <div className="container">
        <div className="section-title mb20 headline text-center">
          <span className="subtitle text-uppercase">OUR INTERNSHIP</span>
          <h2>
            Kian Technologies's <span>Internship.</span>
          </h2>
        </div>

        <div className="teacher-list">
          <div className="row justify-content-center">
            <InternshipCard
              title="Cyber Security"
              description="Cyber Security Engineer, Soc Analyst, Network Engineer"
              imageSrc="https://kiantechnologies.in/uploads/courses/it1.png"
            />
            <InternshipCard
              title="Ethical Hacking"
              description="Ethical Hacker, Penetration, VAPT"
              imageSrc="https://kiantechnologies.in/uploads/courses/it1.png"
            />
            <InternshipCard
              title="Web Technology"
              description="Full-Stack Developer, Software Engineer, Web Developer"
              imageSrc="https://kiantechnologies.in/uploads/courses/it1.png"
            />
            <InternshipCard
              title="Cloud Technology"
              description="Cloud Engineer, Cloud Security Engineer, DevOps Engineer"
              imageSrc="https://kiantechnologies.in/uploads/courses/it1.png"
            />
          </div>

          <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
            <a href="#">
              All Internship <i className="fas fa-caret-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
