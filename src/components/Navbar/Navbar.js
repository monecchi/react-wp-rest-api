import React, { Component } from "react";
import { Link } from "react-router-dom";

// Bootstrap Navbar
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


class NavbarNav extends Component {
  constructor() {
    super();
    this.state = {
      theme: "brand"
    };
  }

  render() {
    return (
        <Navbar bg="brand" expand="lg" variant="dark" className="responsive-header">
          <Navbar.Brand href="/">Meu Rancho</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/" role="button">Home</Link>
              <Link className="nav-link" to="/sobre" role="button">Sobre</Link>
              <NavDropdown title="Cardápio" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pizzas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Massas
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Bebidas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="googlechrome://navigate?url=https://www.ifood.com.br/delivery/betim-mg/pizzaria-meu-rancho-angola/442ea04f-571b-4af6-8666-ea62bb63c1d8">
                  Pedir online no iFood
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default NavbarNav;
