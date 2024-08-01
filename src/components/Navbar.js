
import React from 'react';
import logo from './images/logo2.jpeg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
       <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Doracake Bakery Logo" className="navbar-logo-img" />
        </a>
        <a href="/">Doracake Bakery</a>
      </div>
        
      
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#">Order Online</a></li>
        <li className="navbar-item"><a href="#">Grocery</a></li>
        <li className="navbar-item"><a href="#">Visit Us</a></li>
        <li className="navbar-item"><a href="#">About Us</a></li>
        <li className="navbar-item"><a href="#">Pudding Club</a></li>
        <li className="navbar-item dropdown">
          <a href="#">Properties</a>
          <div className="dropdown-content">
            <a href="#">Cupcakes</a>
            <a href="#">Brownies & Bars</a>
            <a href="#">Cakes</a>
            <a href="#">Coffee</a>
            <a href="#">World-Famous Banana Pudding</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
