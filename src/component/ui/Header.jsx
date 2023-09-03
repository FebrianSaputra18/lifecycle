import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3">
      <Container fluid>
        <Navbar.Brand href="news">Koran Koran</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="news">News Ppper</Nav.Link>
            <Nav.Link href="redux">Redux</Nav.Link>
            <NavDropdown title="Yang Kalian Cari" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Duniawi</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Akhirat</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Lainnya</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Search Pro
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
