import React, { Component, useEffect, useState } from "react";
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

import List from "./List";
import withListLoading from "./withListLoading";

const RestaurantsList = () => {
  this.state = {
    stores: [],
    isLoaded: false,
    showModal: false
  };

  const ListLoading = withListLoading(List);

  const [appState, setAppState] = useState({
    loading: false,
    stores: null
  });

  useEffect(() => {
    setAppState({ loading: true });

    const apiUrl = "https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/";

    axios
      .get(apiUrl)
      .then(res => {
        const allStores = res.data;
        setAppState({ loading: false, stores: allStores });
      })
      .catch(err => console.log(err));
  }, [setAppState]);

  const { stores, isLoaded, showModal } = this.state;
  console.log(this.state);

  return (
    <>
    <ListLoading isLoading={appState.loading} stores={appState.stores} />
    </>
  );
};

export default RestaurantsList;
