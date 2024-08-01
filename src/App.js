// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cakes from './components/Cakes';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content"></div>
      <Products />
      <Cakes />
      <Footer />
     
    </div>
  );
};

export default App;
