import React, { useState } from 'react';
import './Registationpage.css';

const Registrationpage = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    dob: '',
    state: '',
    college: '',
    qualification: '',
    domain: '',
    linkedIn: '',
    phone: '',
    guardian: '',
    gender: '',
    country: 'India',
    university: '',
    year: '',
    source: '',
    whatsapp: '',
    referral: '',
    cv: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      

      <main>
        <section id="about" className="section about-section">
          <div className="container">
            <h1 className="section-title">Registration Form</h1>
            <h2 className="section-subtitle">We Provide The Best Internship in Bhilai, Chhattisgarh</h2>
            
            <div className="about-content">
              <p>
                Kian Technologies is at the forefront of cybersecurity education, dedicated to crafting the future leaders in digital security through comprehensive training programs. Based in Bhilai, India, we specialize in ethical hacking, penetration testing, and network security, providing a robust curriculum designed to equip students with the skills needed to excel in today's dynamic cyber landscape.
              </p>
              
              <p>
                Our institute stands out for its hands-on approach, where students engage directly with the latest tools and technologies under the guidance of seasoned industry professionals. We believe in bridging the gap between theoretical knowledge and practical application, ensuring that our students gain real-world experience and can effectively address contemporary security challenges.
              </p>
              
              <p>
                Our mission is to empower aspiring cybersecurity experts with cutting-edge skills and profound knowledge, enabling them to safeguard digital environments against emerging threats. Whether you're looking to enhance your current expertise or start a new career in cybersecurity, Kian Technologies offers a pathway to success with personalized attention and a commitment to excellence. Join us to transform your potential into performance and become a key player in the global cybersecurity landscape.
              </p>
              
              <h3 className="certificates-title">After completion of program the student will receive a:</h3>
              <ul className="certificates-list">
                <li>Program Completion Certificate issued by IIT+MICROSOFT.</li>
                <li>3 month Co-Branded Internship Certificate.</li>
                <li>Letter of Recommendation will be given based on the students' performance.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="benefits" className="section benefits-section">
          <div className="container">
            <h2 className="section-title">Perks/Benefits:</h2>
            <ul className="benefits-list">
              <li className="benefit-item">
                <i className="fas fa-microphone"></i>
                <span>Mock Interview Preparation Tips.</span>
              </li>
              <li className="benefit-item">
                <i className="fas fa-file-alt"></i>
                <span>Resume Building Sessions.</span>
              </li>
              <li className="benefit-item">
                <i className="fas fa-users"></i>
                <span>Access to Growth Community.</span>
              </li>
              <li className="benefit-item">
                <i className="fas fa-trophy"></i>
                <span>Participate in Our Hackathons and Unlock Your Achievement.</span>
              </li>
            </ul>
            
            <div className="social-links">
              <h3>Social Media Pages:</h3>
              <div className="links-container">
                <a href="https://kiantechnologies.in/index.php" className="social-link">
                  <i className="fas fa-globe"></i> Our Website
                </a>
                <a href="https://wa.me/917587496155" className="social-link">
                  <i className="fab fa-whatsapp"></i> Our WhatsApp
                </a>
                <a href="https://www.linkedin.com/company/kiantechnologies/" className="social-link">
                  <i className="fab fa-linkedin"></i> Our LinkedIn Page
                </a>
              </div>
            </div>
            
            <p className="note">
              Please fill all the required fields carefully, information provided will be used in offer letter and Completion Certificate.
            </p>
          </div>
        </section>

        <section id="register" className="section register-section">
          <div className="container">
            <h2 className="section-title">Internship Registration</h2>
            
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="email">E-mail ID *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="name">Applicant Name (Block Letter) *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth *</label>
                  <input 
                    type="date" 
                    id="dob" 
                    name="dob" 
                    value={formData.dob}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="state">Select State *</label>
                  <select 
                    id="state" 
                    name="state" 
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="college">College Name *</label>
                  <input 
                    type="text" 
                    id="college" 
                    name="college" 
                    value={formData.college}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="qualification">Highest Academic Qualification *</label>
                  <select 
                    id="qualification" 
                    name="qualification" 
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="High School">High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="domain">Internship Domain *</label>
                  <select 
                    id="domain" 
                    name="domain" 
                    value={formData.domain}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Ethical Hacking">Ethical Hacking</option>
                    <option value="Network Security">Network Security</option>
                    <option value="Penetration Testing">Penetration Testing</option>
                    <option value="Digital Forensics">Digital Forensics</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="linkedIn">Followed LinkedIn Page *</label>
                  <select 
                    id="linkedIn" 
                    name="linkedIn" 
                    value={formData.linkedIn}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Contact Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="guardian">Father's Name/Guardian Name *</label>
                  <input 
                    type="text" 
                    id="guardian" 
                    name="guardian" 
                    value={formData.guardian}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="gender">Gender *</label>
                  <select 
                    id="gender" 
                    name="gender" 
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <input 
                    type="text" 
                    id="country" 
                    name="country" 
                    value={formData.country}
                    onChange={handleChange}
                    readOnly
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="university">University Name *</label>
                  <input 
                    type="text" 
                    id="university" 
                    name="university" 
                    value={formData.university}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="year">Current Year of your Course? *</label>
                  <select 
                    id="year" 
                    name="year" 
                    value={formData.year}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Graduated">Graduated</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="source">Where did you learn about Kian Technologies? *</label>
                  <select 
                    id="source" 
                    name="source" 
                    value={formData.source}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friend/Family">Friend/Family</option>
                    <option value="College">College</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="whatsapp">Followed WhatsApp Page *</label>
                  <select 
                    id="whatsapp" 
                    name="whatsapp" 
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="referral">Referral Code</label>
                  <input 
                    type="text" 
                    id="referral" 
                    name="referral" 
                    value={formData.referral}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group file-upload">
                  <label htmlFor="cv">Upload CV:</label>
                  <div className="file-input-container">
                    <input 
                      type="file" 
                      id="cv" 
                      name="cv" 
                      onChange={handleChange}
                      className="file-input"
                    />
                    <label htmlFor="cv" className="file-label">
                      {formData.cv ? formData.cv.name : 'Choose File'}
                    </label>
                    <span className="file-status">
                      {formData.cv ? '' : 'No file chosen'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="form-note">
                <p>Note: Please don't spam (Apply multiple times for same domain), in this case your application will be considered invalid.</p>
              </div>
              
              <button type="submit" className="submit-btn">
                Submit
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            
            {submitted && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>Your application has been submitted successfully!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      
    </div>
  );
};

export default Registrationpage;