import React, { Component, useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";

const apiURL = "https://pizzariameurancho.com.br/wp-json/mrp/v1";

const fetcher = url => fetch(url).then(res => res.json());

// get single store data
const getStore = (slug) => {
  const url = apiURL;

  const { data, error } = useSWR(apiURL+`/stores/${slug}`, fetcher);

  if(this.slug) {
    return {
      store: data,
      isLoading: !error && !data,
      isError: error,
    };
  }
}

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


function StoreProfile({store}) {
  let slug = "betim";
  const { store, isLoading, isError } = getStore("betim");
  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar Restaurante</div>;
  return <div>Olá {store.slug.address_city}!</div>;
}

export default getStore;
export default StoreProfile;

