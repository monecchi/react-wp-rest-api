import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Atomize
import {
  ThemeProvider,
  DefaultTheme,
  StyleReset,
  Div,
  Container,
  Row,
  Col,
  Tag,
  Anchor,
  Button,
  Text,
  Icon
} from "react-atomize";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    white: "#ffffff",
    dark: "#141b24",
    brand: "#FC0E36",
    brandAlt: "#EF2840",
    success: "#1BC160",
    successDark: "#36b37e",
    danger: "#FC0E36",
    softDanger: "#FED9DB",
    softSuccess: "#D7f0E5",
    warning: "#FCC246",
    info: "#3366FF",
    brand800: "#671de1"
  },
  colCount: 12,
  grid: {
    containerWidth: {
      xs: "540px",
      sm: "720px",
      md: "960px",
      lg: "1200px",
      xl: "1366px"
    },
    gutterWidth: "16px"
  },
  rounded: {
    ...DefaultTheme.rounded,
    brandRadius: "20px"
  }
};

export class FoodMenuItems extends Component {
  state = {
    imgUrl: "",
    slug: String,
    menuOrder: Number,
    isLoaded: false
  };

  static propTypes = {
    food: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { id, slug, menuOrder } = this.props.food;
    const getImageUrl = axios.get(
      `https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/${id}`
    );

    Promise.all([getImageUrl]).then(res => {
      console.log(res);
      this.setState({
        imgUrl: res[0].data.featured_image_src.thumbnail,
        slug: res[0].data.slug,
        isLoaded: true
      });
    });
  }

  render() {
    const { title, excerpt, id, slug, menu_order } = this.props.food;
    const { imgUrl, hasImg, isLoaded } = this.state;

    if (slug && slug == "vazio") {
      return <> </>;
    }

    return (
      <ThemeProvider theme={theme}>
      <StyleReset />
        <Col size={{ xs: 12, md: 3, lg: 4 }} className="store-card" key={id}>
          <Div
            key={id}
            bg="white"
            shadow="4"
            hoverShadow="3"
            rounded="sm"
            m={{ b: "1rem" }}
            p="1.5rem"
            data-slug={slug}
            className="food-card"
          >
            <Div
              d="flex"
              className="mb-2"
              bgImg={imgUrl ? imgUrl : undefined}
              bgSize="cover"
              bgPos="center"
              w="6rem"
              h="6rem"
              m="auto"
              rounded="circle"
            />

            <Div
              border={{ b: "1px solid" }}
              borderColor="gray300"
              p={{ b: "0.75rem" }}
            >
              <Text tag="h6" textSize="title" textWeight="500" textAlign="center" flexWrap="wrap">
                {title.rendered}
              </Text>
              <Text textSize="caption" textColor="light">
                pizza
              </Text>
            </Div>

            <Div
              d="flex"
              justify="space-between"
              p={{ t: "1rem", b: "1.5rem" }}
            >
              <Div>
              {/* simula items mais pedidos */}
                {[1, 2, 3, 7, 9, 10, 11, 13, 14, 16, 18, 23, 26, 27, 28, 30, 31, 36].map(num => (
                  <Text textSize="caption" textColor="success700">
                    {num === menu_order ? "Mais pedido" : ""}
                  </Text>
                ))}
                <Text textSize="caption" textColor="light">
                  Component
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
            <Button
              w="100%"
              rounded="sm"
              bg="softDanger"
              hoverBg="danger"
              textColor="danger"
              hoverTextColor="danger200"
              textWeight="500"
            >
              ver mais
            </Button>
          </Div>
        </Col>
    </ThemeProvider>
    );
  }
}

export default FoodMenuItems;
