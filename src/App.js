import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    gutterWidth: "16px",
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992, // 992
      xl: 1440 // 1200
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

// Single Restaurant Card Component
import RestaurantCard from "./components/Restaurants/Card";
// All Restaurants Listing Cards
import RestaurantCardsListing from "./components/Restaurants/CardsListing";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Pizzaria Meu Rancho",
      loadedClass: "is-loaded"
    };
  }

  componentDidMount() {
    document.getElementsByTagName("body")[0].className = "scroll-smooth";
  }

  componentDidUpdate() {
    document.getElementsByTagName("body")[0].className = "scroll-smooth";
  }

  componentWillUnmount() {
    document.getElementsByTagName("body")[0].className = "";
  }

  render() {
    return (
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
              p={{ t: "2rem" }}
              className="container-pb"
            >
              <Container>
                <Text textSize="paragraph" textColor="medium">
                  Unidades Meu Rancho Pizzaria
                </Text>
                <Text
                  tag="h5"
                  textSize="subheader"
                  textWeight="500"
                  fontFamily="secondary"
                  p={{ b: "1.25rem" }}
                >
                  Nossas Lojas
                </Text>
                <Div
                  p={{ b: "1.25rem" }}
                  border={{ b: "1px solid" }}
                  borderColor="gray300"
                >
                  <Row className="stores-row">
                    {/*<RestaurantsList />*/}
                    <RestaurantCardsListing />
                  </Row>
                </Div>
              </Container>
            </Div>

            <Div tag="section" id="cardapio-home" className="container-pb">
              <Container>
                <Text textSize="paragraph" textColor="medium">
                  do Cardápio
                </Text>
                <Text
                  tag="h5"
                  textSize="subheader"
                  textWeight="500"
                  fontFamily="secondary"
                  p={{ b: "1.25rem" }}
                >
                  Pizzas e outras delícias
                </Text>
                <Row className="dishes-row">
                  <FoodMenu />
                </Row>
              </Container>
            </Div>

            <Div
              tag="section"
              id="ultimos-restaurantes"
              p={{ t: "2rem" }}
              className="container-pb"
            >
              <Container>
                <Text textSize="paragraph" textColor="medium">
                  Abertos há pouco
                </Text>
                <Text
                  tag="h5"
                  textSize="subheader"
                  textWeight="500"
                  fontFamily="secondary"
                  p={{ b: "1.25rem" }}
                >
                  Meu Rancho
                </Text>
                <Div
                  p={{ b: "1.25rem" }}
                  border={{ b: "1px solid" }}
                  borderColor="gray300"
                >
                  <Row className="stores-row">
                    <RestaurantCard slug="betim" />
                  </Row>
                </Div>
              </Container>
            </Div>
          </div>
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
