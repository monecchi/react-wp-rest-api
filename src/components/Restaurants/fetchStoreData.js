import React, { Component } from "react";
import useSWR, { mutate } from "swr";
import axios from "axios";

//
// Restaurants data fetching ( axios + swr )
//

let apiURL = "https://pizzariameurancho.com.br/wp-json/mrp/v1";

const fetcher = (...args) => fetch(...args).then(res => res.json()); // default fetcher with fetch
//const fetcher = url => fetch(url).then(res => res.json()); // with fetch()
//const fetcher = url => axios.get(url).then(res => res.data); // with axios



/**
 * Get a Single Restaurant Data
 * @param {string} slug (string) *required
 * @usage getStore("betim")
 * @return (object) store
 */
export const getStore = slug => {
  const url = apiURL;

  if (!this.slug) {
    slug = "betim";
  }

  const { data, error } = useSWR(url + `/stores/${slug}`, fetcher);

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
 * refreshInterval: 180000 // 3 min - e.g fetches data on every 3 minutes
 */
export const getStores = () => {
  const url = apiURL;

  const { data, error, isValidating, mutate } = useSWR(url+'/stores/', fetcher, { revalidateOnFocus: true});

  return {
    stores: data,
    isLoading: !error && !data,
    isError: error,
    isValidating,
    mutate
  };
};

/**
 * Update get Stores
 */
export const updategetStores = () => {
  const url = apiURL;

  document.cookie = 'token='+url+'/stores/'+'; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

  mutate(url+'/stores/');

}
