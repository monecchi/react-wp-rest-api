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
} from "react-atomize";

import FoodMenuItems from "./FoodMenuItems";

export class FoodMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      id: null,
      isLoaded: false,
      showModal: false
    };
  }

  componentDidMount() {

    const { id } = this.state;

    axios
      .get(
        "https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/?per_page=25"
      )
      .then(res =>
        this.setState({
          foods: res.data,
          id: res[0].data.id,
          isLoaded: true
        })
        //this.setState({ isLoaded: true })}
      )
      .catch(err => console.log(err));
  }

  render() {
    const { foods, id, isLoaded, showModal } = this.state;
    console.log(this.state);
    return (
      <>
        {foods &&
          foods.map((food) => <FoodMenuItems key={id} food={food} /> )}      
      </>
    );
  }
}

export default FoodMenu;
