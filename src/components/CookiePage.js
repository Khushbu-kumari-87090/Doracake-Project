import React from 'react';
import './CookiePage.css';
import cookieOatmeal from './images/Crackle Cookies.jpg'; // adjust the path
import cookieVanilla from './images/Oatmeal Cookies.jpg'; // adjust the path
import cookieConfetti from './images/Peanut Butter Blossom Cookies.jpg'; // adjust the path

const CookiePage = () => {
  return (
    <div className="cookie-page">
      <h1 className="cookie-title">Banana Pudding Delights</h1>
      <p className="cookie-subtitle">As fresh-from-the-bakery as you can find on the grocery store shelf.</p>
      <div className="cookie-list">
        <div className="cookie-item">
          <img src={cookieOatmeal} alt="Oatmeal Raisin" className="cookie-image" />
          <h2 className="cookie-name">Oatmeal Raisin</h2>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="cookie-item">
          <img src={cookieVanilla} alt="Classic Vanilla with White Chocolate Chips" className="cookie-image" />
          <h2 className="cookie-name">Classic Vanilla with White Chocolate Chips</h2>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="cookie-item">
          <img src={cookieConfetti} alt="Confetti with White Chocolate Chips" className="cookie-image" />
          <h2 className="cookie-name">Confetti with White Chocolate Chips</h2>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CookiePage;
