import React from "react";
import useSWR from "swr";
import axios from "axios";

import { getStore } from './fetchStoreData';

//
// Single Restaurant Details Card
//

const RestaurantCard = ({ slug }) => {
  const { store, isLoading, isError } = getStore(slug);
  const { singleStore } = [];
  if (store) {
    singleStore = store[0];
    //console.log(singleStore);
  }
  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar Restaurante</div>;
  return <div>Olá {singleStore[slug].address_city}!</div>;
};

/**
 * StoreProfile Component
 *
 * Get a Single Restaurant (store) details card
 * @property {object} slug * required
 * @property {function} getStore(slug)
 * @return array (store)
 * @usage (Component) <StoreProfile slug="betim" />
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
};

export default StoreProfile;
