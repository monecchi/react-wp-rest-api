import React, { Component, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useSWR from "swr";
import axios from "axios";

const apiURL = "https://pizzariameurancho.com.br/wp-json/mrp/v1";

//const fetcher = url => fetch(url).then(res => res.json()); // fetch api
const fetcher = url => axios.get(url).then(res => res.data); // axios

// get single store data
const getStore = (slug) => {
  const url = apiURL;

  const { data, error } = useSWR(url+`/stores/${slug}`, fetcher);

  return {
    store: data,
    isLoading: !error && !data,
    isError: error
  };
};

// get al stores data
function getStores() {
  const { data, error } = useSWR(`/stores/`, fetcher, {
    refreshInterval: 1000
  });
  return {
    stores: data,
    isLoading: !error && !data,
    isError: error
  };
}

/**
 * StoreProfile Component
 * 
 * Get a Single Restaurant (store) profile card
 * @parameter (slug) * required
 * @use getStore()
 * @return array (store)
 */
const StoreProfile = ({ slug }) => {
  const { store, isLoading, isError } = getStore(slug);
  const { singleStore } = [];
  if (store) {
    singleStore = store[0];
    //console.log(singleStore);
  }
  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar Restaurante</div>;
  return <div>Olá {singleStore[slug].address_city}!</div>;
}

export default StoreProfile;
