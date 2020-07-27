import React, { Component } from "react";
import { Link } from "react-router-dom";

// Atomize
import {
  ThemeProvider,
  DefaultTheme,
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
//import MeuSvg from "../../components/UI/Illustrations/mr-not-found-fork.svg";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  render() {
    const { isLoading } = this.state;

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
                  <Text
                    tag="span"
                    hoverTextColor="white"
                    className="btn__label"
                  >
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

                <Text m={{ b: "0.5rem" }}>Brand Buttons</Text>
                <Div d="flex" w="100%" p={{ t: "1rem", b: "1rem" }}>
                  <Button
                    onClick={() => this.setState({ isLoading: true })}
                    disabled={isLoading}
                    w="100%"
                    prefix={
                      <Icon
                        name={isLoading ? "Loading" : "Search"}
                        d={isLoading ? "block" : "none"}
                        pos="absolute"
                        top="50%"
                        left="1rem"
                        transform="translateY(-50%)"
                        size="18px"
                        color="white"
                        m={{ r: "0.5rem" }}
                      />
                    }
                    textSize="1rem"
                    textColor="#ea1d2c"
                    hoverTextColor="white"
                    bg="white"
                    hoverBg="brand"
                    border="1px solid"
                    borderColor="#eaeaea"
                    hoverBorderColor="brand"
                    h="3rem"
                    rounded="sm"
                    p={{ l: "3rem", r: "2rem" }}
                    m={{ b: "2rem" }}
                    transition
                  >
                    {isLoading ? "Carregando" : "Mais items do Cardápio"} 
                  </Button>
                </Div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NotFound;
