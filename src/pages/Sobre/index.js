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

// Theme Custom Components
import NavbarIfood from "../../components/Navbar/NavbarIfood"; // iFood like navbar

class Sobre extends Component {
  render() {
    return (
      <>
        <NavbarIfood />
        <Div tag="section" p={{ t: { xs: "6rem", md: "10rem" } }}>
          <Container d="flex" flexDir="column" align="center">
            <Text
              tag="h1"
              textWeight="500"
              textAlign="center"
              textSize="display3"
              fontFamily="secondary"
              m={{ b: "1rem" }}
            >
              Meu Rancho Pizzaria
            </Text>
            <Text
              tag="h2"
              textWeight="400"
              maxW="36rem"
              textSize="subheader"
              textAlign="center"
              fontFamily="secondary"
              textColor="medium"
              m={{ b: "2.5rem" }}
            >
              Desde 1996, apaixonados por esse delicioso alimento, aprimoramos
              receitas para servir pizzas e massas com o gostinho especial que
              toda cozinha mineira tem.
            </Text>

            <Div
              d="flex"
              w="100%"
              justify="center"
              flexDir={{ xs: "column", sm: "row" }}
            >
              <Link to="/">
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="brandAlt"
                  hoverBg="brand"
                  rounded="lg"
                  m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                >
                  Ver Cardápio
                </Button>
              </Link>
              <Anchor
                href="https://www.ifood.com.br/delivery/betim-mg/pizzaria-meu-rancho-angola/442ea04f-571b-4af6-8666-ea62bb63c1d8"
                target="_blank"
              >
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="transparent"
                  hoverBg="white"
                  border="1px solid"
                  borderColor="gray400"
                  hoverBorderColor="brand"
                  rounded="lg"
                  p={{ l: "0.5rem", r: "1rem" }}
                  textColor="brand"
                  prefix={
                    <Icon
                      name="Play"
                      size="18px"
                      m={{ r: "0.5rem" }}
                      color="brand"
                    />
                  }
                >
                  Pedir no iFood
                </Button>
              </Anchor>
            </Div>
          </Container>
        </Div>
        <Div
          tag="section"
          w="100vw"
          p={{ t: { xs: "3rem", md: "6rem" } }}
          overflow="hidden"
        >
          <Container>
            <Div
              d="flex"
              justify="center"
              p={{ b: "10.5rem" }}
              border={{ b: "1px solid" }}
              borderColor="gray300"
            >
              <Div
                minW={{ xs: "100%", md: "44rem", lg: "59rem" }}
                d="flex"
                align="center"
                flexDir="column"
                h={{ xs: "auto", md: "21rem", lg: "20rem" }}
                pos="relative"
              />
            </Div>
          </Container>
        </Div>
      </>
    );
  }
}

export default Sobre;
