import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué tipo de paquetes puedo enviar?',
      answer: 'Puedes enviar una amplia variedad de paquetes, desde documentos hasta mercancías de gran tamaño. Sin embargo, existen algunas restricciones para artículos peligrosos o prohibidos. Consulta nuestra guía de artículos restringidos para más información.'
    },
    {
      question: '¿Cómo puedo rastrear mi envío?',
      answer: 'Puedes rastrear tu envío en tiempo real utilizando el número de guía que te proporcionamos al momento de realizar tu solicitud. Ingresa el número en la sección de "Rastreo" de nuestra página web.'
    },
    {
      question: '¿Cuál es el tiempo de entrega?',
      answer: 'El tiempo de entrega varía según el destino y el tipo de servicio que elijas. Para envíos nacionales, el tiempo de entrega es de 24 a 72 horas. Para envíos internacionales, puede variar entre 5 y 15 días hábiles.'
    },
    {
      question: '¿Qué hago si mi paquete llega dañado?',
      answer: 'Si tu paquete llega dañado, por favor, contáctanos de inmediato a través de nuestro formulario de contacto o llamando a nuestro número de atención al cliente. Es importante que conserves el embalaje original para poder iniciar el proceso de reclamación.'
    }
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
