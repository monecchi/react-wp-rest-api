import React, { Component } from "react";
import { Link } from "react-router-dom";

// Bootstrap stuff
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Custom components import
import NavbarNav from "../components/navbar/Navbar.js"; // custom component uses Bootstrap navbar
import ManWithFork from "../src/components/UI/Illustrations/EmptyState/ManWithFork";

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
              <div className={"d-flex w-100 flex-column justify-content-center align-items-center py-4"}>
                <ManWithFork />
                <p className="text-muted text-center my-3">
                  Não foi possível encontrar o conteúdo ou página
                </p>
                <Link to="/" className={'btn btn-danger'}>Voltar</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NotFound;
