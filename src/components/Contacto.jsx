import emailjs from 'emailjs-com'
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [comentario, setComentario] = useState('');

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    if (name === 'nombre') {
      setNombre(value.replace(/[^a-zA-Z\s]/g, ''));
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'telefono') {
      setTelefono(value.replace(/[^0-9]/g, ''));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí se implementaría la lógica real para enviar el correo electrónico
    const templateParams = {
      from_name: nombre,
      from_email: email,
      from_telefono: telefono,
      message: comentario,
    };

    emailjs
      .send(
        'service_ds9xwtd',
        'template_cewmib4',
        templateParams,
        '4-Fav4iv9QqYl4Tda'
      )

      .then((response) => {
        console.log('Correo electrónico enviado con éxito:', response);
        // Limpiar los campos después de enviar el correo
        setNombre('');
        setEmail('');
        setTelefono('');
        setComentario('');
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
      });
  };
  return (
   <form
      className="contact-form"
      style={{
        height: '500px',
        border: '2px solid black',
        borderRadius: '10px',
        boxShadow: '10px 10px 10px 15px black',
        padding: "20px",
        paddingTop: "10px",
        marginLeft: '100px',
        maxWidth: '400px',
        margin: "100px",
        Width: '600px',
        marginTop: "100px",
      }}
      onSubmit={handleSubmit}
    >
      <h2>Gracias por Visitarnos</h2>
      <p>Puedes dejar una sugerencia en el siguiente formulario:</p>

      <div>
        <h3>Nombre y Apellido</h3>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleChangeInput}
          pattern="[A-Za-z\s]+"
          required />
      </div>

      <div>
        <h3>Email</h3>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeInput}
          required />
      </div>

      <div>
        <h3>Teléfono</h3>
      <input
        type="tel"
        name="telefono"
        value={telefono}
        onChange={handleChangeInput}
        pattern="[0-9]+"
        required />
    </div>
    <div>
        <h3>Comentario</h3>
        <textarea
          name="comentario"
          value={comentario}
          onChange={(event) => setComentario(event.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">ENVIAR</button>
      </form>
  );
};

export default Contacto;

