import React from 'react';
import '../assets/css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>Email: contact@example.com</p>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarker} className="icon" />
          <p>Address: 1234 Main Street, City, Country</p>
        </div>
      </div>
      <div className="social-media">
        <h2>Follow Us on Social Media</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
