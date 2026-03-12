import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      title: 'Envíos Nacionales',
      description: 'Cobertura completa en todo el país, garantizando que tus paquetes lleguen a tiempo y de forma segura.',
    },
    {
      title: 'Envíos Internacionales',
      description: 'Conectamos tu negocio con el mundo, con opciones de envío aéreo y marítimo a los principales destinos.',
    },
    {
      title: 'Recolección a Domicilio',
      description: 'Para tu máxima comodidad, programamos la recolección de tus paquetes directamente en tu hogar u oficina.',
    },
    {
      title: 'Servicio Exprés',
      description: 'Para tus envíos más urgentes, ofrecemos entrega garantizada en el menor tiempo posible a nivel nacional.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2>Nuestros Servicios</h2>
        <div className="services-wrapper">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
