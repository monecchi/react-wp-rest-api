import React, { Component } from "react";
import { Link } from "react-router-dom";

//import logo from "./logo.svg";
// Importing the Bootstrap CSS
// Import Custom CSS
import "./App.scss";


// Bootstrap stuff
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom components import
import NavbarIfood from "./components/navbar/NavbarIfood"; // custom component uses Bootstrap navbar
import NavbarNav from "./components/navbar/Navbar.js"; // custom component uses Bootstrap navbar
import Hello from "./Hello";
import DestaquesCarousel from "./src/components/HomeCarousel/DestaquesCarousel";
import FoodMenu from "./FoodMenu";

// WP REST API data
import RestaurantStores from "./Restaurant";

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
      <>
        <NavbarIfood />

        <section className={"bg-light py-4"}>
          <Container>
            <Row>
              <Col sm={12} className={"p-0"}>
                <DestaquesCarousel />
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
              <RestaurantStores />
              <FoodMenu />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
