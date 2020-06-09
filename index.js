import React, { Component } from "react";
import { ReactDOM, render } from "react-dom";
// Bootstrap stuff
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

import Hello from "./Hello";
import RestaurantData from "./Restaurant";

// Importing the Bootstrap CSS
// Import Custom CSS
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Meu Rancho P",
      customClass: "custom-title"
    };
  }

  render() {
    return (
      <div>
        <Navbar bg="brand" expand="lg" variant="dark">
          <Navbar.Brand href="#home">Meu Rancho</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
        <Row>
        <Col>
          <p>Start editing to see some magic happen :)</p>
          <Hello name={this.state.name} className={this.state.customClass} />
          <RestaurantData />
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
