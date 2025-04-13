import { Link } from 'react-router-dom';
import React from 'react';
import logo from './images/logo2.jpeg';
import './Navbar.css';
import Login from './Login';
import Grocery from './Grocery';
import VisitUs from './VisitUs';
import AboutUs from './AboutUs';
import PuddingClub from './PuddingClub';
import CupcakePage from './CupcakePage';
import Cakes from './Cakes';
import CoffeePage from './CoffeePage';
import Cake from './Cake';



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
        <li className="navbar-item"><a href="Login">Order Online</a></li>
        <li className="navbar-item"><a href="Grocery">Grocery</a></li>
        <li className="navbar-item"><a href="AboutUs">AboutUs</a></li>
       
        <li className="navbar-item"><a href="puddingclub">Pudding Club</a></li>
        <li className="navbar-item"><Link to="/login">Login</Link></li> {/* Added Login Link */}
        <li className="navbar-item dropdown">
          <a href="#">Properties</a>
          <div className="dropdown-content">
            <a href="CupcakePage">Cupcakes</a>
            <a href="CookiePage">CookiePage</a>
            <a href="Cakes">Cakes</a>
            <a href="Cake">Cake</a>

            <a href="CoffeePage">CoffeePage</a>
            <a href="#">World-Famous Banana Pudding</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
