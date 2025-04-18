import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavbarMobile = function () {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bgcolors2 d-block d-md-none"
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-danger"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-danger">
          <Nav className="me-auto text-danger">
            <Nav.Link href="#home" className="red-link">
              Home
            </Nav.Link>
            <Nav.Link href="#novità" className="red-link">
              Novità
            </Nav.Link>
            <Nav.Link href="#radio" className="red-link">
              Radio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <img
          className="text-center dimension2"
          src="src/assets/logos/music.svg"
        />

        <p className="text-danger pt-3">Accedi</p>
      </Container>
    </Navbar>
  );
};

export default NavbarMobile;
