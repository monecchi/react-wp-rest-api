import React from "react";

// Atomize
import { Div, Container, Anchor, Text, Icon } from "atomize";

const mediaLinks = [
  {
    icon: "Instagram",
    link: "https://instagram.com/pizzariameurancho"
  },
  {
    icon: "Facebook",
    link: "https://www.facebook.com/pizzariameurancho"
  },
  {
    icon: "Twitter",
    link: "https://twitter.com/mranchopizzaria"
  },
  {
    icon: "Github",
    link: "https://twitter.com/mranchopizzaria"
  }
];

const FooterSlim = () => (
  <Div tag="footer" shadow="inset_top_sm">
    <Div
      d="flex"
      flexDir="row"
      justify="center"
      pos="relative"
      p="1.5rem"
      m={{ t: "3rem", b: "0" }}
    >
    <Container>
        <Div d="flex" align="center" justify="center" flexDir="column">
          <Text
            tag="p"
            textWeight="400"
            textAlign="center"
            m={{ b: "1rem" }}
          >
            Pizzaria Meu Rancho - Todos os direitos reservados
          </Text>
          <Div d="flex" align="center" justify="center">
            {mediaLinks.map((link, index) => (
              <Anchor href={link.link} target="_blank" key={index}>
                <Icon
                  name={link.icon}
                  size="20px"
                  hoverColor="info800"
                  m={{ r: index !== mediaLinks.length - 1 && "1rem" }}
                  cursor="pointer"
                />
              </Anchor>
            ))}
          </Div>
        </Div>
      </Container>
    </Div>
  </Div>
);

export default FooterSlim;
