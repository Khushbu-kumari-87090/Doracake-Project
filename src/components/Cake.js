
import React from 'react';
import './Cake.css';

const Cake = ({ image, name, description, label }) => {
  return (
    <div className="cake-card">
      <img src={image} alt={name} className="cake-image" />
      {label && <div className="cake-label">{label}</div>}
      <h3 className="cake-name">{name}</h3>
      <p className="cake-description">{description}</p>
    </div>
  );
};

export default Cake;
