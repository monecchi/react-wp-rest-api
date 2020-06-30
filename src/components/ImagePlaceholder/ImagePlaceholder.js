import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const ImagePlaceholder = props => (
  <div
    className="circular-image placeholder-image"
    style={{
      backgroundImage: `url(${props.src})`,
      width: props.width,
      height: props.height,
    }}
  />
);

ImagePlaceholder.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

ImagePlaceholder.defaultProps = {
  src: '',
  width: 96,
  height: 96,
};

export default ImagePlaceholder;