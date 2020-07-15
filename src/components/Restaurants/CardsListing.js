import React, { Component, useEffect, useState } from "react";
import useSWR from "swr";
import { getStores, updategetStores } from "./fetchStoreData";

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

// react-loading-skeleton
import Skeleton from "react-loading-skeleton";

// Custom loading skeleton
import RestaurantCardsSkeleton from "./CardsLoading";

// Custom loading skeleton
import RestaurantsEmptyList from "./EmptyList";

//
// Restaurants Listing Cards Component
//

/**
 * StoreProfile Component
 *
 * Get All Restaurant (stores) Listing Cards
 * @use (function) getStores()
 * @usage (component) <RestaurantCardsListing />
 */

const RestaurantCardsListing = (props) => {

  const { stores, isLoading, isError, isValidating, mutate } = getStores();

  const { allStores, storesCount } = [];

  //const [componentState, setComponentState] = useState({
     //storesCount: []
  //});

  if (stores) {
    allStores = stores;
    //storesCount = Object.keys(allStores); // retorna um array enumerado
    //console.log(storesCount);
    //console.log(allStores);
  }

  //useEffect(() => {

   // setComponentState({ storesCount: storesCount });

  //}, [storesCount, setComponentState]);

  // stores = []; // force store empty to check if isError works

  if (isError) return <div>Erro ao carregar Restaurante</div>;

  if (isLoading) {
    return <RestaurantCardsSkeleton />;
    //return <RestaurantCardsSkeleton storesCount={componentState.storesCount} />;
  }

  //if (!stores || stores.length === 0) return <RestaurantCardsSkeleton />;
  if (!stores || stores.length === 0) return <RestaurantsEmptyList />;

  const { url } = "https://pizzariameurancho.com.br/wp-json/mrp/v1";

  return (
    <>
      <Div d="flex" flexDir="row" w="100%">
        <Div d="flex" justify="flex-start">
          {isValidating && <Icon name="Loading3" size="20px" color="brand" />}
        </Div>
        <Div d="flex" justify="flex-end">
          <Button
            onClick={() => updategetStores()}
            disabled={isValidating}
            cursor="pointer"
          >
            Atualizar
          </Button>
        </Div>
      </Div>

      {allStores.map(store => {
        let city = store.slug;
        let aberto = store[city].is_open;
        let tagBg = aberto == 1 ? "softSuccess" : "softDanger";
        let isOpenLabel = aberto == 1 ? "Aberto" : "Fechado";
        //console.log(store);
        return (
          <Col size={{ xs: 6, md: 4, lg: 4, xl: 4 }} key={store.id}>
            <Div
              m={{ b: { xs: "1rem", lg: "0" } }}
              className="store-card store-card--vertical"
            >
              <Div
                d="flex"
                flexDir="column"
                h="100%"
                p={{ xs: "0.75rem", md: "0.75rem", lg: "1.5rem", xl: "1.5rem" }}
                bg="white"
                border="1px solid"
                borderColor={aberto == 1 ? "gray200" : "#e1e1e1"}
                shadow={aberto == 1 ? "md" : "0"}
                hoverShadow={aberto == 1 ? "lg_hover" : "0"}
                rounded="sm"
                m={{ b: { xs: "1.3rem", lg: "1.3rem" } }}
                className={
                  aberto == 1
                    ? "store-card__wrapper"
                    : "store-card__wrapper store-card--closed"
                }
                transition="all"
              >
                <Text
                  tag="h5"
                  textSize="h5"
                  m={{ b: "1rem" }}
                  className="restaurant-name text-capitalize"
                >
                  {store.slug}
                </Text>

                <Text tag="p" textSize="body" m={{ b: "1rem" }}>
                  {store[city].formatted_address}
                </Text>

                <Div d="flex" flexWrap="wrap">
                  <Tag
                    bg={tagBg}
                    textColor={tagBg == "softSuccess" ? "successDark" : "brand"}
                    className={
                      store[city].is_open == 1
                        ? "badge-status-opened"
                        : "badge-status-closed"
                    }
                    rounded="circle"
                    p={{ x: "0.75rem", y: "0.25rem" }}
                    m={{ r: "0.5rem", b: "0.5rem" }}
                    tag="span"
                    textSize="caption"
                    shadow="0"
                  >
                    {isOpenLabel}
                  </Tag>{" "}
                </Div>

                <div className="d-flex flex-column mb-2">Ligar na loja</div>

                <Anchor
                  href={"tel:" + store[city].phone_raw}
                  hoverTextColor="white"
                  className={
                    store[city].is_open == 0
                      ? "text-decoration-none disabled"
                      : "text-decoration-none"
                  }
                  disabled={store[city].is_open == 0 ? "disabled" : null}
                >
                  <Button
                    textColor="brand"
                    hoverTextColor="white"
                    textWeight="700"
                    bg="softDanger"
                    hoverBg="brand"
                    cursor="pointer"
                    rounded="sm"
                    suffix={
                      <Icon
                        name="LongRight"
                        size="20px"
                        color="brand"
                        m={{ l: "1rem" }}
                        className={
                          store[city].is_open == 0
                            ? "fill-white text-decoration-none disabled"
                            : "text-decoration-none"
                        }
                        hoverColor="white"
                      />
                    }
                    disabled={store[city].is_open == 0 ? "disabled" : null}
                  >
                    {store[city].formatted_phone}
                  </Button>
                </Anchor>
              </Div>
            </Div>
          </Col>
        );
      })}
    </>
  );
};

export default RestaurantCardsListing;
