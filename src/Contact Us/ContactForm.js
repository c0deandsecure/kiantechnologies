import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, phone, message });
    alert('Your message has been sent!');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <section className="contact-page-section">
      <div className="container">
        <div className="section-title text-center">
          <span className="subtitle">... SEND US A MESSAGE ...</span>
          <h2>Send Us A Message.</h2>
        </div>
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group full-width">
              <textarea
                placeholder="Message."
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="form-submit">
              <button type="submit">SEND EMAIL &gt;</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;