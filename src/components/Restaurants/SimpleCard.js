import React, { Component } from "react";
import { useGetRestaurants } from "./fetchStoreData";

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

const RestaurantSimpleCards = ({ slug }) => {
  const { store, isLoading, isError } = useGetRestaurants();
  const { singleStore } = [];

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar Restaurante</div>;

  let city = store[0].slug || "betim";
  let aberto = 0;

  if (store && store) {
    singleStore = store[0];
    city = singleStore.slug;
    aberto = singleStore[city].is_open;
  }
  return (
    <div className="restaurant-recent-list">
      <a
        className={
          aberto == 1
            ? "restaurant-simple-card"
            : "restaurant-simple-card restaurant-simple-card--closed"
        }
        role="link"
        href={"/lojas/" + singleStore[slug].current_city}
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

          {aberto == 1 ? (
            <div
              className="restaurant-delivery-time"
              aria-label="De 23 a 33 minutos"
            >
              23-33 min
            </div>
          ) : (
            <div className="restaurant-tag">
              <span className="marmita-minitag marmita-minitag--grayscale">
                Fechado
              </span>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default RestaurantCard;
