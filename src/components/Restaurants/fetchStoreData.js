import React from "react";
import useSWR from "swr";
import axios from "axios";

//
// Restaurants data fetching ( axios + swr )
//

let apiURL = "https://pizzariameurancho.com.br/wp-json/mrp/v1";

//const fetcher = url => fetch(url).then(res => res.json()); // with fetch()
const fetcher = url => axios.get(url).then(res => res.data); // with axios


/**
 * Get a Single Restaurant Data
 * @param {string} slug (string) *required
 * @usage getStore("betim")
 * @return (object) store
 */
const getStore = (slug) => {
  const url = apiURL;

  const { data, error } = useSWR(url+`/stores/${slug}`, fetcher);

  return {
    store: data,
    isLoading: !error && !data,
    isError: error
  };
};

/**
 * Get All Restaurant Data

 * @usage getStores()
 * @return (object) stores
 */
const getStores = () => {
  const url = apiURL;

  const { data, error } = useSWR(url+`/stores/`, fetcher, {
    refreshInterval: 1000
  });

  return {
    stores: data,
    isLoading: !error && !data,
    isError: error
  };
}

export default { getStore, getStores };