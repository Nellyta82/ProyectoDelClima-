import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    comentario: ''
  });
  const [correoEnviado, setCorreoEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuración de emailjs
    const serviceId = 'service_khdo45b';
    const templateId = 'template_o8j77qs';
    const userId = 'I4oNR08EB-DUkDXGx';

    const templateParams = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      telefono: formData.telefono,
      comentario: formData.comentario,
      destinatario: 'batovar.ar@gmail.com'
    };

    // Envío del formulario por correo electrónico utilizando emailjs
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(() => {
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          comentario: ''
        });
        setCorreoEnviado(true);
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
      });
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <div style={{
        border: '2px double black',
        padding: '20px',
        width: '400px'
      }}>
        <h2>Contacto</h2>
        {correoEnviado && <p>Correo electrónico enviado con éxito</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="comentario">Comentario:</label>
            <textarea
              id="comentario"
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
