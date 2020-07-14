import React, { Component, useState } from "react";
import axios from "axios";

// Atomize
import {
  Image,
  Container,
  Row,
  Col,
  Div,
  Tag,
  Anchor,
  Button,
  Text,
  Icon,
  Modal
} from "atomize";

import FoodMenuItems from "./FoodMenuItems";

export class FoodMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      loading: false,
      per_page: 25,
      totalItems: 25,
      paged: 1,
      apiUrl: "https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/",
      showModal: false
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(prev => {
      return { paged: prev.paged + 1 };
      //return { per_page: prev.per_page + 16 };
    });
  }

  componentDidMount() {
    this.setState({ loading: true });

    const wpTotal = async () => axios
      .get(`https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/`)
      .then(res => {
        const itemsTotal = res.headers["x-wp-total"];
        const pagesTotal = res.headers["x-wp-totalpages"];
         this.setState({ totalItems: Number(itemsTotal) });
      });
   
    //const url = this.state.apiUrl + `?per_page=${this.state.per_page}`;
    let url = this.state.apiUrl + `?per_page=${this.state.per_page}&page=${this.state.paged}`;

    axios
      .get(url)
      .then(res => {
        //console.log(res),
          this.setState({
            foods: res.data,
            paged: Number(res.headers["x-wp-totalpages"]),
            totalItems:  Number(res.headers["x-wp-total"]),
            loading: false
          });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { foods, food, loading, per_page, paged, totalItems, showModal } = this.state;
    //console.log(this.state);

    const maxPages = 10;

    return (
      <>
        {this.state.foods.slice(0, this.state.per_page).map((food, index) => {
          return <FoodMenuItems key={food.id} food={food} />;
        })}

        {/* this.state.per_page < this.state.foods.length &&*/}
        {this.state.paged < maxPages && this.state.foods.length && (
          <>
            <Div d="flex" w="100%">
              <button
                type="button"
                role="button"
                onClick={this.loadMore}
                aria-label="Ver mais items do cardápio"
                color="white"
                target=""
                rel=""
                className="btn btn--default btn--white btn--size-m btn--full-width restaurants-list__load-more"
              >
                Mais items do Cardápio
              </button>
            </Div>
          </>
        )}
      </>
    );
  }
}

export default FoodMenu;
