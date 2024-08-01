// src/components/Products.js
import React from 'react';
import './Products.css';
import cupcakeImage from './images/Cupcake.webp'; // Adjust the path if necessary
import Brownies from './images/brownie.jpeg'; // Adjust the path if necessary
import Cakes from './images/chocolate cake.jpg'; // Adjust the path if necessary
import Coffee from './images/coffee.jpg'; // Adjust the path if necessary
import BananaPudding from './images/bananapudding.webp'; // Adjust the path if necessary




const products = [
  { name: 'Cupcakes', image: cupcakeImage },
  { name: 'Brownies & Bars', image: Brownies },
  { name: 'Cakes', image: Cakes },
  { name: 'Coffee', image: Coffee },
  { name: 'Banana Pudding', image:BananaPudding },
];

const Products = () => {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <p>For more than 25 years, Magnolia Bakery has been making America’s favorite baked goods the old-fashioned way: from scratch, in small batches, and using the finest ingredients.</p>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
