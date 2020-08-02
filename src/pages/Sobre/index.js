import React from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";
//import renderHTML from "../../components/util/htmlRender";

// Atomize
import {
  Div,
  Container,
  Row,
  Anchor,
  Button,
  Text,
  Icon
} from "atomize";

// react-loading-skeleton
//import Skeleton from "react-loading-skeleton";

// Theme Custom Components
import NavbarIfood from "../../components/Navbar/NavbarIfood"; // iFood like navbar
import Preloader from "../../components/Preloader";
import RestaurantCard from "../../components/Restaurants/Card"; // Simple Restaurant Card Component
import FooterSlim from "../../components/Footer/Slim/";

//
// Retrieve page data
//
const rest_url = "https://pizzariameurancho.com.br/wp-json/wp/v2/pages";

const fetcher = (...args) => fetch(...args).then(res => res.json()); // default fetcher with fetch

//
// useGetPage function hook (swr)
//
const useGetPage = slug => {
  const { data, error, isValidating, mutate } = useSWR(
    rest_url + `?slug=${slug}`,
    fetcher,
    { revalidateOnFocus: true }
  );

  return {
    page: data,
    isLoading: !error && !data,
    isError: error
  };
};

//
// Hero Image Component
//

export const HeroImage = ({ slug, options }) => {
  const { page, isLoading, isError } = useGetPage(slug);

  return (
    <HeroImageStatic
      page={page}
      isLoading={isLoading}
      isError={isError}
      options={options}
    />
  );
};

export const HeroImageStatic = ({ page, isLoading, isError, ...options }) => {
  if (options !== undefined) {
    options = {
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
            h={options.height}
            justify="center"
            align="center"
            rounded={options.borderRadius}
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
// About Page Component
////
const Sobre = (props) => {

  let slug =
    props.slug !== undefined
      ? props.slug
      : "meu-rancho-pizzaria";

  const { page, isLoading, isError } = useGetPage(slug);

  if (isLoading)


  if (isError) return "<p>Failed to retrieve page data...</p>";

  if (page) {
    const { title, slug, status, content } = page[0];
  }

  return (
    <>
      <NavbarIfood />
      <Preloader loader="Loading2" color="brand" size="2.5rem" duration={1} isLoading={isLoading}>
        <main className="main-layout">
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
                Desde 1996, apaixonados por preparar alimentos, aprimoramos receitas
                para criar pizzas e massas com o gostinho especial que toda cozinha
                mineira tem.
          </Text>

              <Div
                d="flex"
                w="100%"
                justify="center"
                flexDir={{ xs: "column", sm: "row" }}
              >
                <Anchor href="/">
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
                </Anchor>
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
              <div className="restaurants-list__container">
                <RestaurantCard slug="betim" />
                <RestaurantCard slug="contagem" />
                <RestaurantCard slug="raul" />
              </div>

              {/* renderHTML( content.rendered ) */}
              <Text
                tag="h4"
                textSize="caption"
                textAlign="center"
                m={{ b: "1rem" }}
              >
                Um pouco sobre a gente
          </Text>
              <Text tag="h5" textAlign="center" m={{ b: "1rem" }}>
                Meu Rancho Pizzaria ® - Desde 1996.
          </Text>
              <Text
                tag="p"
                textSize="paragraph"
                textAlign="center"
                m={{ b: "1rem" }}
              >
                Acreditamos que tudo aquilo que comemos deveria ser preparado por
                quem realmente se importa com os alimentos, com o frescor e
                qualidade dos ingredientes certos, e principalmente que se importe
                em oferecer uma excelente experiência de alimentação.
          </Text>
              <Text
                tag="p"
                textSize="paragraph"
                textAlign="center"
                m={{ b: "1rem" }}
              >
                Na Pizzaria Meu Rancho somos apaixonados pelo que fazemos, e claro,
                por pizza! Para nós, entregar essa experiência é algo natural, pois
                faz parte da nossa essência criar receitas e sabores que respeitam o
                paladar dos nossos clientes. No preparo das nossas receitas,
                colocamos toda essa paixão e comprometimento totais com a qualidade
                de produto e serviço prestado, em favor de uma experiência única e
                memorável para nossos clientes.
          </Text>
              <Text
                tag="p"
                textSize="paragraph"
                textAlign="center"
                m={{ b: "1rem" }}
              >
                A marca Meu Rancho® reflete a origem interiorana de seus
                proprietários, irmãos e sócios naturais da cidade de Bicuíba – MG e
                homenageia sua infância, equanto cresciam num simpático rancho da
                família.
          </Text>
              <Text
                tag="p"
                textSize="paragraph"
                textAlign="center"
                m={{ b: "1rem" }}
              >
                Em 1996, impulsionados pela paixão por esse delicioso alimento que
                conhecemos por pizza, os irmãos decidiram aprimorar receitas para
                criar seus próprios sabores e comercializar pizzas e massas com o
                gostinho especial que toda cozinha mineira tem.
          </Text>
              <Text
                tag="p"
                textSize="paragraph"
                textAlign="center"
                m={{ b: "1rem" }}
              >
                Atualmente, a Pizzaria Meu Rancho é o resultado de muito esforço e
                trabalho em equipe de pessoas que trazem consigo valores como a
                honestidade, cordialidade, comprometimento, e excelência naquilo que
                fazem. Estes valores são colocados em prática todos os dias para
                oferecer aos nossos clientes produtos e atendimento de altíssima
                qualidade e bom gosto.
          </Text>
            </Container>
          </Div>
          <FooterSlim />
        </main>
      </Preloader>
    </>
  );
};

export default Sobre;
