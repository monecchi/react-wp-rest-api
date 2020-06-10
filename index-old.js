import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom"; // importando o BrowserRouter
import { Link } from "react-router-dom";

//import App from "./App";
import Sobre from "./Sobre";

// Bootstrap stuff
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

// Custom components import
import Hello from "./Hello";
import HomeCarousel from "./FeaturedSlider";
import FoodMenu from "./FoodMenu";

// WP REST API data
import RestaurantData from "./Restaurant";

// Importing the Bootstrap CSS
// Import Custom CSS
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Nossas Lojas",
      customClass: "text-muted"
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

        <section className={"bg-light py-4"}>
          <Container>
            <Row>
              <Col sm={12} className={"p-0"}>
                <HomeCarousel />
              </Col>
            </Row>
          </Container>
        </section>

        <Container>
          <Row>
            <Col sm={12}>
              <p className="my-3">Unidades Meu Rancho Pizzaria</p>
              <Hello
                name={this.state.name}
                className={this.state.customClass}
              />
              <RestaurantData />
              <FoodMenu />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById("root"));