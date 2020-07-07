import React, { Component, useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";

const apiURL = "https://pizzariameurancho.com.br/wp-json/mrp/v1/stores/";

const fetcher = url => axios.get(url).then(res => res.data);

// get single store data
function getStore(slug) {
  const { data, error } = useSWR(apiURL`${slug}`, fetcher);
  return {
    store: data,
    isLoading: !error && !data,
    isError: error
  };
}

// get al stores data
function getStores() {
  const { data, error } = useSWR(apiURL`${slug}`, fetcher, { refreshInterval: 1000 });
  return {
    store: data,
    isLoading: !error && !data,
    isError: error
  };
}


function StoreProfile() {
  const { data, error } =  getStore('betim');
  if (error) return <div>Erro ou carregar dados do resturante</div>
  if (!data) return <div>Carregando...</div>
  return <div>hello {data.slug}!</div>
}

export default { StoreProfile };