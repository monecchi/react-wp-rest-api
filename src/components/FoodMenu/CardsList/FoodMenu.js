import React, { Component, useState } from "react";
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
  Icon,
  Modal
} from "atomize";

import FoodMenuItems from "./FoodMenuItems";

export class FoodMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      isLoaded: false,
      showModal: false
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/?per_page=25"
      )
      .then(
        res =>
          this.setState({
            foods: res.data,
            isLoaded: true
          })
        //this.setState({ isLoaded: true })}
      )
      .catch(err => console.log(err));
  }

  render() {
    const { foods, isLoaded, showModal } = this.state;
    //console.log(this.state);
    return (
      <>
        {foods &&
          foods.map(food => <FoodMenuItems key={food.id} food={food} />)}
      </>
    );
  }
}

export default FoodMenu;
