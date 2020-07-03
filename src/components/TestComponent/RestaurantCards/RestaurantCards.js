import React, { useEffect, useState, Component } from "react";
import axios from "axios";

// Atomize
import {
  ThemeProvider,
  DefaultTheme,
  StyleReset,
  Div,
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
  rounded: {
    ...DefaultTheme.rounded,
    brandRadius: "20px"
  }
};

// Custom cacheable fetch api service
import useFetch from "./src/useFetch";

// Bootstrap stuff
//import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import Badge from "react-bootstrap/Badge";

// react-loading-skeleton
import Skeleton from "react-loading-skeleton";

// Modifying BS components - https://github.com/react-bootstrap/react-bootstrap/blob/v1.0.1/src/Card.json
import createWithBsPrefix from "react-bootstrap/createWithBsPrefix";
import divWithClassName from "react-bootstrap/divWithClassName";

const DivStyledAsH5 = divWithClassName("h5");

Card.Title = createWithBsPrefix("card-title", {
  Component: DivStyledAsH5
});

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

  htmlDecode(input) {
    var e = document.createElement("div");
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  render() {
    isLoaded: true;

    let storedata = [];
    storedata.push(stores);

    let city;
    let isOpen = "";
    let tagColor = theme.colors.dark;
    let tagBg = theme.colors.white;

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
        <div className="card-deck">
          {stores &&
            stores.map(
              (store, index) => (
                ((city = store.slug),
                (isOpen = store[city].is_open == 1 ? "Aberto" : "Fechado"),
                (tagBg =
                  store[city].is_open == 1 ? "softSuccess" : "softDanger")),
                (
                  <div className="col p-0 m-0">
                    {console.log(storedata)}

                    <Card
                      key={index}
                      className="lift border-0"
                      style={styles.card__places}
                    >
                      <Card.Body>
                        <Card.Title className="text-capitalize mb-4">
                          {store.slug || <Skeleton />}
                        </Card.Title>
                        <Card.Subtitle
                          className="mb-2 text-muted"
                          dangerouslySetInnerHTML={{
                            __html: "StoreID: " + store.id
                          }}
                        />
                        <Card.Text>
                          {store[city].formatted_address || (
                            <Skeleton count={3} />
                          )}
                        </Card.Text>

                        <div className="d-flex justify-content-start align-items-center">
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
                        </div>

                        <div className="mb-2">Ligar na loja</div>
                        <Anchor
                          href={"tel:" + store[city].phone_raw}
                          hoverColor="white"
                          textDecor="none"
                          className={
                            store[city].is_open == 0
                              ? "text-decoration-none disabled"
                              : "text-decoration-none"
                          }
                          disabled={
                            store[city].is_open == 0 ? "disabled" : null
                          }
                        >
                          <Button
                            textColor="brand"
                            hoverColor="white"
                            hoverTextColor="white"
                            textWeight="700"
                            bg="softDanger"
                            hoverBg="brand"
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
                            textDecor="none"
                            cursor="pointer"
                            rounded="md"
                            disabled={
                              store[city].is_open == 0 ? "disabled" : null
                            }
                          >
                            {store[city].formatted_phone}
                          </Button>
                        </Anchor>
                      </Card.Body>
                    </Card>
                  </div>
                )
              )
            )}
        </div>
      </ThemeProvider>
    );
  }
}

export default RestaurantStores;
