import React, { Component, useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";

const apiURL = "https://pizzariameurancho.com.br/wp-json/mrp/v1/";

const fetcher = url => axios.get(url).then(res => res.data);

// get single store data
function getStore(slug) {
  const { data, error } = useSWR(`https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/${slug}/`, fetcher);
  console.log(data);
  return {
    store: data,
    isLoading: !error && !data,
    isError: error
  };
}

// get al stores data
function getStores() {
  const { data, error } = useSWR(`/stores/`, fetcher, { refreshInterval: 1000 });
  return {
    store: data,
    isLoading: !error && !data,
    isError: error
  };
}


function StoreProfile() {
  const { data, error } = getStore("betim");
  if (error) return <div>Erro ao carregar Resturante</div>
  if (!data) return <div>Carregando...</div>
  return <div>Olá {data[0].slug}!</div>
}

export default StoreProfile;