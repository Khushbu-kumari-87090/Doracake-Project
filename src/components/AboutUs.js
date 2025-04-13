// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css'; // Create this CSS file for styling

import teamImage from './images/Kiernan.jpg'; // Example image, replace with your own

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <h2>About Doracake Bakery</h2>
      <p className="aboutus-intro">
        At Doracake Bakery, we believe in crafting the most delicious and beautiful cakes that bring joy to every celebration. Our bakery is a family-owned business, born out of a passion for baking and a love for our community.
      </p>
      
      <div className="aboutus-content">
        <div className="aboutus-text">
          <h3>Our Story</h3>
          <p>
            Founded in 2010, Doracake Bakery started as a small, home-based business. With hard work, dedication, and a focus on quality, we have grown into a beloved bakery known for our exceptional cakes, cupcakes, and pastries. Every cake we create is baked with love, using the finest ingredients, and a dash of creativity.
          </p>

          <h3>Our Values</h3>
          <p>
            We are committed to:
          </p>
          <ul>
            <li>Using high-quality, fresh ingredients</li>
            <li>Providing exceptional customer service</li>
            <li>Creating innovative and beautiful designs</li>
            <li>Supporting our local community</li>
          </ul>

          <h3>Meet the Team</h3>
          <p>
            Our team of talented bakers and decorators work tirelessly to bring your cake dreams to life. From classic flavors to custom designs, we are here to make your special occasions even sweeter.
          </p>
        </div>
        
        <div className="aboutus-image">
          <img src={teamImage} alt="Our team" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
