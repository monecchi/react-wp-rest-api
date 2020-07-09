import React, { Component } from "react";
import { Link } from "react-router-dom";

// Atomize
import {
  Div,
  Container,
  Row,
  Col,
  Tag,
  Anchor,
  Button,
  Text,
  Icon,
  Image,
  Modal
} from "atomize";

// Bootstrap stuff
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
//import Button from "react-bootstrap/Button";

// Custom components import
import NavbarIfood from "../../components/Navbar/NavbarIfood.js"; // custom component uses Bootstrap navbar
import ManWithFork from "../../components/UI/Illustrations/EmptyState/ManWithFork";
import MeuSvg from "../components/UI/Illustrations/mr-not-found-fork.svg";

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
        <NavbarIfood />
        <Container>
          <Row>
            <Col size={12}>
              <div className="d-flex w-100 flex-column justify-content-center align-items-center py-4">
                <div className="">
                  <h1
                    className="position-relative"
                    style={{
                      display: this.state.isShowing ? "inherit" : "none"
                    }}
                  >
                    Cadê?!
                  </h1>
                  <ManWithFork />
                </div>
                <p className="text-muted text-center my-3">
                  Não foi possível encontrar o conteúdo ou página
                </p>
                <Link to="/" className="btn btn-danger">
                  voltar
                </Link>

                <Link
                  className="btn btn--default btn--size-m page-not-found__actions--button"
                  role="button"
                  target=""
                  rel=""
                  to="/lista-restaurantes"
                >
                  <Text tag="span" hoverTextColor="white" className="btn__label">
                    Voltar para o início
                  </Text>
                </Link>

                <Button
                  w="auto"
                  textColor="brand"
                  hoverTextColor="white"
                  bg="softDanger"
                  hoverBg="brandHover"
                  rounded="sm"
                  m={"1rem"}
                >
                  <Icon name="LongLeft" color="brand" />
                  Voltar
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NotFound;
