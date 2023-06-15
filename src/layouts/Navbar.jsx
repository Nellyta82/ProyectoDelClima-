import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link, Form } from "react-router-dom"


const NavBarExample = () => {
    return (
        <>  
    <Navbar className="navBg" collapseOnSelect expand="lg" bg="gray" variant="gray">
        <Container id="container">
            <Nav.Link id="nav" as={Link} to="/" >
                <img src="./img/logo.png" width='230'/>
                <Nav.Link id="lista1" as={Link} to="/" ><span><span>Un Salto Al Clima</span></span></Nav.Link>
               
            </Nav.Link>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link id="lista" as={Link} to="/Inicio" ><span><span>Inicio</span></span></Nav.Link>
                <Nav.Link id="lista" as={Link} to="/nosotros"><span><span>Nosotros</span></span></Nav.Link>
                <Nav.Link id="lista" as={Link} to="/contacto"><span><span>Contacto</span></span></Nav.Link>                
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>  

    <section>
        <Outlet></Outlet>
    </section>

       </>
    )
}
export default NavBarExample