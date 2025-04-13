// src/components/PuddingClub.js
import React from 'react';
import './PuddingClub.css'; // Create this CSS file for styling
import puddingImage from './images/puding.jpg'; // Example image, replace with your own

const PuddingClub = () => {
  return (
    <div className="puddingclub-container">
      <h2>Pudding Club</h2>
      <p className="puddingclub-intro">
        Welcome to the Doracake Bakery Pudding Club! Join us for exclusive access to our most decadent and delightful puddings. As a member, you'll enjoy special offers, new flavor releases, and much more!
      </p>
      
      <div className="puddingclub-content">
        <div className="puddingclub-text">
          <h3>Why Join Our Pudding Club?</h3>
          <ul>
            <li>Exclusive access to new and seasonal pudding flavors</li>
            <li>Special discounts and offers just for members</li>
            <li>Invitations to exclusive pudding tasting events</li>
            <li>Monthly newsletter with pudding recipes and tips</li>
          </ul>
          
          <h3>Membership Benefits</h3>
          <p>
            As a member of our Pudding Club, you will enjoy:
          </p>
          <ul>
            <li>Priority ordering for limited-edition puddings</li>
            <li>Early access to new pudding flavors</li>
            <li>Discounts on all pudding purchases</li>
            <li>Exclusive offers and surprises throughout the year</li>
          </ul>
          
          <h3>How to Join</h3>
          <p>
            Signing up is easy! Just visit our bakery or contact us via email at <a href="mailto:info@doracakebakery.com">info@doracakebakery.com</a> to join the club. You can also sign up through our website for a hassle-free experience.
          </p>
        </div>
        
        <div className="puddingclub-image">
          <img src={puddingImage} alt="Pudding Selection" />
        </div>
      </div>
    </div>
  );
};

export default PuddingClub;
