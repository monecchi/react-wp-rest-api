import React from "react";

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
  Icon
} from "atomize";

//
// Restaurants (Stores) Cards List Component
//
const List = props => {
  const { stores } = props;
  if (!stores || stores.length === 0)
    return (
      <Div w="100%" p="1.5rem">
        <Text align="center">Dados dos restaurantes não encontrados.</Text>
      </Div>
    );
  return (
    <>
      {stores.map(store => {
        const city = store.slug;
        let tagBg = store[city].is_open == 1 ? "softSuccess" : "softDanger";
        let isOpenLabel = store[city].is_open == 1 ? "Aberto" : "Fechado";
        return (
          <Col
            size={{ xs: 12, sm: 6, lg: 3 }}
            className="store-card"
            key={store.id}
          >
            {console.log(store)}
            <Div
              key={store.id}
              bg="white"
              d="flex"
              flexDir="column"
              w="26.5rem"
              m={{ b: "1rem" }}
              p="1.5rem"
              rounded="sm"
              shadow="2"
              hoverShadow="3"
            >
              <Text
                tag="h5"
                textSize="h5"
                m={{ b: "1rem" }}
                className="text-capitalize"
              >
                {store.slug}
              </Text>

              <Text tag="p" textSize="body" m={{ b: "1rem" }}>
                {store[city].formatted_address}
              </Text>

              <Div d="flex" flexWrap="wrap">
                <Tag
                  bg={tagBg}
                  textColor={tagBg == "softSuccess" ? "successDark" : "brand"}
                  className={
                    store[city].is_open == 1
                      ? "badge-status-opened"
                      : "badge-status-closed"
                  }
                  rounded="circle"
                  p={{ x: "0.75rem", y: "0.25rem" }}
                  m={{ r: "0.5rem", b: "0.5rem" }}
                  tag="span"
                  textSize="caption"
                  shadow="0"
                >
                  {isOpenLabel}
                </Tag>{" "}
              </Div>

              <div className="d-flex flex-column mb-2">Ligar na loja</div>

              <Anchor
                href={"tel:" + store[city].phone_raw}
                hoverTextColor="white"
                className={
                  store[city].is_open == 0
                    ? "text-decoration-none disabled"
                    : "text-decoration-none"
                }
                disabled={store[city].is_open == 0 ? "disabled" : null}
              >
                <Button
                  textColor="brand"
                  hoverTextColor="white"
                  textWeight="700"
                  bg="softDanger"
                  hoverBg="brand"
                  cursor="pointer"
                  rounded="sm"
                  suffix={
                    <Icon
                      name="LongRight"
                      size="20px"
                      color="brand"
                      m={{ l: "1rem" }}
                      className={
                        store[city].is_open == 0
                          ? "fill-white text-decoration-none disabled"
                          : "text-decoration-none"
                      }
                      hoverColor="white"
                    />
                  }
                  disabled={store[city].is_open == 0 ? "disabled" : null}
                >
                  {store[city].formatted_phone}
                </Button>
              </Anchor>
            </Div>
          </Col>
        );
      })}
    </>
  );
};
export default List;
