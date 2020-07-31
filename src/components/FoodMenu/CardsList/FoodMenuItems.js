import React, { Component } from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

// Atomize
import {
  Div,
  Col,
  Button,
  Text,
  Icon,
  //Image,
  Modal
} from "atomize";

// Food Items Loading Component
import FoodItemsLoading from "./FoodsLoading";

// Normalize html
import renderHTML from "../../util/htmlRender.js";

// Food item image placeholder
let ImgPlaceholder =
  "https://raw.githubusercontent.com/monecchi/react-wp-rest-api/master/src/assets/images/mr-pattern-light.png";

//
// Modal atomize
//
export const FoodItemModal = ({ food, isOpen, onClose }) => {
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md" maxW="48rem">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Text tag="h2">
        {food.title.rendered}
      </Text>
      <Text p={{ l: "0.5rem", t: "0.25rem" }} m={{ b: "2rem" }}>
        {food.content.rendered}
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
    </>
  );
};

//
// FoodMenuItems component
//
export class FoodMenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      loading: true,
      showModal: false,
      selectedSize: "32rem"
    };
  }

  static propTypes = {
    food: PropTypes.object.isRequired
  };

  componentDidMount() {
    // Cancel async request on unmount with axios
    this.axiosCancelSource = axios.CancelToken.source()
    
    const { id } = this.props.food;

    // Single food menu item url
    const getDishes = axios.get(
      `https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/${id}`, { cancelToken: this.axiosCancelSource.token }
    );

    // Single food menu item "food_tag" taxonomy (ingredients) url
    const getIngredients = axios.get(
      `https://pizzariameurancho.com.br/wp-json/wp/v2/ingrediente?post=${id}`, { cancelToken: this.axiosCancelSource.token }
    );

    Promise.all([getIngredients]).then(response => {
      //console.log(response);
      this.setState({
        ingredients: response[0].data,
        loading: false
      });
    });
  }

  // Cancel async request on unmount with axios
  // https://www.thetopsites.net/article/52465307.shtml
  componentWillUnmount () {
    console.warn('firing component unmount')
    this.axiosCancelSource.cancel('Component unmounted.')
  }

  render() {
    const food = this.props.food;

    const {
      id,
      title,
      name,
      excerpt,
      slug,
      menu_order,
      featured_image_src,
      dish_prices
    } = this.props.food;

    const { ingredients, loading, showModal, selectedSize } = this.state;

    const imgUrl = featured_image_src.thumbnail;
    //console.log(imgUrl);

    const precos = [];
    precos.fill(dish_prices);

    let fromPreco = "";

    for (const p = 0; p < precos.length; p++) {
      fromPreco = precos[p][0].preco;
    }
    //console.log(precos);

    //console.log(id);

    const foodImg = imgUrl ? imgUrl : ImgPlaceholder; //imgUrl ? imgUrl : ImgPlaceholder;

    const getFoodPic = () => {
      const food = this.props.food;
      const foodpic = foodImg;
      return foodpic;
    };

    // hide items if slug is "vazio" or "empty"
    if ((slug && slug == "vazio") || (slug && slug == "empty")) {
      return <> </>;
    }

    return (
      <>
      {/* Not loading */}
      {!loading ? (

       <Col size={{ xs: 6, md: 4, lg: 3, xl: 3 }} key={food.id}>
          <Div
            h="auto"
            m={{ b: { xs: "1rem", lg: "1.3rem" } }}
            p="0"
            bg="white"
            border="1px solid"
            borderColor="#eff2f7"
            shadow="xs"
            hoverShadow="md"
            rounded="sm"
            className="food-card food-card--vertical"
          >
            <Div
              d="flex"
              flexDir="column"
              h="100%"
              p={{ xs: "0.75rem", md: "0.75rem", lg: "1.5rem", xl: "1.5rem" }}
              rounded="sm"
              m={{ b: { xs: "1.3rem", lg: "1.3rem" } }}
              cursor="pointer"
              className="food-card__wrapper"
              transition="all"
            >
              <Div flexGrow="1">
                {/*bg={...(!foodImg ? { bg="#eee" } : {})}*/}
                <Div
                  d="flex"
                  className={"food-pic"}
                  bgImg={getFoodPic()}
                  bgSize={imgUrl ? "cover" : "300%"}
                  bgPos={imgUrl ? "center" : "28% 35%"}
                  bg={ !foodImg ? "#eee" : ""}
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
                  <Text tag="h2" textSize="title" textAlign="center" className="food-item__title" style={{ lineHeight: "1.8rem"}}>{name ? renderHTML(name) : renderHTML(title.rendered)}</Text>
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
                      key={ingredient.slug}
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
                      <Text
                        key={num.toString()}
                        textSize="caption"
                        textColor="success700"
                      >
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
                          key={num.toString()}
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
                      {fromPreco == "" ? "R$ 16,50" : fromPreco}
                    </span>
                    <span className="dish-card__price--original">R$ 23,00</span>
                  </span>
                </Div>
              </Div>

              <a className="food-item__see-more"
                  onClick={() =>
                    this.setState({
                      showModal: true,
                      selectedSize: "48rem"
                  })}
                >
                <Text
                  tag="span"
                  textColor="brand"
                  hoverTextColor="brandHover"
                  textWeight="500"
                  textDecor="none"
                >
                  Ver Mais
                </Text>
              </a>

              <FoodItemModal
                food={food}
                maxW={selectedSize}
                isOpen={showModal}
                onClose={() => this.setState({ showModal: false })}
              />

            </Div>
          </Div>
        </Col>
        
        ) : (
          <>
            <FoodItemsLoading food={food} />
          </>
        )}
      </>
    );
  }
}

export default FoodMenuItems;
