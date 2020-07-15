import React, { Component } from "react";

// Atomize
import { Div, Col } from "atomize";

// React Loading Skeleton
import Skeleton from "react-loading-skeleton";

//
// Restaurant Card Loading Skeleton
//

const RestaurantCardsSkeleton = ({storesCount}, ...props) => {

  const storeId = "";
  return (
    <>
      { storesCount &&
        storesCount.map(num => {
          //console.log(store);
          return (
            <Col size={{ xs: 6, md: 4, lg: 4, xl: 4 }} key={num}>
              <Div
                m={{ b: { xs: "1rem", lg: "0" } }}
                className="store-card store-card--loading"
              >
                <Div
                  d="flex"
                  flexDir="column"
                  h="100%"
                  p={{
                    xs: "0.75rem",
                    md: "0.75rem",
                    lg: "1.5rem",
                    xl: "1.5rem"
                  }}
                  bg="white"
                  border="1px solid"
                  borderColor="gray200"
                  shadow="md"
                  hoverShadow="lg_hover"
                  rounded="sm"
                  m={{ b: { xs: "1.3rem", lg: "1.3rem" } }}
                  className="store-card-loading__wrapper"
                >
                  <Div flexGrow="1">
                    <Div
                      d="flex"
                      justify="center"
                      align="center"
                      m={{ t: "auto", r: "auto", b: "1rem", l: "auto" }}
                    />
                    <Skeleton
                      duration={3}
                      style={{
                        width: "160px",
                        height: "1.8rem",
                        marginBottom: "0.5rem"
                      }}
                    />
                    <Skeleton
                      style={{ height: "0.9rem", marginBottom: "0.5rem" }}
                      count={2}
                      duration={3}
                    />
                    <Skeleton
                      style={{
                        width: "120px",
                        height: "1.8rem",
                        marginBottom: "0.5rem",
                        borderRadius: "1000rem"
                      }}
                      duration={3}
                    />
                    <Skeleton
                      style={{
                        display: "block",
                        width: "140px",
                        height: "0.9rem",
                        marginBottom: "0.5rem"
                      }}
                      duration={3}
                    />
                    <Skeleton
                      style={{
                        width: "140px",
                        height: "2.5rem",
                        marginBottom: "0.5rem",
                        borderRadius: "0.35rem"
                      }}
                      duration={3}
                    />
                  </Div>
                </Div>
              </Div>
            </Col>
          );
        })}
    </>
  );
};

export default RestaurantCardsSkeleton;
