import React from "react";

// Atomize
import { Div, Container, Text, Icon } from "atomize";

const FooterSlim = () => (
  <Div tag="footer" shadow="inset_sm">
    <Div
      d="flex"
      flexDir="row"
      justify="center"
      pos="relative"
      p="1.5rem"
      m={{ t: "3rem", b: "0" }}
    >
      <Text align="center">Pizaria Meu Rancho</Text>
    </Div>
  </Div>
);

export default FooterSlim;
