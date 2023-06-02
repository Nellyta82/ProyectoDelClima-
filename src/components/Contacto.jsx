import react, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    Nombre:    '',
    Apellido:  '',
    Email:     '',
    Telefono:  '',
    Comentario: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar el formulario por correo electrónico
    // utilizando alguna librería o servicio de backend

    console.log('Datos del formulario:', formData);
  };

  return (
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
  );
};

export default Contacto;
