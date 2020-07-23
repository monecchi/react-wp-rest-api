import React, { Component } from "react";
import { useGetStore } from "./fetchStoreData";

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
  const { store, isLoading, isError, isValidating } = useGetStore(slug);
  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  if (isError) return <div>Erro ao carregar Restaurante</div>;

  if (store) {
    const restaurant = store[0];
    let city = restaurant.slug || "betim";
    let aberto = restaurant[city].is_open;
    //console.log(restaurant);
  }
  return (
    <div className="restaurant-recent-list">

    <a className="restaurant-card__wrapper" role="link" tabIndex="0" href="/delivery/betim-mg/habibs---betim-centro/cc67e265-8e02-4a4d-ad37-a896152c6f9a">
      <div className="restaurant-card">
        <div className="restaurant-card__figure">
          <img loading="lazy" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201801232020_cc67e265-8e02-4a4d-ad37-a896152c6f9a.jpg" alt="" className="restaurant-card__img-logo" />
        </div>
        
        <div className="restaurant-card__header">
            <h3>
              <span className="restaurant-name">Habib's - Betim</span>
           </h3>
        </div>

        <div className="restaurant-card__info">
          <span aria-label="Avaliação: 3.3" tabIndex="0" className="restaurant-rating">
            <span className="icon-marmita icon-marmita--star">
              <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path>
              </svg>
            </span>
          3.3 • Lanches • 1,0 km
          </span>
        </div>
       
        <div className="restaurant-card__footer">38-48 min • <div className="restaurant-card__delivery-fee default">Entrega R$ 8.90</div></div>
        </div>
    </a>

      <a
        className={
          aberto == 1
            ? "restaurant-simple-card restaurant-card__wrapper"
            : "restaurant-simple-card restaurant-simple-card--closed"
        }
        role="link"
        href={"/lojas/" + restaurant[slug].current_city}
        key={restaurant[slug].id}
      >
        <div className="restaurant-logo-container">
          <img
            className="restaurant-logo"
            src={restaurant[slug].resources.logo_url}
            alt={"Meu Rancho " + restaurant[slug].address_city}
          />
        </div>
        <div className="restaurant-info-container">
          <div className="restaurant-name">
            {"Meu Rancho " + restaurant[slug].address_city}
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
