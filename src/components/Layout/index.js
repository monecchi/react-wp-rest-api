import React from "react";

// Atomize
import { Container, Div } from "atomize";

const Layout = ({ children, ...props }) => {
  return (
    <>
    <Container>
      {children}
    </Container>
    </>
  );
};

export default Layout;
