import React from "react";

// Atomize
import { Container, Div } from "atomize";

const Layout = ({ children, ...props }) => {
  return (
    <>
    <div style={{ margin: "0 auto", maxWidth: 650, padding: "0 1rem" }}>
      {children}
    </div>
    </>
  );
};

export default Layout;
