import React from "react";
import { Container, Nav, Navbar, } from "react-bootstrap";
import { Link } from "react-router-dom";



export default function Menu() {
  return (

<Navbar className="Menu" variant="dark"  >
      <Container >
     
        <Navbar.Brand as={Link} to="/"><object data="Gral/casa.svg"  aria-label="home"  className="iconosMenu"/> Home</Navbar.Brand>
        <Nav className="me-auto">   
          <Nav.Link as={Link} to="/Cartas" ><object data="Gral/carta.svg"   aria-label="letter"  className="iconosMenu"/>{" "} Cartas</Nav.Link>{" "}
          <Nav.Link as={Link} to="/Fotos" ><object data="Gral/regalo.svg"   aria-label="gift"  className="iconosMenu"/>{" "} Fotos y Regalos</Nav.Link>{" "}
          <Nav.Link as={Link} to="/ListaDeseos" ><object data="Gral/lista.svg"   aria-label="list"  className="iconosMenu"/>{" "} Lista de Deseos</Nav.Link>{" "}
          <Nav.Link as={Link} to="/Canciones" ><object data="Gral/song.svg"   aria-label="song"  className="iconosMenu"/>{" "} Canciones</Nav.Link>{" "}
        </Nav>
      </Container>
    </Navbar>

    

 

  )
}