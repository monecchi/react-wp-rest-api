import React, { Component, Suspense } from "react"; 
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

// Component Styles
import "./CardSmall/styles.scss";

//
// Error Boundary
//

// Error boundaries currently have to be classes.
export class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}


//
// Single Restaurant Details Card
// SWR Suspense mode
// @ see: https://swr.vercel.app/docs/suspense
//


const RestaurantCard = ({ slug }) => {

  const { store } = useGetStoreSuspense(slug); // with suspense: true data (store) is never undefined

  if (store) {
    const restaurant = store[0];
    let city = restaurant.slug || "betim";
    let aberto = restaurant[city].is_open;
    //console.log(restaurant);
  }
  return (
    <ErrorBoundary fallback={
    <div className="restaurants-list__error">
        <div className="restaurants-list__error-wrapper">
          <div className="restaurant-card__wrapper">
            <div className="restaurant-card">
              Erro ao carregar Restaurante
            </div>
          </div>
        </div>
      </div>
    }>
    <Suspense fallback={<h1>Loading...</h1>}>
    <a
      className={
        aberto == 1
          ? "restaurant-card__wrapper"
          : "restaurant-card__wrapper restaurant-card--closed"
      }
      role="link"
      tabIndex={0}
      href={`/loja/${restaurant[slug].current_city}`}
    >
      <div className="restaurant-card">
        <div className="restaurant-card__figure">
          <img
            loading="lazy"
            src={restaurant[slug].resources.logo_url}
            alt={"Meu Rancho " + restaurant[slug].address_city}
            className="restaurant-card__img-logo"
          />
        </div>
        <h3>
          <div className="restaurant-card__header">
            <span className="restaurant-name">
              {"Meu Rancho " + restaurant[slug].address_city}
            </span>
          </div>
          <div className="restaurant-card__info">
            <span
              aria-label="Avaliação: 4.8"
              tabIndex={0}
              className="restaurant-rating"
            >
              <span className="icon-marmita icon-marmita--star">
                <svg
                  width={10}
                  height={10}
                  viewBox="0 0 10 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z" />
                </svg>
              </span>
              4.8
            </span>{" "}
            • Pizzaria • 1,0 km
          </div>
        </h3>
        {aberto == 1 ? (
          <div className="restaurant-card__footer">
            38-48 min •{" "}
            <div className="restaurant-card__delivery-fee default">
              Entrega R$ 3.90
            </div>
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
  </Suspense>
  </ErrorBoundary>
  );
};