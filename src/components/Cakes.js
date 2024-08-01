// src/components/Cakes.js
import React from 'react';
import Cake from './Cake';
import germanChocolateCake from './images/German Chocolate Cake.jpg';
import flourlessChocolateCake from './images/Flourless Chocolate Cake.jpg';
import vanillaCake from './images/Vanilla Cake.jpg';
import chocolateCake from './images/chocolate.c0.jpg';
import confettiCake from './images/Confetti Cake.jpg';
import './Cakes.css';

const cakes = [
  {
    image: germanChocolateCake,
    name: 'German Chocolate Cake',
    description: 'Unapologetically decadent, our German chocolate cake combines a...',
    //label: 'PICK UP ONLY'
  },
  {
    image: flourlessChocolateCake,
    name: 'Flourless Chocolate Cake',
    description: 'If this cake’s dense, rich, and fudgy texture isn’t enough to woo you...',
    // label: 'PICK UP ONLY'
  },
  {
    image: vanillaCake,
    name: 'Vanilla Cake',
    description: 'Old-fashioned vanilla cake is Magnolia Bakery’s heart and soul...',
    // label: 'PICK UP ONLY'
  },
  {
    image: chocolateCake,
    name: 'Chocolate Cake',
    description: 'Three layers of super-rich chocolate cake and silky chocolate buttercream...'
  },
  {
    image: confettiCake,
    name: 'Confetti Cake',
    description: 'We make our buttery, beloved vanilla cake extra festive with confetti folded...'
  }
];

const Cakes = () => {
  return (
    <div className="cakes-container">
      <h2 className="cakes-title">Cakes</h2>
      <button className="view-more">VIEW MORE</button>
      <div className="cakes-list">
        {cakes.map((cake, index) => (
          <Cake
            key={index}
            image={cake.image}
            name={cake.name}
            description={cake.description}
            label={cake.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Cakes;
