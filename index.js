import React, { Component } from "react";
import { ReactDOM, render } from "react-dom";
// Bootstrap stuff
import Container from "react-bootstrap/Container";
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
      name: "Meu Rancho"
    };
  }

  render() {
    return (
      <div>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Meu Rancho</Navbar.Brand>
          </Container>
        </Navbar>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <RestaurantData />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
