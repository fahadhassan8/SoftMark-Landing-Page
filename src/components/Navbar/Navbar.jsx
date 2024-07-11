import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/images/Logo.png";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";

function Navbars() {
  return (
    <div className="my-nav">
      <Navbar expand="lg" className="bg-body">
        <Container>
          <Navbar.Brand href="#">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex gap-5 align-items-center li-items">
              <Nav.Link href="#action1">
                {" "}
                <span> Home </span>
              </Nav.Link>
              <Nav.Link href="#action2">
                {" "}
                <span> Services </span>
              </Nav.Link>
              <Nav.Link href="#action2">
                {" "}
                <span> About Us </span>
              </Nav.Link>
              <Nav.Link href="#action2">
                <span> Our work </span>
              </Nav.Link>
              <Nav.Link href="#action2">
                <span>Careers</span>
              </Nav.Link>

              <Button className="Nav-btn">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
