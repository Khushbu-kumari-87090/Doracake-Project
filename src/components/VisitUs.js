// src/components/VisitUs.js
import React from 'react';
import './VisitUs.css'; // Create this CSS file for styling

const VisitUs = () => {
  return (
    <div className="visitus-container">
      <h2>Visit Our Bakery</h2>
      <div className="visitus-info">
        <div className="visitus-section">
          <h3>Location</h3>
          <p>123 Cake Street, Sweet Town, CA 90210</p>
        </div>
        <div className="visitus-section">
          <h3>Hours of Operation</h3>
          <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
          <p>Saturday: 9:00 AM - 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="visitus-section">
          <h3>Contact Us</h3>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@doracakebakery.com</p>
        </div>
        <div className="visitus-section">
          <h3>Find Us on the Map</h3>
          <iframe 
            title="bakery-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.938437507671!2d144.96305831531564!3d-37.814107979751594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1602442269531!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            aria-hidden="false" 
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;
