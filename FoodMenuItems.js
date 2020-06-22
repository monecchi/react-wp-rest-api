import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
export class FoodMenuItems extends Component {
  state = {
    imgUrl: "",
    slug: "",
    isLoaded: false
  };

  static propTypes = {
    food: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { id, slug } = this.props.food;
    const getImageUrl = axios.get(
      `https://pizzariameurancho.com.br/wp-json/wp/v2/food_menu/${id}`
    );

    Promise.all([getImageUrl]).then(res => {
      console.log(res);
      this.setState({
        imgUrl: res[0].data.featured_image_src.thumbnail,
        slug: res[0].data.slug,
        isLoaded: true
      });
    });
  }

  render() {
    const { title, excerpt, slug } = this.props.food;
    const { imgUrl, isLoaded } = this.state;
    return (
      <div>
        <h2>{title.rendered}</h2>
        <img src={imgUrl != "" && imgUrl} alt={title.rendered} />
        <strong>{slug}</strong>
        <br />
        <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
      </div>
    );
  }
}

export default FoodMenuItems;
