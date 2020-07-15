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

export class FoodMenuTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      loading: false,
      per_page: 25,
      totalItems: 25,
      pagesTotal: null,
      error: "",
      page: 1,
      apiUrl: "https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/",
      showModal: false
    };

    this.getPosts = this.getPosts.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }
  
    getPosts() {
    const { page, per_page, apiUrl } = this.state;
    this.setState({ loading: false });

    return axios.get(
      apiUrl + `?per_page=${per_page}&page=`+page
    ).then(
      response => {
        const { foods, page } = this.state;
        this.setState({
          foods: foods.concat(response.data),
          loading: false,
          pagesTotal: Number(response.headers["x-wp-totalpages"]),
          page: page + 1
        });
      },
      error => {
        this.setState({
          error: error.toJSON().message,
          loading: false,
          hasMore: false
        });
      }
    );
  }

  loadMore() {

    this.loadMore();
    //this.getPosts().then(() => {
      /**
       * Check to see if content loaded is
       * greater than the height of the screen,
       * if not load next page of data.
       */
      //const node = this.scrollBox;
      //if (window.innerHeight > node.offsetTop + node.offsetHeight) {
        //this.loadMore();
      //}
    //});
  }

  //loadMore() {
    //const { page } = this.state;
    //this.setState(prev => {
      //return { page: prev.page + 1 };
      //return { per_page: prev.per_page + 16 };
    //});
  //}

  componentDidMount() {

    this.loadMore();

    //this.setState({ loading: true });

    const wpTotal = async () =>
      axios
        .get(`https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/`)
        .then(res => {
          const itemsTotal = res.headers["x-wp-total"];
          const pagesTotal = res.headers["x-wp-totalpages"];
          this.setState({ totalItems: Number(itemsTotal) });
        });
  }

  render() {
    const {
      foods,
      food,
      loading,
      per_page,
      pagesTotal,
      page,
      totalItems,
      showModal
    } = this.state;
    //console.log(this.state);

    return (
      <>
        {this.state.foods.slice(0, this.state.per_page).map((food, index) => {
          return <FoodMenuItems key={food.id} food={food} />;
        })}

        {/* this.state.per_page < this.state.foods.length &&*/}
        {page <= pagesTotal && foods.length && (
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

export default FoodMenuTest;
