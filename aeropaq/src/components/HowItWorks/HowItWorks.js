import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <h2>Cómo Funciona</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Solicitud</h3>
            <p>Realiza tu solicitud de envío a través de nuestra plataforma en línea.</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <h3>Recolección</h3>
            <p>Nuestro equipo recoge el paquete en la dirección que nos indiques.</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <h3>Despacho</h3>
            <p>Clasificamos y despachamos tu paquete a su destino.</p>
          </div>
          <div className="step">
            <div className="step-icon">4</div>
            <h3>Entrega</h3>
            <p>Entregamos tu paquete de forma segura y a tiempo en su destino final.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
