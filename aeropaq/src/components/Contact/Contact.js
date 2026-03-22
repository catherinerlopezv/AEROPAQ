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
    } else if (!/^\d{8,10}$/.test(formData.telefono)) { // Ajustado para 8 a 10 dígitos
      tempErrors.telefono = 'El teléfono debe tener entre 8 y 10 dígitos.';
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

      // --- INICIO DE LA LÓGICA DE ENVÍO A GOOGLE SHEETS ---
      
      // ▼▼▼ PEGA TU URL DE GOOGLE APPS SCRIPT AQUÍ ▼▼▼
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzY0huRFu8UW1lT9Urar39rn_owJbEvr2TuJYD6CT0r4UxEL9oOouQrzpYTH_reU1kqsw/exec'; 
      // ▲▲▲ PEGA TU URL DE GOOGLE APPS SCRIPT AQUÍ ▲▲▲

      try {
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        const result = await response.json();

        if (result.result === 'success') {
          setSubmitMessage('¡Gracias por tu mensaje! Ha sido enviado correctamente.');
          setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
        } else {
          throw new Error(result.error || 'Ocurrió un error al enviar el formulario.');
        }

      } catch (error) {
        console.error('Error!', error.message);
        setSubmitMessage('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.');
      } finally {
        setIsSubmitting(false);
      }
      // --- FIN DE LA LÓGICA DE ENVÍO ---
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
