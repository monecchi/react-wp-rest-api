import React from "react";
import PropTypes from "prop-types";
import Image from "./src/assets/images/mr-pattern-light.png";

import "./styles.css";

const ImagePlacehoder = props => (
  <img
    className="circular-image"
    circular
    floated="left"
    size="small"
    style={{
      backgroundImage: `url(${props.src || Image})`,
      width: props.width,
      height: props.height
    }}
  />
);

CircularImage.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

CircularImage.defaultProps = {
  src: "",
  width: 80,
  height: 80
};

export default ImagePlaceholder;
