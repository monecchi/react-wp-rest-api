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

// Theme Custom Components
import NavbarIfood from "../../components/Navbar/NavbarIfood"; // iFood like navbar

//
// Retrieve page data
//
const rest_url = "https://pizzariameurancho.com.br/wp-json/wp/v2/pages";

const fetcher = (...args) => fetch(...args).then(res => res.json()); // default fetcher with fetch

let slug = "";

//
// useGetPage function hook (swr)
//
const useGetPage = (slug) => {

  if (!this.slug) {
    slug = "meu-rancho-pizzaria";
  }

  const { data, error, isValidating, mutate } = useSWR(rest_url + `?slug=${slug}`, fetcher,{ revalidateOnFocus: true });

  return {
    page: data,
    isLoading: !error && !data,
    isError: error,
    isValidating
  };
};

//
// Hero Image Component
//
export const HeroImageStatic = ({data, ...options}) => {

  if(!this.options) {
    this.options = {
      borderRadius: "md"
    }
  }

  if(data)
  return (
    <>
    <Row d="flex" w="100%" p={{ b: "1.5rem" }}>
        <Div
          bgImg={data[0].featured_image_src.original}
          bgSize="cover"
          bgPos="center"
          w="100%"
          h="640px"
          rounded={this.options.borderRadius}
        >
        <Text
          tag="h2"
          color="white"
          p={{ b: "0.75rem" }}
        >
        { data[0].title.rendered }
        </Text>
        </Div>
    </Row>
    </>
  );
}

////
// Page About Component
////
const Sobre = ({slug}) => {

  if (!this.slug) {
    slug = "meu-rancho-pizzaria";
  }

  const { page, isLoading, isError } = useGetPage(slug);

  if (isLoading) return (<p>Loading...</p>);
  if (isError) return "<p>Failed to retrieve page data...</p>"

  if(page) {
    const { title, slug, status } = page[0];
  }

    return (
      <>
        <NavbarIfood />
        <Div tag="section" p={{ t: { xs: "3rem", md: "4rem" } }}>
          <Container d="flex" flexDir="column" align="center">
          <HeroImageStatic data={page} />
            <Text
              tag="h1"
              textWeight="500"
              textAlign="center"
              textSize="display3"
              fontFamily="secondary"
              m={{ b: "1rem" }}
            >
              { title.rendered }
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
            </Div>
          </Container>
          <Container>
            <Text
              tag="div"
              textWeight="400"
              textSize="body"
              textAlign="center"
              fontFamily="secondary"
              textColor="medium"
              m={{ b: "2.5rem" }}
            >
              {renderHTML(page[0].content.rendered)}
            </Text>
          </Container>
        </Div>
      </>
    );
}

export default Sobre;
