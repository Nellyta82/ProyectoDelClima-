import React from "react";
import Tarjeta from './Tarjeta'

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
//import image4 from '../assets/image4.jpg'
//import image5 from '../assets/image5.jpg'
//import image6 from '../assets/image6.jpg'
//import image3 from '../assets/image7.jpg'


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
    title: "Jeskarlet",
    image: image2,
    url: "https://github.com/jeskarlet",
  },
  {
    id: 3,
    title: "Nelly",
    image: image3,
    url: "https://github.com/Nellyta82",
  },
  
  //{
   // id: 4,
   // title: "Yajaira",
   // image: image4,
   // url: "https://github.com/IngCdaa",
 // },


 // {
   
  //{
    //id: 6,
    //title: "Blanca Tovar",
    //image: image6,
    //url: "https://github.com/batovar1969",
  //},//

  //{
    //id: 1,
    //title: "Ingrid Cepeda",
    //image: image1,
    //url: "https://github.com/IngCdaa",
  //},
];


  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
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