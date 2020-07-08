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
    let { city } = singleStore.slug;
    let aberto = store[city].is_open;
    //console.log(singleStore);
  }
  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar Restaurante</div>;
  return (
    <div>
      <a
        className={aberto == 1 ? "restaurant-simple-card" : "restaurant-simple-card restaurant-simple-card--closed"}
        role="link"
        href={"/"+singleStore[slug]}
        key={singleStore[slug].id}
      >
        <div className="restaurant-logo-container">
          <img
            className="restaurant-logo"
            src={singleStore[slug].resources.logo_url}
            alt={"Meu Rancho " + singleStore[slug].address_city}
          />
        </div>
        <div className="restaurant-info-container">
          <div className="restaurant-name">
            {"Meu Rancho " + singleStore[slug].address_city}
          </div>
          <div
            className="restaurant-delivery-time"
            aria-label="De 23 a 33 minutos"
          >
            23-33 min
          </div>
        </div>
      </a>
    </div>
  );
};

export default RestaurantCard;
