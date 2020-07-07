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
} from "atomize";

// react-loading-skeleton
import Skeleton from "react-loading-skeleton";

import List from "./List";
import DishesListLoading from "./DishesListLoading";

//
// Functional components using React Hooks, don't need "this.state"
// see https://pt-br.reactjs.org/docs/hooks-state.html
//
const DishesMenuList = (props) => {

  const DishesListLoading = withListLoading(List);

  const [componentState, setComponentState] = useState({
    loading: false,
    foods: null,
    per_page: 25
  });

  useEffect(() => {
    setComponentState({ loading: true });

    const apiUrl = `https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/?per_page=${componentState.per_page}`;

    axios
      .get(apiUrl)
      .then(res => {
        const allfoods = res.data;
        setComponentState({ loading: false, foods: allfoods });
      })
      .catch(err => console.log(err));
  }, [setComponentState]);

  return (
    <>
    <DishesListLoading isLoading={componentState.loading} foods={componentState.foods} />
    </>
  );
};

export default DishesMenuList;
