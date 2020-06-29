import React, { useEffect, useState, Component } from "react";
import axios from "axios";

// Atomize
// Atomize
import {
  ThemeProvider,
  DefaultTheme,
  StyleReset,
  Div,
  Container,
  Row,
  Col,
  Tag,
  Anchor,
  Button,
  Text,
  Icon
} from "react-atomize";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    white: "#ffffff",
    dark: "#141b24",
    brand: "#FC0E36",
    brandAlt: "#EF2840",
    success: "#1BC160",
    successDark: "#36b37e",
    danger: "#FC0E36",
    softDanger: "#FED9DB",
    softSuccess: "#D7f0E5",
    warning: "#FCC246",
    info: "#3366FF",
    brand800: "#671de1"
  },
  colCount: 12,
  grid: {
    containerWidth: {
      xs: "540px",
      sm: "720px",
      md: "960px",
      lg: "1200px",
      xl: "1366px"
    },
    gutterWidth: "16px"
  },
  rounded: {
    ...DefaultTheme.rounded,
    brandRadius: "20px"
  }
};
// Custom cacheable fetch api service
import useFetch from "./src/useFetch";

// Bootstrap stuff
//import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
//import Badge from "react-bootstrap/Badge";

// react-loading-skeleton
import Skeleton from "react-loading-skeleton";

export class RestaurantStores extends Component {
  state = {
    stores: [],
    isLoaded: false
  };
  componentDidMount() {
    axios
      .get("https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/")
      .then(res =>
        this.setState({
          stores: res.data,
          isLoaded: true
        })
      )
      .catch(err => console.log(err));
  }

  htmlDecode = input => {
    var e = document.createElement("div");
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  };

  render() {
    let storedata = [];
    storedata.push(stores);

    let tagColor = "";
    let tagBg = "";
    let { store, city, isOpen } = "undefined";

    let styles = {
      card__places: {
        boxShadow: "0 0.75rem 1.5rem rgba(18,38,63,.03)"
      }
    };

    const { stores, isLoaded } = this.state;

    let isHidden = !this.state.isLoaded ? "block" : "none";

    return (
      <ThemeProvider theme={theme}>
        <StyleReset />
        {stores &&
          stores.map(
            store => (
              ((city = store.slug),
              (isOpen = store[city].is_open == 1 ? "Aberto" : "Fechado"),
              (tagBg =
                store[city].is_open == 1 ? "softSuccess" : "softDanger")),
              (
                <Col size="4" className="store-card" key={store.id}>
                  {console.log(store)}
                  <Div
                    key={store.id}
                    bg="white"
                    d="flex"
                    flexWrap="nowrap"
                    flexDir={{ xs: "column", lg: "column" }}
                    align="auto"
                    w="auto"
                    m={{ b: "1rem" }}
                    p="1.5rem"
                    rounded="sm"
                    shadow="2"
                    hoverShadow="3"
                  >
                    <Text
                      tag="h5"
                      textSize="h5"
                      m={{ b: "1rem" }}
                      className="text-capitalize"
                    >
                      {store.slug  || <Skeleton /> }
                    </Text>

                    <Text tag="p" textSize="body" m={{ b: "1rem" }}>
                      {store[city].formatted_address || <Skeleton count={3} />}
                    </Text>

                    <Div d="flex" flexWrap="wrap">
                      <Tag
                        bg={tagBg}
                        textColor={`${
                          tagBg == "softSuccess" ? "successDark" : "brand"
                        }`}
                        className={`${
                          store[city].is_open == 1
                            ? "badge-status-opened"
                            : "badge-status-closed"
                        }`}
                        rounded="circle"
                        p={{ x: "0.75rem", y: "0.25rem" }}
                        m={{ r: "0.5rem", b: "0.5rem" }}
                        tag="span"
                        textSize="caption"
                        shadow="0"
                      >
                        {isOpen}
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
                </Col>
              )
            )
          )}
      </ThemeProvider>
    );
  }
}

export default RestaurantStores;
