import React, { Component } from "react";
//import { Link } from "react-router-dom";

// Atomize
import {
  Div,
  Container,
  Row,
  //Col,
  //Tag,
  //Anchor,
  //Button,
  Text,
  //Icon
} from "atomize";


// Restaurants (stores) WP REST API data
//import RestaurantStores from "./Restaurant";

// Importing the Bootstrap CSS
import "./App.scss";

// UI components
import NavbarIfood from "./components/Navbar/NavbarIfood"; // iFood alike custom Navbar
import DestaquesCarousel from "./components/Carousel/DestaquesCarousel"; // Featured Carousel Items (Flickity)
import FoodMenu from "./components/FoodMenu/CardsList/FoodMenu";
import FooterSlim from "./components/Footer/Slim";
import Preloader from "./components/Preloader";

//
// Restaurants (stores) listing components
//
//import RestaurantsList from "./components/RestaurantsList/RestaurantsList";
//import List from "./components/RestaurantsList";
//import withListLoading from "./components/RestaurantsList";

// Single Restaurant Card Component
import RestaurantCard from "./components/Restaurants/Card";
// All Restaurants Listing Cards
import RestaurantCardsListing from "./components/Restaurants/CardsListing";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pizzaria Meu Rancho",
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => { 
      this.setState({ loading: false })
    }, 1000)
    document.getElementsByTagName("body")[0].classList.add("ready");
  }

  componentDidUpdate() {
    //document.getElementsByTagName("body")[0].classList.add("loaded")
    //document.getElementsByTagName("body")[0].classList.remove("loaded");
  }

  componentWillUnmount() {
    //document.getElementsByTagName("body")[0].className = "";
    //document.getElementsByTagName("body")[0].classList.remove("loaded");
  }

  render() {
    const { loading } = this.state;
    
    return (
      <>
        <NavbarIfood />
        <Preloader loader="Loading3" color="brand" size="2.5rem" duration={1} isLoading={loading}>
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
              <Container id="restaurants-container">
                <Text textSize="paragraph" textColor="medium">
                  Unidades Meu Rancho Pizzaria
                </Text>
                <Text
                  tag="h5"
                  textSize="subheader"
                  textWeight="500"
                  fontFamily="secondary"
                  p={{ b: "1rem" }}
                >
                  Nossas Lojas
                </Text>
                <Div
                  p={{ b: "1rem" }}
                  border={{ b: "1px solid" }}
                  borderColor="gray300"
                >
                <Row>
                    {/*<RestaurantsList />*/}
                    <RestaurantCardsListing />
                </Row>
                </Div>
              </Container>
            </Div>

            <Div tag="section" id="cardapio-home" className="container-pb">
              <Container id="restaurants-dishes">
                <Text textSize="paragraph" textColor="medium" p={{ t: "3rem" }}>
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
              <Container id="restaurants-container">
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
            <FooterSlim />
          </div>
        </main>
        </Preloader>
      </>
    );
  }
}

export default App;
