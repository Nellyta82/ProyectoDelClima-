import React from "react";
import Tarjeta from './Tarjeta'

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
//import image7 from '../assets/image7.jpg'


const Nosotros = () => {

    const Cardsdata = [
      
  {
    id: 1,
    title: "Ingrid Cepeda",
    image: image1,
    url: "https://github.com/IngCdaa",
  },
  {
    id: 2,
    title: "Jeskarlet Achique",
    image: image2,
    url: "https://github.com/jeskarlet",
  },
  {
    id: 3,
    title: "Nelly Chirinos",
    image: image3,
    url: "https://github.com/Nellyta82",
  },
  
  {
    id: 4,
    title: "Yajaira Rojas",
    image: image4,
    url: "https://github.com/yajairarojas",
 },

 {
  id: 5,
  title: "Yoselyn Diaz",
  image: image5,
  url: "https://github.com/yosediaz",
},

 
   
  {
    id: 6,
    title: "Blanca Tovar",
    image: image6,
    url: "https://github.com/batovar1969",
  },

  {
    id: 7,
    title: "Deyri Sepulveda",
    image: image7,
    url: "https://github.com/deyri41",
  },
];


  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        <div class="div-centralizada" > <h3>Un Salto al Clima</h3> </div>
        <div class= "div-justificada"> <h4>Es un medio digital centrado en informar sobre las últimas novedades en el clima, brindar información y pronósticos meteorológicos, 
        prospectivas climáticas y alertas en su área de incumbencia, basados en el monitoreo continuo de la atmósfera y en el conocimiento científico, con el objeto de proteger a la población, 
        contribuir a la defensa nacional, favorecer el desarrollo sustentable y dar cumplimiento a sus compromisos internacionales en la materia.
        <br /> <br /> 
        Actualmente, Un Salto al Clima está conformado por un equipo de programadoras
         centradas en el mundo web, donde se producen análisis y comparativas sobre nuevas actualizaciones a la página.</h4></div>
        {Cardsdata.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Tarjeta imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Nosotros