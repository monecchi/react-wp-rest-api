import React from "react";
import "./styles.scss";

import {
  Div,
  Text,
  Icon
} from "atomize";

const Preloader = () => {
  return (
    <Div className="preloader">
      <Icon name="Loading3" size="2rem" color="brand" pos="absolute" top="50%" left="auto"/>
    </Div>
  );
};

export default Preloader;
