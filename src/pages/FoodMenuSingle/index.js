import React, { Component, useEffect, useState } from "react";
//import { Link } from "react-router-dom";
//import axios from "axios";

const FoodSingle = () => {
  const [food, setFood] = useState({
    food: null,
    loading: true
  });

  // Load single post
  const loadFood = async ({id}) => {

    const response = null;

  };

  useEffect(() => {
    const { id } = food.id;
  }, []);

  return (
    <div>
      <h2>Item do cardápio</h2>
    </div>
  );
};

export default FoodSingle;
