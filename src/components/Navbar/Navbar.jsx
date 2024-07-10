import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/Logo.png'
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body my-nav">
      <Container>
        <Navbar.Brand href="#"><img className='logo' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
         </Nav>
          <Form className="d-flex gap-5 align-items-center li-items">

          <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Our work</Nav.Link>
            <Nav.Link href="#action2">Careers</Nav.Link>
    
            <Button  className='Nav-btn'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;