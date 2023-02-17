import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Navbarr() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">User App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/contact"
              >
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/about"
              >
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
