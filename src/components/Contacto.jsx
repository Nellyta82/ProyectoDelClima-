import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [comentario, setComentario] = useState('');

  const enviarCorreoElectronico = (e) => {
    e.preventDefault();

    // Validar que se hayan ingresado los campos requeridos antes de enviar el correo
    if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '' || comentario.trim() === '') {
      alert('Por favor, complete todos los campos requeridos.');
      return;
    }

    // Configuración para el envío del correo electrónico utilizando emailjs-com
    const templateParams = {
      from_name: `${nombre} ${apellido}`,
      email: email,
      phone: telefono,
      message: comentario
    };

    // Reemplaza con tu configuración de emailjs-com (User ID, Template ID y Service ID)
    emailjs.send('service_khdo45b', 'template_o8j77qs', templateParams, 'I4oNR08EB-DUkDXGx')
      .then(() => {
        alert('¡El correo ha sido enviado correctamente!');
        limpiarCampos();
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
  };

  const limpiarCampos = () => {
    setNombre('');
    setApellido('');
    setEmail('');
    setTelefono('');
    setComentario('');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <div style={{
        border: '2px solid black',
        borderRadius: '10px',
        boxShadow: '10px 10px 15px black',
        padding: '20px',
        width: '300px'
      }}>
        <h2>Contactanos</h2>
        <div>
          <label htmlFor="nombre">Nombre y Apellido:</label>
          <br />
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <br />
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="comentario">Comentario:</label>
          <br />
          <textarea
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" onClick={enviarCorreoElectronico}>Enviar</button>
      </div>
    </div>
  );
};

export default Contacto;