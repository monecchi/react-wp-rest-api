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
  Icon,
  Modal
} from "react-atomize";

import RestaurantsList__Cards from "./RestaurantsList";

export class RestaurantsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      isLoaded: false,
      showModal: false
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/"
      )
      .then(res =>
        this.setState({
          stores: res.data,
          isLoaded: true
        })
        //this.setState({ isLoaded: true })}
      )
      .catch(err => console.log(err));
  }

  render() {
    const { stores, isLoaded, showModal } = this.state;
    console.log(this.state);
    return (
      <>
        {stores &&
          stores.map(store => <RestaurantsListCards key={store.id} store={store} />)}      
      </>
    );
  }
}

export default RestaurantsList;
