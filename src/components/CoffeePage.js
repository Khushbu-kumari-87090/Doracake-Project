import React from 'react';
import './CoffeePage.css';
import coffee1 from './images1/Americano.c.jpg'; // adjust the path
import coffee2 from './images1/Cappuccino.jpg'; // adjust the path
import coffee3 from './images1/Cold Coffee.jpg'; // adjust the path

const CoffeePage = () => {
  return (
    <div className="coffee-page">
      <h1 className="coffee-title">Coffee Delights</h1>
      <p className="coffee-subtitle">Experience the rich and aromatic flavors from our coffee collection.</p>
      <div className="coffee-list">
        <div className="coffee-item">
          <img src={coffee1} alt="Espresso" className="coffee-image" />
          <h2 className="coffee-name">Espresso</h2>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="coffee-item">
          <img src={coffee2} alt="Cappuccino" className="coffee-image" />
          <h2 className="coffee-name">Cappuccino</h2>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="coffee-item">
          <img src={coffee3} alt="Latte" className="coffee-image" />
          <h2 className="coffee-name">Latte</h2>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeePage;
