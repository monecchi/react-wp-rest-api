import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

// Atomize
import {
  Div,
  Container,
  Row,
  Col,
  Tag,
  Anchor,
  Button,
  Text,
  Icon,
  Image,
  Modal
} from "atomize";

//
// react-loading-skeleton
//
import Skeleton from "react-loading-skeleton";

// Normalize html
import renderHTML from "../../../data/htmlRender.js";

// Food item image placeholder
let ImgPlaceholder =
  "https://raw.githubusercontent.com/monecchi/react-wp-rest-api/master/src/assets/images/mr-pattern-light.png";

//
// Modal
//
const ModalSize = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} rounded="md" maxW="48rem">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Text p={{ l: "0.5rem", t: "0.25rem" }} m={{ b: "2rem" }}>
        This modal has maxW of 48rem
      </Text>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Close
        </Button>
        <Button onClick={onClose} bg="info700">
          OK
        </Button>
      </Div>
    </Modal>
  );
};

//
// FoodMenuItems component
//
export class FoodMenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      showModal: false
    };
  }

  static propTypes = {
    food: PropTypes.object.isRequired
  };

  componentDidMount() {
    const {
      id,
      title,
      excerpt,
      slug,
      menu_order,
      dish_prices
    } = this.props.food;

    const getDishes = axios.get(
      `https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/${id}`
    );
    const getIngredients = axios.get(
      `https://pizzariameurancho.com.br/wp-json/wp/v2/ingrediente?post=${id}`
    );

    // "food tags" ingredients endpoint
    //https://pizzariameurancho.com.br/wp-json/wp/v2/ingrediente?post=822

    Promise.all([getDishes, getIngredients]).then(res => {
      console.log(res);
      this.setState({
        id: res[0].id,
        imgUrl: res[0].data.featured_image_src.thumbnail,
        ingredients: res[1].data,
        isLoaded: true
      });
    });
  }

  render() {
    const {
      id,
      title,
      excerpt,
      slug,
      menu_order,
      dish_prices
    } = this.props.food;
    const { imgUrl, ingredients, isLoaded, showModal } = this.state;

    const precos = [];
    precos = dish_prices;
    //console.log(precos);

    //console.log(id);

    // hide items if slug is "vazio" or "empty"
    if ((slug && slug == "vazio") || (slug && slug == "empty")) {
      return <> </>;
    }

    const bgImg = imgUrl ? imgUrl : ImgPlaceholder;

    if (!isLoaded) {
      return (
        <Col size={{ xs: 6, md: 4, lg: 3, xl: 3 }} key={id}>
          <Div m={{ b: { xs: "1rem", lg: "0" } }}>
            <Div
              d="flex"
              flexDir="column"
              h="100%"
              p={{ xs: "0.75rem", md: "0.75rem", lg: "1.5rem", xl: "1.5rem" }}
              bg="white"
              border="1px solid"
              borderColor="gray200"
              shadow="3"
              hoverShadow="4"
              rounded="sm"
            >
              <Div flexGrow="1">
                <Div
                  d="flex"
                  justify="center"
                  align="center"
                  m={{ t: "auto", r: "auto", b: "1rem", l: "auto" }}
                >
                  <Skeleton
                    circle={true}
                    height={"6rem"}
                    width={"6rem"}
                    duration={3}
                    style={{
                      marginTop: "auto",
                      marginRight: "auto",
                      marginBottom: "1rem",
                      marginleft: "auto"
                    }}
                  />
                </Div>
                <Skeleton
                  style={{ height: "1.2rem", marginBottom: "0.5rem" }}
                />
                <Skeleton
                  style={{ height: "1.8rem", marginBottom: "1.5rem" }}
                />
                <Skeleton
                  style={{ height: "0.9rem", marginBottom: "0.5rem" }}
                  count={2}
                />
                <Skeleton
                  style={{
                    width: "40%",
                    marginTop: "1rem",
                    marginBottom: "0.75rem"
                  }}
                />
              </Div>
            </Div>
          </Div>
        </Col>
      );
    }

    return (
      <>
        <Col size={{ xs: 6, md: 4, lg: 3, xl: 3 }} key={id}>
          <Div
            m={{ b: { xs: "1rem", lg: "0" } }}
            className="store-card store-card--vertical"
          >
            <Div
              d="flex"
              flexDir="column"
              h="100%"
              p={{ xs: "0.75rem", md: "0.75rem", lg: "1.5rem", xl: "1.5rem" }}
              bg="white"
              border="1px solid"
              borderColor="gray200"
              shadow="3"
              hoverShadow="4"
              rounded="sm"
              m={{ b: { xs: "1.3rem", lg: "1.3rem" } }}
              className="food-card__wrapper"
            >
              <Div flexGrow="1">
                <Div
                  d="flex"
                  className="food-pic"
                  bgImg={bgImg}
                  bgSize={imgUrl ? "cover" : "300%"}
                  bgPos={imgUrl ? "center" : "28% 35%"}
                  w="6rem"
                  h="6rem"
                  m={{ t: "auto", r: "auto", b: "1rem", l: "auto" }}
                  rounded="circle"
                />

                <Div
                  d="flex"
                  flexWrap="wrap"
                  textSize="title"
                  textWeight="500"
                  align="center"
                  justify="center"
                  m={{ b: "0.5rem" }}
                >
                  {/*{title.rendered}*/}
                  {renderHTML(title.rendered)}
                </Div>

                {/*<Div
                  textSize="caption"
                  textColor="medium"
                  m={{ b: "1rem" }}
                  className="text-ellipsis"
                >
                  {renderHTML(excerpt.rendered)}
                </Div>*/}

                <Div textSize="caption" textColor="medium" m={{ b: "0.45rem" }}>
                  {/* separate by comma https://stackoverflow.com/a/40276830/1152876*/}
                  {ingredients.map((ingredient, i) => [
                    i > 0 && ", ",
                    <Div
                      key={i}
                      tag="span"
                      className={"ingredient " + `${ingredient.slug}`}
                    >
                      {ingredient.name}
                    </Div>
                  ])}
                </Div>

                <Div
                  d="flex"
                  justify="space-between"
                  p={{ t: "1rem", b: "1.5rem" }}
                >
                  <Div>
                    {/* simula items mais pedidos */}
                    {[
                      1,
                      2,
                      3,
                      7,
                      9,
                      10,
                      11,
                      13,
                      14,
                      16,
                      18,
                      23,
                      26,
                      27,
                      28,
                      30,
                      31,
                      36
                    ].map(num => (
                      <Text textSize="caption" textColor="success700">
                        {num === menu_order ? "Mais pedido" : ""}
                      </Text>
                    ))}
                    <Text textSize="caption" textColor="light">
                      {"pizza"}
                    </Text>
                  </Div>

                  <Div>
                    <Div d="flex" h="20px">
                      {[1, 2, 3, 4, 5].map(num => (
                        <Icon
                          key={num}
                          name="StarSolid"
                          size="14px"
                          color={num === 5 ? "gray400" : "warning700"}
                          m={{ r: "0.125rem" }}
                        />
                      ))}
                    </Div>
                    <Text textSize="caption" textColor="light">
                      Nota 4.0/5
                    </Text>
                  </Div>
                </Div>

                <Div p={{ b: "0.75rem" }}>
                  <span
                    className="dish-card__price"
                    data-test-id="dish-card-price"
                  >
                    <span className="dish-card__price--discount">
                      {precos[0].preco} R$ 16,50
                    </span>
                    <span className="dish-card__price--original">R$ 23,00</span>
                  </span>
                </Div>
              </Div>

              <Link to={""} className="food-item__see-more">
                <Text
                  textColor="brand"
                  hoverTextColor="brandHover"
                  textWeight="500"
                  textDecor="none"
                >
                  Ver Mais
                </Text>
              </Link>
            </Div>
          </Div>
        </Col>

        <ModalSize
          isOpen={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </>
    );
  }
}

export default FoodMenuItems;
