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


      // Guardar la información del cliente en json-server
      fetch('http://localhost:5000/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          email: email,
          telefono: telefono,
          comentario: comentario,
        }),
      })
        .then((response) => {
          console.log('Cliente guardado en json-server:', response);
        })

      }
       
    
    
  return (
   <form
      className="contact-form"
      style={{
        position: 'absolute',
        height: '480px',
        border: '2px solid black',
        borderRadius: '10px',
        boxShadow: '10px 10px 10px 15px black',
        padding: "10px",
        paddingTop: "10px",
        marginLeft: '50px',
        margin: "50px",
        Width: '300px',
        marginTop: "80px",
      }}
      onSubmit={handleSubmit}
    >
      <h3>Gracias por Visitarnos</h3>
      <p>Puedes dejar una sugerencia en el siguiente formulario:</p>

      <div>
        <h4>Nombre y Apellido</h4>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleChangeInput}
          pattern="[A-Za-z\s]+"
          required />
      </div>

      <div>
        <h4>Email</h4>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeInput}
          required />
      </div>

      <div>
        <h4>Teléfono</h4>
      <input
        type="tel"
        name="telefono"
        value={telefono}
        onChange={handleChangeInput}
        pattern="[0-9]+"
        required />
    </div>
    <div>
        <h4>Comentario</h4>
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
