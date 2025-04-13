// src/components/Home.js
import React from 'react';
import Products from './Products';
import Cakes from './Cakes';
import CoffeePage from './CoffeePage';
import CupcakePage from './CupcakePage';
import CookiePage from './CookiePage';





const Home = () => {
  return (
    <div>
      <Cakes />
      <Products />
      <CoffeePage />
      <CupcakePage />
      <CookiePage />
    </div>
  );
};

export default Home;
