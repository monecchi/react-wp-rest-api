import React, { Component, useState } from "react";
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
  Modal
} from "react-atomize";

//
// react-loading-skeleton
//
import ImagePlaceholder from "./src/components/ImagePlaceholder/ImagePlaceholder";

import Skeleton from "react-loading-skeleton";

const ModalSize = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="md"
      maxW="48rem"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Text
        p={{ l: "0.5rem", t: "0.25rem" }}
        m={{ b: "2rem" }}
      >
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

export class FoodMenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: PropTypes.object.isRequired,
      isLoaded: false,
      showModal: false
    };
  }

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
        id: res[0].data.id,
        imgUrl: res[0].data.featured_image_src.thumbnail,
        slug: res[0].data.slug,
        isLoaded: true
      });
    });
  }

  render() {
    const { id, title, excerpt, slug, menu_order } = this.props.food;
    const { imgUrl, hasImg, isLoaded, showModal } = this.state;

    console.log(id);

    if ((slug && slug == "vazio") || (slug && slug == "empty")) {
      return <> </>;
    }

    if (!isLoaded) {
      return (
        <Col size={{ xs: 6, md: 4, lg: 6 }} className="store-card">
          <Div
            key={id}
            d="flex"
            flexWrap="wrap"
            flexDir="column"
            w={{ xs: "155px", md: "226px", lg: "317px" }}
            h="320px"
            minW="155px"
            bg="white"
            shadow="3"
            hoverShadow="4"
            rounded="sm"
            textAlign="center"
            m={{ b: "1rem" }}
            p={{ xs: "0.75rem", md: "0.75rem", lg: "1.5rem", xl: "1.5rem" }}
            className="food-card"
          >
            <Skeleton
              circle={true}
              height={"6rem"}
              width={"6rem"}
              className="align-self-center"
            />
            <Skeleton />
            <Skeleton count={3} />
          </Div>
        </Col>
      );
    }

    return (
      <>
        <Col size={{ xs: 6, md: 4, lg: 6 }} className="store-card">
          <Div
            key={id}
            d="flex"
            flexWrap="wrap"
            flexDir="column"
            w={{ xs: "155px", md: "226px", lg: "317px" }}
            minW="155px"
            bg="white"
            shadow="3"
            hoverShadow="4"
            rounded="sm"
            m={{ b: "1rem" }}
            p={{ xs: "0.75rem", md: "0.75rem", lg: "1.5rem", xl: "1.5rem" }}
            className="food-card"
          >
            <Div
              d="flex"
              className="justify-content-center mb-2"
              bgImg={imgUrl ? imgUrl : undefined}
              bgSize="cover"
              bgPos="center"
              w="6rem"
              h="6rem"
              m="auto"
              rounded="circle"
            />

            <ImagePlaceholder />

            <Div
              border={{ b: "1px solid" }}
              borderColor="gray300"
              p={{ b: "0.75rem" }}
            >
              <Text
                tag="h6"
                textSize="title"
                textWeight="500"
                textAlign="center"
                flexWrap="wrap"
              >
                {title.rendered || <Skeleton count={2} />}
              </Text>
              <Text textSize="caption" textColor="light">
                {"pizza" || <Skeleton count={1} />}
              </Text>
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
                  Component
                </Text>
              </Div>

              <Div>
                <Div d="flex" h="20px" key={id}>
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
              onClick={() => this.setState({ showModal: true })}
            >
              ver mais
            </Button>
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
