import React, { Component } from "react";
import { Link } from "react-router-dom";

// Bootstrap stuff
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom components import
import NavbarNav from "../components/navbar/Navbar.js"; // custom component uses Bootstrap navbar

class NotFound extends Component {
  constructor() {
    super();
    this.state = {
      title: "Não Encontrado"
    };
  }

  render() {
    return (
      <div>
       <NavbarNav />
        <Container>
          <Row>
            <Col sm={12}>
              <p className="my-3">Não foi possível encontrar o conteúdo ou página</p>
            </Col>
          </Row>
        </Container>
        </div>
    );
  }
}

export default NotFound;
