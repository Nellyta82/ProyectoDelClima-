import { Button } from "react-bootstrap"


const Principal = () => {
    return(
<section id="luna">
    <div >
        <br />
        <h1 id="principal-title">Bienvenidos a Un Salto Al Clima</h1>
        <p id="principal-text"> Durante este Invierno hay una mayor probabilidad de que se registren, en promedio, temperaturas superiores a lo normales. En el extremo norte del país y el centro y norte de Patagonia se favorecen valores dentro del promedio para la época, mientras que en Tierra del Fuego y el sur de Santa Cruz incluso pueden estar por debajo de la media.
        Los cambios de temperaturas son un caos por eso se recomienda no salir de casa sin ver el pronóstico del Clima</p>
        <br />
        <button id="punto"><a href="./Inicio">Ver Clima</a></button>
        <br /> 
        <br />
    </div>  
        <br />
        <img src="./img/temperatura11.jpg" width='500px' />
        <br />
    <div id="principal">
        <br />
        <br />
        <h1 id="principal-title"> Un Salto Al Clima</h1>
        <p id="principal-text"> El Servicio de Hidrología Naval expresa en su sitio oficial que el solsticio de invierno de este 2023 ocurrirá el 21 de junio a las 11:58 horas. De esa manera, se convertirá en el día más corto de este 2023. El mismo se desarrollará hasta el 23 de septiembre, cuando un nuevo equinoccio de comienzo a la primavera en Argentina.</p>
    </div>
        <br />
        <img src="./img/solsticio3.jpg" width='500px'/>
    
</section>


    )
}
export default Principal