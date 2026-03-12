import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          AEROPAQ
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-links">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links">
              Servicios
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
