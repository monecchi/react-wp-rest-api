import React, { Component } from "react";
import { ReactDOM } from "react-dom";

// Bootstrap stuff
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom components import
import NavbarNav from "../../components/Navbar/Navbar.js"; // custom component uses Bootstrap navbar

// Importing the Bootstrap CSS
// Import Custom CSS
//import "../../App.scss";

class Sobre extends Component {
  render() {
    return (
      <div className="App">
      <NavbarNav />
      <section className={"bg-light py-4"}>
        <Container>
          <Row className={"justify-content-center align-items-center"}>
            <Col sm={12} className={"p-0 py-4"}>
              <h4 className="text-dark text-center">Sobre</h4>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row className={"justify-content-center align-items-center"}>
          <Col sm={12} className={"p-0 py-4"}>
            <p className="page-intro">Exemplo de Página Sobre :)</p>
          </Col>
        </Row>
      </Container>
        
      </div>
    );
  }
}
export default Sobre;
