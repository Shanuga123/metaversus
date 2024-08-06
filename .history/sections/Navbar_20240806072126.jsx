import React from 'react';
import './NavBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#explore">Explore</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
