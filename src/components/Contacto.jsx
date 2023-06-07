import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [comentario, setComentario] = useState('');

  const enviarCorreoElectronico = () => {
    const templateParams = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      comentario: comentario
    };

    emailjs.send('service_gcskx9q', 'template_9stcizt', templateParams, 'I4oNR08EB-DUkDXGx')
      .then(() => {
        alert('El correo electrónico ha sido enviado correctamente.');
        limpiarCampos();
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
      });
  };

  const limpiarCampos = () => {
    setNombre('');
    setEmail('');
    setTelefono('');
    setComentario('');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <div
        style={{
          border: '2px solid black',
          borderRadius: '10px',
          boxShadow: '10px 10px 15px black',
          padding: '20px',
          maxWidth: '500px',
          width: '90%'
        }}
      >
        <h2>Gracias por visitar "Un Salto al Clima"</h2>
        <p>Deja tu sugerencia en el siguiente formulario, en breve responderemos.</p>
        
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="nombre">Nombre y Apellido:</label>
            <br />
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="telefono">Teléfono:</label>
            <br />
            <input
              type="tel"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="comentario">Comentario:</label>
            <br />
            <textarea
              id="comentario"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            ></textarea>
          </div>
          <button type="button" onClick={enviarCorreoElectronico}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
