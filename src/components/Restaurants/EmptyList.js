import React from "react";

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

const RestaurantsEmptyList = () => {
  return (
    <span className="restaurants-list__empty">
      <div className="restaurant-empty-list">
        <div className="animated-svg">
          <span className="icon-marmita icon-marmita--[object Object]">
          </span>
        </div>
        <span className="restaurant-empty-list__title" tabIndex={0}>
          Nenhuma loja encontrada.
        </span>
        <span className="restaurant-empty-list__description" tabIndex={0}>
          Edite os seus filtros ou limpe todos para voltar.
        </span>
      </div>
    </span>
  );
};

export default RestaurantsEmptyList;
