import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

import {
  Div,
  Icon
} from "atomize";

/**
 * Based on https://github.com/codefacebook/react-page-loading
 */
class Preloader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000);
  }

  render() {
    const { loading } = this.state
    const { color, duration, size, loader } = this.props

    let containerStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }

    if (loading) {
      if (loader == "Loading") {
        return (
          <Div className="preloader" style={containerStyle}>
            <Icon name="Loading" size={size} color={color} pos="absolute" top="50%" left="auto" />
            <Div className="sr-only"><span>Loading...</span></Div>
          </Div>
        )
      } else if (loader == "Loading2") {
        return (
          <Div className="preloader" style={containerStyle}>
            <Icon name="Loading2" size={size} color={color} pos="absolute" top="50%" left="auto" />
            <Div className="sr-only"><span>Loading...</span></Div>
          </Div>
        )
      } else if (loader == "Loading3") {
        return (
          <Div className="preloader" style={containerStyle}>
            <Icon name="Loading3" size={size} color={color} pos="absolute" top="50%" left="auto" />
            <Div className="sr-only"><span>Loading...</span></Div>
          </Div>
        )
      } else if (loader == "comet-spin") {
        return (
          <div style={containerStyle}>
            <div
              color={color}
              duration={duration}
              size={size} />
          </div>
        )
      }
    }

    return (
      <div>
        {!this.state.loading ? document.getElementsByTagName("body")[0].classList.add("loaded") : null}
        {this.props.children}
      </div>
    )
  }
}

Preloader.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
  size: PropTypes.string,
  loader: PropTypes.string,
}

Preloader.defaultProps = {
  color: "brand",
  duration: 1.3,
  size: "2.5rem",
  loader: "Loading",
}

export default Preloader;
