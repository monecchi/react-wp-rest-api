import React, { useEffect, useState } from "react";

import useFetch from "./src/useFetch";

export default function RestaurantData() {
  const restaurantInfo = useFetch(
    "https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/"
  );
  let storedata = [];
  let city;

  storedata.push(restaurantInfo);

  return (
    <div className="container">
      {restaurantInfo &&
        restaurantInfo.map(
          (store, index) => (
            (city = store.slug),
            (
              <div className={"row"} key={index}>
                {console.log(storedata)}

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
                      <span dangerouslySetInnerHTML={{ __html: store.id }} />
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
