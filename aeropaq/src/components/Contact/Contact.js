import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.nombre) tempErrors.nombre = 'El nombre es requerido.';
    if (!formData.correo) {
      tempErrors.correo = 'El correo electrónico es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      tempErrors.correo = 'El correo electrónico no es válido.';
    }
    if (!formData.telefono) {
      tempErrors.telefono = 'El teléfono es requerido.';
    } else if (!/^\d{8,15}$/.test(formData.telefono)) { 
      tempErrors.telefono = 'El teléfono debe tener entre 8 y 15 dígitos.';
    }
    if (!formData.mensaje) tempErrors.mensaje = 'El mensaje es requerido.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (validate()) {
    setIsSubmitting(true);
    setSubmitMessage('');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxL2Woq1sDSG1fcNbi9FP4uCtllMaS5G_Kbrf_EjYf3Eko1_i_g9fEVafz_9Qo5JMxivg/exec';

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSubmitMessage('¡Gracias por tu mensaje! Lo hemos recibido correctamente.');
      setFormData({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: ''
      });

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitMessage('Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  }
};

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <p className="error-text">{errors.nombre}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
            {errors.correo && <p className="error-text">{errors.correo}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
            {errors.telefono && <p className="error-text">{errors.telefono}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
            {errors.mensaje && <p className="error-text">{errors.mensaje}</p>}
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
