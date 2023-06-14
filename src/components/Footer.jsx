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
            </span>
        </div>
        
        <div className='col-sm-2 col-lg-4 col-xs-12 footer-text-contac text-center' align='text-center'>
            <div id="list-footer">
                <span className='font-footer'>  
                <h6>Contacto</h6>
                </span>
                <h6>Dirección: Av. Rivadavia 5200 CABA-Argentina</h6>
                <h6>unsaltoalclima@gmail.com</h6>    
            </div>
        </div>
        <div id='container2'>
         <ul classpie="nav col-md-4 list-unstyled d-flex">
            <button><img src="./img/Twitter.jpg" alt="instagram" width='50px' height='50px'/></button>
            <button><img src="./img/Instagram (2).jpg" alt="instagram" width='50px' height='50px'/></button>
            <button><img src="./img/Facebook.jpg" alt="instagram" width='50px' height='50px'/></button>  
         </ul>
        </div>

    </footer>
</div>
  )
}

export default Footer


