import React from "react";
import "./styles.scss";

import { Div, Icon } from "atomize";

const Preloader = () => {
  return (
    <div class="preloader loader">
      <Icon name="Loading3" size="20px" />
    </div>
  );
};

export default Preloader;
