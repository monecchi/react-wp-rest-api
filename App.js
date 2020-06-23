import React, { Component } from "react";
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
} from "react-atomize";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    white: "#ffffff",
    dark: "#141b24",
    brand: "#FC0E36",
    brandAlt: "#EF2840",
    success: "#1BC160",
    successDark: "#36b37e",
    danger: "#FC0E36",
    softDanger: "#FED9DB",
    softSuccess: "#D7f0E5",
    warning: "#FCC246",
    info: "#3366FF",
    brand800: "#671de1"
  },
  grid: {
    containerWidth: {
      xs: "540px",
      sm: "720px",
      md: "960px",
      lg: "1156px",
      xl: "1366px"
    },
    gutterWidth: "16px"
  },
  rounded: {
    ...DefaultTheme.rounded,
    brandRadius: "20px"
  }
};

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// WP REST API data
import RestaurantStores from "./Restaurant";

// App Main Styles
//import logo from "./logo.svg";

// Importing the Bootstrap CSS
import "./App.scss";

// Custom components import
import NavbarIfood from "./components/navbar/NavbarIfood"; // custom component uses Bootstrap navbar
//import NavbarNav from "./components/navbar/Navbar.js"; // custom component uses Bootstrap navbar
//import Hello from "./Hello";
import DestaquesCarousel from "./src/components/HomeCarousel/DestaquesCarousel";
import FoodMenu from "./FoodMenu";

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
      <ThemeProvider theme={theme}>
        <StyleReset />

        <NavbarIfood />

        <section className={"bg-light py-4"}>
          <div className="highlights-carousel">
            <div className="highlights-carousel__wrapper">
              {/*<div className="carousel__wrapper">*/}
              <DestaquesCarousel />
              {/*</div>*/}
            </div>
          </div>
        </section>

        <Container className="stores-card__container">
          <p className="mt-3 mb-1">Unidades Meu Rancho Pizzaria</p>
          <h6 className="text-muted mb-3">Nossas Lojas</h6>

          <Row flexWrap={{ xs: "wrap", md: "nowrap", lg: "nowrap" }}>
            <RestaurantStores />
          </Row>
        </Container>

        <div className="stores-card__container">
          <p className="mt-3 mb-1">do Cardápio</p>
          <h6 className="text-muted mb-4">Pizzas e outras delícias</h6>
          <Row>
            <FoodMenu />
          </Row>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
