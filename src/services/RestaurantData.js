import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

// Custom cacheable fetch api service
import useFetch from "./src/useFetch";

// Bootstrap stuff
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

// react-loading-skeleton
import Skeleton from 'react-loading-skeleton';

// Modifying BS components - https://github.com/react-bootstrap/react-bootstrap/blob/v1.0.1/src/Card.json
import createWithBsPrefix from "react-bootstrap/createWithBsPrefix";
import divWithClassName from "react-bootstrap/divWithClassName";

const DivStyledAsH5 = divWithClassName("h5");

Card.Title = createWithBsPrefix("card-title", {
  Component: DivStyledAsH5
});

export default function RestaurantData() {
  const restaurantInfo = useFetch(
    "https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/"
  );
  let storedata = [];
  let city;
  let isOpen = "";

  let styles = {
    card__places: {
      boxShadow: "0 0.75rem 1.5rem rgba(18,38,63,.03)"
    }
  }

  storedata.push(restaurantInfo);

  return (
    <div className="card-deck">
      {restaurantInfo &&
        restaurantInfo.map(
          (store, index) => (
            ((city = store.slug),
            (isOpen = store[city].is_open == 1 ? "Aberto" : "Fechado")),
            (
              <div className="col p-0 m-0">
                {console.log(storedata)}

                <Card key={index} className="lift border-0" style={styles.card__places}>
                  <Card.Body>
                    <Card.Title
                      className="text-capitalize mb-4"
                      dangerouslySetInnerHTML={{ __html: store.slug || <Skeleton /> }}
                    />
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      dangerouslySetInnerHTML={{
                        __html: "StoreID: " + store.id
                      }}
                    />
                    <Card.Text>{store[city].formatted_address}</Card.Text>

                    <div className="d-flex justify-content-start align-items-center">
                      <Badge className={"mb-3"} pill variant="danger">
                        {isOpen}
                      </Badge>{" "}
                    </div>

                    <div className="mb-2">Ligar na loja</div>

                    <Button href="tel:{store[city].phone_raw}" variant="primary">
                      {store[city].formatted_phone}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            )
          )
        )}
    </div>
  );
}
