// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>For more than 25 years, Magnolia Bakery has been making America’s favorite baked goods the old-fashioned way: from scratch, in small batches, and using the finest ingredients.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@magnoliabakery.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>
            <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Magnolia Bakery | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
