import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [comentario, setComentario] = useState('');

  const enviarCorreoElectronico = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: nombre,
      from_email: email,
      from_phone: telefono,
      message: comentario
    };

    emailjs.send('service_gcskx9q', 'template_9stcizt', templateParams, 'I4oNR08EB-DUkDXGx')
      .then((response) => {
        console.log('Correo electrónico enviado con éxito:', response.status, response.text);
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
    <div id='contacto1'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <div id='contacto2'
        style={{
          border: '2px solid black',
          borderRadius: '10px',
          boxShadow: '10px 10px 15px black',
          padding: '20px',
          margin:"560px",
          marginTop: "400px",
          maxWidth: '400px',
          width: '100%'
        }}
      >
        <h2>Gracias por visitar "Un Salto al Clima"</h2>
        <p>Deja tu sugerencia en el siguiente formulario, en breve te responderemos.</p>
      
        <form id='form' onSubmit={enviarCorreoElectronico}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Nombre y Apellido:
            <br />
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Email:
            <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Teléfono:
            <br />
            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Comentario:
            <br />
            <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} />
          </label>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
