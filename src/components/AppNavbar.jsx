import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
//, useNavigate
//import FavoriteSideBar from './FavoritesSideBar'
//import { useState } from 'react';


const AppNavbar = () => {


    return (
        <>
<Navbar bg="light" expand="lg" variant="light"> 
<Container>
        <Navbar.Brand as={Link} to="/">e-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/purchases">Purchases</Nav.Link>
          <Nav.Link >Carrito de compras</Nav.Link>
          {/*<Nav.Link onClick={handleShow}>Carrito de compras</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        {/*<Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">News App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/favorites">Favoritos</Nav.Link>
                        <Nav.Link onClick={handleShow}>Sidebar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>*/}

       {/* <FavoriteSideBar 
        show={ show }
    handleClose={ handleClose }
        />*/}

        </>
    );
};

export default AppNavbar;