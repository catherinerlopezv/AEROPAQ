import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
          SkyShip
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMobileMenu}>
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links" onClick={closeMobileMenu}>
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a href="#coverage" className="nav-links" onClick={closeMobileMenu}>
              Cobertura
            </a>
          </li>
          <li className="nav-item">
            <a href="#how-it-works" className="nav-links" onClick={closeMobileMenu}>
              Cómo Funciona
            </a>
          </li>
          <li className="nav-item">
            <a href="#about-us" className="nav-links" onClick={closeMobileMenu}>
              Acerca de
            </a>
          </li>
          <li className="nav-item">
            <a href="#faq" className="nav-links" onClick={closeMobileMenu}>
              Preguntas Frecuentes
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={closeMobileMenu}>
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a href="#cotizador" className="nav-links" onClick={closeMobileMenu}>
              Cotizador
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
