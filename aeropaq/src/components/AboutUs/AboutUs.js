import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-section">
      <div className="container">
        <h2>Sobre Nosotros</h2>
        <div className="about-us-content">
          <div className="about-us-text">
            <h3>Nuestra Historia</h3>
            <p>
              Fundada en 2024, AEROPAQ nació con la misión de revolucionar la logística y el transporte de paquetes, 
              ofreciendo un servicio rápido, seguro y confiable.
            </p>
            <h3>Misión</h3>
            <p>
              Facilitar el comercio y la comunicación a través de soluciones de envío innovadoras y eficientes, 
              comprometidos con la satisfacción de nuestros clientes.
            </p>
            <h3>Visión</h3>
            <p>
              Ser la empresa líder en logística a nivel nacional e internacional, reconocida por nuestra excelencia 
              operativa y nuestro compromiso con el cliente.
            </p>
            <h3>Valores</h3>
            <ul>
              <li>Confianza</li>
              <li>Seguridad</li>
              <li>Rapidez</li>
              <li>Compromiso</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
