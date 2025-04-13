import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Products from './components/Products';
import Cakes from './components/Cakes';
import CupcakePage from './components/CupcakePage';
import CookiePage from './components/CookiePage';
import CoffeePage from './components/CoffeePage';
import Footer from './components/Footer';
import Home from './components/Home'; // Import the Home component
import './App.css';
import Grocery from './components/Grocery';
import VisitUs from './components/VisitUs';
import AboutUs from './components/AboutUs';
import PuddingClub from './components/PuddingClub';
import Cake from './components/Cake';




const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/visitus" element={<VisitUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/puddingclub" element={<PuddingClub />} />
            <Route path="/CupcakePage" element={<CupcakePage />} />
            <Route path="/CookiePage" element={<CookiePage />} />
            <Route path="/Cake" element={<Cake />} />

            <Route path="/<Cakes" element={<Cakes />} />
            <Route path="/CoffeePage" element={<CoffeePage />} />

            

            <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
            
            {/* Add other routes here if needed */}
          </Routes>

        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
