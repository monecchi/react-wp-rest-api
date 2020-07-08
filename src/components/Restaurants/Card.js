import React, { Component } from "react";
import { getStore } from "./fetchStoreData";

// Atomize
import {
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

//
// Single Restaurant Details Card
//

const RestaurantCard = ({ slug }) => {
  const { store, isLoading, isError } = getStore(slug);
  const { singleStore } = [];

  if (store) {
    singleStore = store[0];
    const { city } = singleStore.slug;
    //console.log(singleStore);
  }
  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar Restaurante</div>;
  return <div>Olá {singleStore[slug].address_city}!</div>;
};

export default RestaurantCard;
