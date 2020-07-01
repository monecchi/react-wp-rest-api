import React, { Component } from "react";

// Atomize
import {
  Anchor,
  Button,
  Text,
  Icon
} from "react-atomize";

const ViewMoreButton = () => (

  <Button
    w="100%"
    rounded="sm"
    bg="softDanger"
    hoverBg="danger"
    textColor="danger"
    hoverTextColor="danger200"
    textWeight="500"
    onClick={() => { return false; } }
  >
    ver mais
  </Button>

);

export default ViewMoreButton;
