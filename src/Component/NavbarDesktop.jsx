import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarDesktop = function () {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bgcolors2 d-none d-lg-block"
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-danger"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-danger">
          <Nav className="me-auto text-danger">
            <Nav.Link href="#home">
              <i className="bi bi-shuffle mx-2 text-white"></i>
            </Nav.Link>
            <Nav.Link href="#novità">
              <i className="bi bi-skip-start-fill mx-2 text-white"></i>
            </Nav.Link>
            <Nav.Link href="#radio">
              <i className="bi bi-play-circle-fill mx-2 text-white"></i>
            </Nav.Link>
            <Nav.Link href="#novità">
              <i className="bi bi-skip-end-fill mx-2 text-white"></i>
            </Nav.Link>
            <Nav.Link href="#radio">
              <i className="bi bi-pc-display mx-2 text-white"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <img
          className="text-center dimension2 margin"
          src="src/assets/logos/apple.svg"
        />

        <button className="text-white bg-danger pt-3 bordi pb-5">Accedi</button>
      </Container>
    </Navbar>
  );
};

export default NavbarDesktop;
