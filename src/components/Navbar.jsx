
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const emailAddress = 'example@example.com';

  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
  <Container>
    <Navbar.Brand as={Link} to="/">
      <h2>CloudVista</h2>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto"> 
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/services">Services</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Button variant='primary' className='rounded-lg nav-btn'>
        <a href={`mailto:${emailAddress}`} className="text-white text-decoration-none">Contact Us</a>
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
};

export default NavbarComponent;
