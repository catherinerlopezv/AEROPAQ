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
          <li className="nav-item">
            <a href="#coverage" className="nav-links">
              Cobertura
            </a>
          </li>
          <li className="nav-item">
            <a href="#how-it-works" className="nav-links">
              Cómo Funciona
            </a>
          </li>
          <li className="nav-item">
            <a href="#about-us" className="nav-links">
              Acerca de
            </a>
          </li>
          <li className="nav-item">
            <a href="#faq" className="nav-links">
              Preguntas Frecuentes
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
