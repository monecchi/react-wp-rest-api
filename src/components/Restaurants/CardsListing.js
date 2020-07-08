import React, { Component, FC, Suspense } from "react";
import { getStores } from "./fetchStoreData";

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
const RestaurantCardsListing = props => {
  const allStores = [];

  const { stores, isLoading, isError } = getStores();

  if (stores) {
    allStores = stores;
    //console.log(allStores);
  }

  // stores = []; // force store empty to check if isError works

  if (isError) return <div>Erro ao carregar Restaurante</div>;
  if (isLoading) return <RestaurantCardsSkeleton />;
  //if (!stores || stores.length === 0) return <RestaurantCardsSkeleton />;
  if (!stores || stores.length === 0) return <RestaurantsEmptyList />;

  return (
    <>
      {allStores.map(store => {
        let city = store.slug;
        let aberto = store[city].is_open;
        let tagBg = aberto == 1 ? "softSuccess" : "softDanger";
        let isOpenLabel = aberto == 1 ? "Aberto" : "Fechado";
        //console.log(store);
        return (
          <Col size={{ xs: 6, md: 6, lg: 4, xl: 4 }} key={store.id}>
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
                borderColor={ aberto == 1 ? "gray200" : "#e1e1e1" }
                shadow={ aberto == 1 ? "3" : "0" }
                hoverShadow={ aberto == 1 ? "4" : "0" }
                rounded="sm"
                m={{ b: { xs: "1.3rem", lg: "1.3rem" } }}
                className={ aberto == 1 ? "store-card__wrapper" : "store-card__wrapper store-card--closed" }
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
