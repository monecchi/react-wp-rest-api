import React from "react";

// RestaurantsEmptyList svg component
import RestaurantsListEmpty from "../../components/UI/Illustrations/EmptyState/RestaurantsListEmpty";

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
    <Div tag="span" w="100%" className="restaurants-list--empty">
      <Div
        d="flex"
        w="100%"
        flexDir="column"
        justify="center"
        align="center"
        className="empty-list"
      >
        <Div tag="span" d="inline-block" className="animated-svg">
           <Div tag="span" className="icon-marmita empty-state-icon">
            <RestaurantsListEmpty />
          </Div>
        </Div>
        <Text
          tag="span"
          m={{ t: "1.2rem", b: "0.35rem" }}
          className="restaurant-empty-list__title"
        >
          Nenhuma loja encontrada.
        </Text>
        <span className="restaurant-empty-list__description">
          Edite e limpe os filtros ou recarregue a página.
        </span>
      </Div>
    </Div>
  );
};

export default RestaurantsEmptyList;
