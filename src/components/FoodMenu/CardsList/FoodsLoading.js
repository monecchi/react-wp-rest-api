import React from "react";

// Atomize
import { Div, Col } from "atomize";

// React Loading Skeleton
import Skeleton from "react-loading-skeleton";

//
// Food Items Loading Component
//

const FoodItemsLoading = ({ food }) => {
  return (
    <>
      <Col size={{ xs: 6, md: 4, lg: 3, xl: 3 }} key={food.id}>
        <Div
          h="auto"
          m={{ b: { xs: "1rem", lg: "1.3rem" } }}
          p="0"
          bg="white"
          border="1px solid"
          borderColor="#eff2f7"
          shadow="sm"
          hoverShadow="lg_hover"
          rounded="sm"
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
              <Skeleton style={{ height: "1.2rem", marginBottom: "0.5rem" }} />
              <Skeleton style={{ height: "1.8rem", marginBottom: "1.5rem" }} />
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
    </>
  );
};

export default FoodItemsLoading;
