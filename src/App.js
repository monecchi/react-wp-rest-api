import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

// Atomize
import {
  ThemeProvider,
  DefaultTheme,
  StyleReset,
  Div,
  Container,
  Row,
  Col,
  Tag,
  Anchor,
  Button,
  Text,
  Icon
} from "atomize";

const theme = {
  fontFamily: {
    primary:
      '"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    secondary:
      '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    code: "'Fira Mono','Roboto Mono', monospace"
  },
  colCount: 12,
  grid: {
    containerWidth: {
      xs: "540px",
      sm: "720px",
      md: "960px",
      lg: "1200px",
      xl: "1366px"
    },
    containerMaxWidth: {
      xl: "1366px"
    },
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992, // 992
      xl: 1200
    }
  },
  textSize: {
    size: {
      display3: "48px"
    },
    height: {
      display3: "56px"
    }
  },
  colors: {
    brandgray: "#F7F5F4",
    white: "#ffffff",
    dark: "#141b24",
    brand: "#FC0E36",
    brandAlt: "#EF2840",
    brandHover: "#ea1d2c",
    success: "#1BC160",
    successDark: "#36b37e",
    danger: "#FC0E36",
    softDanger: "#FED9DB",
    softSuccess: "#D7f0E5",
    warning: "#FCC246",
    info: "#3366FF"
  },
  rounded: {
    brandRadius: "20px"
  }
};

// Bootstrap
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

// Restaurants (stores) WP REST API data
//import RestaurantStores from "./Restaurant";

// Importing the Bootstrap CSS
import "./App.scss";

// UI components
import NavbarIfood from "./components/Navbar/NavbarIfood"; // iFood alike custom Navbar
import DestaquesCarousel from "./components/Carousel/DestaquesCarousel"; // Featured Carousel Items (Flickity)
import FoodMenu from "./components/FoodMenu/CardsList/FoodMenu";

//
// Restaurants (stores) listing components
//
import RestaurantsList from "./components/RestaurantsList/RestaurantsList";
import List from "./components/RestaurantsList";
import withListLoading from "./components/RestaurantsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Nossas Lojas",
      customClass: "text-muted"
    };
  }

  componentDidMount() {
    document.getElementsByTagName("body")[0].className = "scroll-smooth";
  }

  componentWillUnmount() {
    document.getElementsByTagName("body")[0].className = "";
  }

  render() {
    return (
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />

          <NavbarIfood />

          <main className="main-layout">
            <div className="home-page">
              <section className={"bg-light py-4"}>
                <div className="highlights-carousel">
                  <div className="highlights-carousel__wrapper">
                    {/*<div className="carousel__wrapper">*/}
                    <DestaquesCarousel />
                    {/*</div>*/}
                  </div>
                </div>
              </section>

              <Div
                tag="section"
                id="restaurants"
                p={{ t: "3rem" }}
                className="stores-card__container"
              >
                <Container>
                  <Text
                    textSize="paragraph"
                    textColor="medium"
                    m={{ b: "0.25rem" }}
                  >
                    Unidades Meu Rancho Pizzaria
                  </Text>
                  <Text
                    tag="h5"
                    textSize="subheader"
                    textWeight="500"
                    fontFamily="secondary"
                    m={{ b: "1rem" }}
                  >
                    Nossas Lojas
                  </Text>
                  <Div
                    p={{ b: "6rem" }}
                    border={{ b: "1px solid" }}
                    borderColor="gray300"
                  >
                    <Row>
                      <RestaurantsList />
                    </Row>
                  </Div>
                </Container>
              </Div>

              <Container className="stores-card__container">
                <p className="mt-3 mb-1">do Cardápio</p>
                <h6 className="text-muted mb-4">Pizzas e outras delícias</h6>
                <Row className="dishes-row" p={{ l: "0", r: "0" }}>
                  <FoodMenu />
                </Row>
              </Container>
            </div>
          </main>
        </ThemeProvider>
      </StyletronProvider>
    );
  }
}

export default App;
