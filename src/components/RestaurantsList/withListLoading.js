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
} from "react-atomize";

// react-loading-skeleton
import Skeleton from "react-loading-skeleton";

function WithListLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    const Id = "";
    return (
      <>
        {[1, 2, 3].map(
          num => (
            (Id = num),
            (
              <Col
                size={{ xs: 12, sm: 6, lg: 3 }}
                className="store-card"
                key={Id}
              >
                <Div
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
                      style={{ display: "block", width: "140px", height: "0.9rem", marginBottom: "0.5rem" }}
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
              </Col>
            )
          )
        )}
      </>
    );
  };
}
export default WithListLoading;
