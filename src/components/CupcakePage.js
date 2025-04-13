import React from 'react';
import './CupcakePage.css';
import cupcake1 from './images2/Chocolate.jpg'; // adjust the path
import cupcake2 from './images2/Coffee Cupcake.jpg'; // adjust the path
import cupcake3 from './images2/Red Velvet.jpg'; // adjust the path

const CupcakePage = () => {
  return (
    <div className="cupcake-page">
      <h1 className="cupcake-title">Cupcake Delights</h1>
      <p className="cupcake-subtitle">Experience the rich and aromatic flavors from our cupcake collection.</p>
      <div className="cupcake-list">
        <div className="cupcake-item">
          <img src={cupcake1} alt="Vanilla Delight" className="cupcake-image" />
          <h2 className="cupcake-name">  Chocolate Bliss </h2>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="cupcake-item">
          <img src={cupcake2} alt="Chocolate Bliss" className="cupcake-image" />
          <h2 className="cupcake-name">Vanilla Delight</h2>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="cupcake-item">
          <img src={cupcake3} alt="Strawberry Surprise" className="cupcake-image" />
          <h2 className="cupcake-name">Strawberry Surprise</h2>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CupcakePage;
