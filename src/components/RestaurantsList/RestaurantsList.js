import React, { Component, useEffect, useState } from "react";
import useSWR from "swr";
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

// react-loading-skeleton
import Skeleton from "react-loading-skeleton";

import List from "./List";
import withListLoading from "./withListLoading";

//
// Functional components using React Hooks, don't need "this.state"
// see https://pt-br.reactjs.org/docs/hooks-state.html
//
const RestaurantsList = (props) => {

  const ListLoading = withListLoading(List);

  const [componentState, setComponentState] = useState({
    loading: false,
    stores: null
  });

  useEffect(() => {
    setComponentState({ loading: true });

    const apiUrl = "https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/";

    axios
      .get(apiUrl)
      .then(res => {
        const allStores = res.data;
        setComponentState({ loading: false, stores: allStores });
      })
      .catch(err => console.log(err));
  }, [setComponentState]);

  return (
    <>
    <ListLoading isLoading={componentState.loading} stores={componentState.stores} />
    </>
  );
};

export default RestaurantsList;
