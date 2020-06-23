import React, { Component } from "react";
import axios from "axios";

// Atomize
import {
  Image,
  Container,
  Row,
  Col,
  Div,
  Tag,
  Anchor,
  Button,
  Text,
  Icon
} from "react-atomize";

import FoodMenuItems from "./FoodMenuItems";

export class FoodMenu extends Component {
  state = {
    foods: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get("https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/?per_page=24")
      .then(res =>
        this.setState({
          foods: res.data,
          isLoaded: true
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const { foods, isLoaded } = this.state;
    console.log(this.state);
    return (
      <>
        {foods &&
          foods.map((food, index) => <FoodMenuItems key={index} food={food} />)}
      </>
    );
  }
}

export default FoodMenu;
