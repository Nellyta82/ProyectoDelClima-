import React from 'react';



const Footer = () => {
  return (
    
    <div id="container3"> 

     <footer classpie="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div classpie="col-md-4 d-flex align-items-center">
            <a href="/" classpie="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            
                <svg classpie="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
            </a>
            <span classpie="mb-3 mb-md-0 text-body-secondary">
                <h4 id='titulo-footer'>Un salto al Clima</h4>
                <h4 id='derechos'>Derechos Reservados. Copyright © 2023</h4>
            </span>
        </div>
        
        <div className='col-sm-2 col-lg-4 col-xs-12 footer-text-contac text-center' align='text-center'>
            <div id="list-footer">
                <span className='font-footer'>  
                <h4>Contacto</h4>
                </span>
                <h4>Dirección: Av. Rivadavia 5200 CABA-Argentina</h4>
                <h4>unsaltoalclima@gmail.com</h4>    
            </div>
        </div>
        <div id='container2'>
         <ul classpie="nav col-md-4">
            <button> <a href="https://twitter.com/" > <img src="./img/Twitter.jpg" alt="instagram" width='50px' height='50px'/> </a></button>
            <button>  <a href="https://www.instagram.com/">  <img src="./img/Instagram (2).jpg" alt="instagram" width='50px' height='50px'/> </a></button>
            <button> <a href="https://www.facebook.com/"> <img src="./img/Facebook.jpg" alt="instagram" width='50px' height='50px'/> </a></button>
 
         </ul>
        </div>

    </footer>
</div>
  )
}

export default Footer


