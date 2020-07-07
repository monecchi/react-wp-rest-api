import React, { Component, useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";

const url = "https://pizzariameurancho.com.br/wp-json/mrp/v1/";

const fetcher = url => axios.get(url).then(res => res.data, console.log(res));

// get single store data
function getStore(slug) {
  const { data, error } = useSWR(`/stores/${slug}`, fetcher);
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
  const { data, error } =  getStore('betim');
  if (error) return <div>Erro ao carregar Resturante</div>
  if (!data) return <div>Carregando...</div>
  return <div>Olá {data.slug}!</div>
}

export default StoreProfile;