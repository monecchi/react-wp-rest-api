import React, { Component, useState } from "react";
import axios from "axios";

// Atomize
import {
  //Image,
  //Container,
  //Row,
  //Col,
  Div,
  //Tag,
  //Anchor,
  Button,
  //Text,
  Icon,
  //Modal
} from "atomize";

import FoodMenuItems from "./FoodMenuItems";

export class FoodMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      posts: [],
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
    const { foods, page, per_page, apiUrl } = this.state;
    this.setState({ loading: true });

    return axios.get(apiUrl + `?per_page=${per_page}&page=` + page).then(
      response => {
        console.log(response);
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
      return axios.get(`https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/`);
    }

    wpTotal().then(res => {
      const itemsTotal = res.headers["x-wp-total"];
      const pagesTotal = res.headers["x-wp-totalpages"];
      this.setState({ totalItems: Number(itemsTotal) });
    });
  }

  render() {
    const {
      foods,
      posts,
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
        {/*{foods.slice(0, this.state.totalItems).map((food, index) => {  })}*/}
        {foods && foods.map((food, index) => {
          return <FoodMenuItems key={food.id} food={food} />;
        })}

        {/* this.state.per_page < this.state.foods.length &&*/}
        {page <= pagesTotal && foods.length && (
          <>
            <Div d="flex" w="100%" p={{ t: "1rem", b: "1rem" }}>
              <Button
                textSize="1rem"
                textColor="#ea1d2c"
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
                hoverTextColor="white"
                bg="white"
                hoverBg="brand"
                border="1px solid"
                borderColor="#eaeaea"
                hoverBorderColor="brand"
                rounded="sm"
                h="3rem"
                p={{ l: "3rem", r: "2rem" }}
                m={{ b: "2rem" }}
                transition="all"
                onClick={() => this.loadMore()}
                disabled={this.state.loading}
                style={{ "outline": "0" }}
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
