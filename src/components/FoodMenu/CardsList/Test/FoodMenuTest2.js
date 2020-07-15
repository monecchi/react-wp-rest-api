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
      ifood_menu: [],
      loading: false,
      per_page: 25 - 1,
      totalItems: 50,
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
    this.setState({ loading: true });

    let merchantID = "442ea04f-571b-4af6-8666-ea62bb63c1d8";

    const getRestaurantMenu = axios.get(
      apiUrl + `?per_page=${per_page}&page=` + page
    );

    // restaurant ifood items
    const getiFoodDishes = axios.get(
      `https://wsloja.ifood.com.br/ifood-ws-v3/restaurants/${merchantID}/menu`,
      {
        headers: {
          "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
          "secret_key": "9ef4fb4f-7a1d-4e0d-a9b1-9b82873297d8",
          "access_key": "69f181d5-0046-4221-b7b2-deef62bd60d5"
        }
      }
    );

    return Promise.all([getRestaurantMenu, getiFoodDishes]).then(
      response => {
        console.log(response);
        const { foods, ifood_menu, page } = this.state;
        this.setState({
          foods: foods.concat(response[0].data),
          loading: false,
          pagesTotal: Number(response[0].headers["x-wp-totalpages"]),
          page: page + 1,
          ifood_menu: response[1].data.data.menu,
          loading: false
        });

        this.foods.concat(this.state.ifood_menu);
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
    this.getPosts();
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
    this.getPosts();

    //this.setState({ loading: true });

    const wpTotal = async () => {
      return axios.get(
        `https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/`
      );
    };

    wpTotal().then(res => {
      const itemsTotal = res.headers["x-wp-total"];
      const pagesTotal = res.headers["x-wp-totalpages"];
      this.setState({ totalItems: Number(itemsTotal) });
    });
  }

  render() {
    const {
      foods,
      ifood_menu,
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
        {/*{foods.map((food, index) => {*/}
        {/*{foods.slice(0, this.state.totalItems).map((food, index) => {*/}
        {foods &&
          foods.map((food, index) => {
            return <FoodMenuItems key={food.id} food={food} />;
          })}

        {/* this.state.per_page < this.state.foods.length &&*/}
        {page <= pagesTotal && foods.length && (
          <>
            <Div d="flex" w="100%" p={{ t: "1rem", b: "1rem" }}>
              <Button
                onClick={() => this.loadMore()}
                disabled={this.state.loading}
                w="100%"
                prefix={
                  <Icon
                    name={this.state.loading ? "Loading" : "Search"}
                    d={this.state.loading ? "block" : "none"}
                    pos="absolute"
                    top="50%"
                    left="1rem"
                    transform="translateY(-50%)"
                    size="18px"
                    color="white"
                    m={{ r: "0.5rem" }}
                  />
                }
                textSize="1rem"
                textColor="#ea1d2c"
                hoverTextColor="white"
                bg="white"
                hoverBg="brand"
                border="1px solid"
                borderColor="#eaeaea"
                hoverBorderColor="brand"
                h="3rem"
                rounded="sm"
                p={{ l: "3rem", r: "2rem" }}
                m={{ b: "2rem" }}
                transition
              >
                {this.state.loading ? "Carregando" : "Mais items do Cardápio"}
              </Button>
            </Div>
          </>
        )}
      </>
    );
  }
}

export default FoodMenu;
