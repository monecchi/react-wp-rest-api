import React, { Component } from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";
import renderHTML from "../../components/util/htmlRender";

// Atomize
import {
  ThemeProvider,
  DefaultTheme,
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

// react-loading-skeleton
import Skeleton from "react-loading-skeleton";

// Theme Custom Components
import NavbarIfood from "../../components/Navbar/NavbarIfood"; // iFood like navbar
import RestaurantCard from "../../components/Restaurants/Card"; // Simple Restaurant Card Component

//
// Retrieve page data
//
const rest_url = "https://pizzariameurancho.com.br/wp-json/wp/v2/pages";

const fetcher = (...args) => fetch(...args).then(res => res.json()); // default fetcher with fetch

//
// useGetPage function hook (swr)
//
const useGetPage = slug => {
  const { data, error, isValidating, mutate } = useSWR(rest_url + `?slug=${slug}`, fetcher, { revalidateOnFocus: true });

  return {
    page: data,
    isLoading: !error && !data,
    isError: error
  };
};

//
// Hero Image Component
//

export const HeroImage = ({ slug },  ...options) => {

  const { page, isLoading, isError } = useGetPage(slug);

  return (
    <HeroImageStatic page={page} isLoading={isLoading} isError={isError} options={options} />
  );
};

export const HeroImageStatic = ({ page, isLoading, isError }, ...options) => {

  if (!this.options) {
    this.options = {
      borderRadius: "md",
      height: "340px"
    };
  }
  
  if (isLoading)
    return (
      <Row d="flex" w="100%">
        <Div
          d="flex"
          bg="#eee"
          w="100%"
          h="340px"
          justify="center"
          align="center"
          rounded="md"
          m={{ b: "60px" }}
        />
      </Row>
    );

  if (isError) return "Failed to retrieve page data.";

  if (page)
    return (
      <>
        <Row d="flex" w="100%">
          <Div
            d="flex"
            bgImg={page[0].featured_image_src.original}
            bgSize="cover"
            bgPos="center"
            w="100%"
            h={this.options.height}
            justify="center"
            align="center"
            rounded={this.options.borderRadius}
            m={{ b: "60px" }}
          >
            <Div justify="center" p="1rem">
              <Text
                tag="h1"
                textWeight="500"
                textAlign="center"
                textSize="display2"
                fontFamily="secondary"
                textColor="white"
                p={{ b: "0.75rem" }}
              >
                {page[0].title.rendered + " ®"}
              </Text>
            </Div>
          </Div>
        </Row>
      </>
    );
};

////
// Page About Component
////
const Sobre = ({ slug }) => {
  if (!this.slug) {
    slug = "meu-rancho-pizzaria";
  }

  const { page, isLoading, isError } = useGetPage(slug);

  if (isLoading)
    return (
      <div>
        <header className="responsive-header" style={{ background: "#eee" }} />
        <main className="main-layout">
          <Div tag="section" p={{ t: { xs: "3rem", md: "4rem" } }}>
            <Container d="flex" flexDir="column" align="center">
              <Row d="flex" w="100%">
                <Div
                  d="flex"
                  bg="#eee"
                  w="100%"
                  h="340px"
                  justify="center"
                  align="center"
                  rounded="md"
                  m={{ b: "60px" }}
                />
              </Row>
            </Container>
          </Div>
        </main>
      </div>
    );
  if (isError) return "<p>Failed to retrieve page data...</p>";

  if (page) {
    const regex = /(<([^>@{}]+)>)/ig;
    const { title, slug, status, content } = page[0];
  }
  const page_content = content.rendered.replace(regex, '');

  return (
    <>
      <NavbarIfood />
      <Div tag="section" p={{ t: { xs: "3rem", md: "4rem" } }}>
        <Container d="flex" flexDir="column" align="center">
          <HeroImage slug={slug} /> 
          <Text
            tag="h1"
            textWeight="500"
            textAlign="center"
            textSize="display2"
            fontFamily="secondary"
            m={{ b: "1rem" }}
          >
            {"Tudo sempre mais gostoso ®"}
          </Text>
          <Text
            tag="h2"
            textWeight="400"
            maxW="36rem"
            textSize="subheader"
            textAlign="center"
            fontFamily="secondary"
            textColor="medium"
            m={{ b: "2.5rem" }}
          >
            Desde 1996, apaixonados por esse delicioso alimento, aprimoramos
            receitas para servir pizzas e massas com o gostinho especial que
            toda cozinha mineira tem.
          </Text>

          <Div
            d="flex"
            w="100%"
            justify="center"
            flexDir={{ xs: "column", sm: "row" }}
          >
            <Link to="/">
              <Button
                h="3rem"
                w={{ xs: "100%", sm: "11rem" }}
                bg="brandAlt"
                hoverBg="brand"
                rounded="lg"
                m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
              >
                Ver Cardápio
              </Button>
            </Link>
            <Anchor
              href="https://www.ifood.com.br/delivery/betim-mg/pizzaria-meu-rancho-angola/442ea04f-571b-4af6-8666-ea62bb63c1d8"
              target="_blank"
            >
              <Button
                h="3rem"
                w={{ xs: "100%", sm: "11rem" }}
                bg="transparent"
                hoverBg="white"
                border="1px solid"
                borderColor="gray400"
                hoverBorderColor="brand"
                rounded="lg"
                p={{ l: "0.5rem", r: "1rem" }}
                textColor="brand"
                prefix={
                  <Icon
                    name="Play"
                    size="18px"
                    m={{ r: "0.5rem" }}
                    color="brand"
                  />
                }
              >
                Pedir no iFood
              </Button>
            </Anchor>
          </Div>
        </Container>
      </Div>
      <Div
        tag="section"
        w="100vw"
        p={{ t: { xs: "3rem", md: "6rem" } }}
        overflow="hidden"
      >
        <Container>
          <Div
            d="flex"
            justify="center"
            p={{ b: "10.5rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Div
              minW={{ xs: "100%", md: "44rem", lg: "59rem" }}
              d="flex"
              align="center"
              flexDir="column"
              h={{ xs: "auto", md: "21rem", lg: "20rem" }}
              pos="relative"
            />
          <div className="restaurants-list__container">
            <div className="carousel__container">
              <div className="carousel__wrapper">
                <div className="carousel__slide">
                  <RestaurantCard slug="betim" />
                  <RestaurantCard slug="contagem" />
                  <RestaurantCard slug="raul" />
                </div>
              </div>
            </div>
          </div>
          </Div>
        </Container>
        <Container>

          <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
            The default theme font size present in atomize are <Tag>tiny</Tag>,{" "}
          </Text>
          <Text
            tag="div"
            textWeight="400"
            textSize="paragraph"
            textAlign="center"
            fontFamily="secondary"
            textColor="medium"
            m={{ b: "2.5rem" }}
          >
            { renderHTML( content.rendered ) }
          </Text>
        </Container>
      </Div>
    </>
  );
};

export default Sobre;
