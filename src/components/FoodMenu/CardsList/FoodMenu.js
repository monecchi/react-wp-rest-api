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
      totalItems: 100,
      paged: 1,
      showModal: false
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(prev => {
      return { per_page: prev.per_page + 16 };
    });
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/?per_page=${
          this.state.totalItems
        }`
      )
      .then(res => {
        console.log(res),
          this.setState({
            foods: res.data,
            paged: res.headers["x-wp-totalpages"],
            loading: false
          });
        //this.setState({ isLoaded: true })}
      })
      .catch(err => console.log(err));
  }

  render() {
    const { foods, loading, per_page, paged, showModal } = this.state;
    //console.log(this.state);
    return (
      <>
        {this.state.foods.slice(0, this.state.per_page).map((food, index) => {
          return <FoodMenuItems key={food.id} food={food} />;
        })}

        {this.state.per_page < this.state.foods.length && (
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
