import React from 'react';
import './BestEthical.css'; // Import the new CSS file

const BestEthical = () => {
  return (
    <section id="about-us" className="about-us-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="about-us-text">
              <div className="section-title">
                <span className="subtitle">EC-COUNCIL COURSE</span>
                <h2 >Best <span>Ethical Hacking</span> Training in Bhilai</h2>
                <h2><span>- C|EHv13 Course</span></h2>
              </div>
              <div className="about-content-text">
                <p>
                  Have you ever imagined a career that never gets monotonous, offers lucrative pay, and gives a sense of pride? Ethical hacking training in Bhilai offers exactly that. In today’s digital world, cybersecurity is paramount, and ethical hackers play a crucial role in protecting organizations from cyber threats. Multinational companies hire certified ethical hackers to identify and fix vulnerabilities in their IT systems, preventing potential malicious attacks. This makes ethical hacking a highly rewarding and essential career choice.
                </p>
                <p>
                  Bhilai is known for offering top-tier certified ethical hacking courses that prepare you for a successful career in the IT field. By enrolling in an ethical hacking course in Bhilai, you’ll gain hands-on experience and acquire the skills needed to scan, test, and secure complex infrastructures. The course ensures that you are equipped to deal with potential cyber threats and vulnerabilities. With the right training, you’ll be on par with professionals who hold formal computer science degrees, but with the added expertise of ethical hacking.
                </p>
                <p>
                  The training focuses on various aspects of cybersecurity, including social engineering, protocols, and IT infrastructure testing. A certified ethical hacker course in Bhilai equips you with a systematic approach to identifying weaknesses and protecting organizations. With this expertise, you’ll be prepared to handle cybersecurity challenges and have a smooth entry into the high-demand IT field.
                </p>
              </div>
              <div className="cta-buttons">
                <a href="contact.php" className="cta-btn">INQUIRE NOW</a>
                <a href="uploads/courses/CEH-brochure.pdf" download="Kian_Brochure.pdf" className="cta-btn">GET BROCHURE</a>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="image-gallery">
              <img src="https://kiantechnologies.in/uploads/ceh02.png" alt="CEH Image 1" className="image-item" />
              <img src="https://kiantechnologies.in/uploads/ceh01.png" alt="CEH Image 2" className="image-item" />
              <img src="https://kiantechnologies.in/uploads/ceh04.png" alt="CEH Image 3" className="image-item" />
              <img src="https://kiantechnologies.in/uploads/ceh03.png" alt="CEH Image 4" className="image-item" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestEthical;
