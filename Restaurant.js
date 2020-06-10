import React, { useEffect, useState } from "react";

import useFetch from "./src/useFetch";

// Bootstrap stuff
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Modifying BS components - https://github.com/react-bootstrap/react-bootstrap/blob/v1.0.1/src/Card.json
import createWithBsPrefix from 'react-bootstrap/createWithBsPrefix';
import divWithClassName from 'react-bootstrap/divWithClassName';

const DivStyledAsH5 = divWithClassName('h5');

Card.Title = createWithBsPrefix('card-title', {
  Component: DivStyledAsH5,
});

export default function RestaurantData() {
  const restaurantInfo = useFetch(
    "https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/"
  );
  let storedata = [];
  let city;

  storedata.push(restaurantInfo);

  return (
    <div className="card-deck">
      {restaurantInfo &&
        restaurantInfo.map(
          (store, index) => (
            (city = store.slug),
            (
              <div className="col p-0 m-0">
                {console.log(storedata)}

                <Card key={index}>
                  <Card.Body>
                    <Card.Title className="text-capitalize mb-4" dangerouslySetInnerHTML={{ __html: 'Loja ' + store.slug }} />
                    <Card.Subtitle className="mb-2 text-muted" dangerouslySetInnerHTML={{ __html: 'StoreID: ' + store.id }} />
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>

                <div className={"col-12"}>
                  <div>
                    <h4>
                      Store Slug:{" "}
                      <span>
                        <code
                          className="textSecondary"
                          dangerouslySetInnerHTML={{ __html: store.slug }}
                        />
                      </span>
                    </h4>
                    <h4>
                      StoreID:{" "}
                      <span  />
                    </h4>
                    <ul>
                      <li>Telefone: {store[city].formatted_phone}</li>
                      <li>Loja aberta? {store[city].is_open}</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          )
        )}
    </div>
  );
}
