//import React, { Component, useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
//import axios from "axios";

//
// Restaurants data fetching ( axios + swr )
//

let apiURL = "https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/";

const fetcher = (...args) => fetch(...args).then(res => res.json()); // default fetcher with fetch
//const fetcher = url => fetch(url).then(res => res.json()); // with fetch()
//const fetcher = url => axios.get(url).then(res => res.data); // with axios

/**
 * Get a Single Restaurant Data
 * @param {string} slug (string) *required
 * @usage getStore("betim")
 * @return (object) store
 */
export const useGetSingleRestaurant = slug => {
  const { data, error, isValidating, mutate } = useSWR(
    apiURL + `${slug}` + "/",
    fetcher
  ); // { suspense: true }

  return {
    store: data,
    isLoading: !error && !data,
    isError: error,
    isValidating,
    mutate
  };
};

export const useGetRestaurantSuspense = slug => {
  const { data, error, isValidating, mutate } = useSWR(
    apiURL + `${slug}` + "/",
    fetcher,
    { suspense: true }
  );

  return {
    store: data,
    isLoading: !error && !data,
    isError: error,
    isValidating
  };
};

/**
 * Get All Restaurant Data

 * @usage getStores()
 * @return (object) stores
 * refreshInterval: 180000 // 3 min - e.g fetches data on every 3 minutes
 */

export const useGetRestaurants = () => {
  const url = apiURL;

  const { data, error, isValidating, mutate } = useSWR(url, fetcher, {
    revalidateOnFocus: true
  });

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
export const updateRestaurant = mutate_key => {
  document.cookie =
    "token=" + mutate_key + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  return mutate(mutate_key);
};
