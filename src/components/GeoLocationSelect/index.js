import React, { Component } from "react";

class RestarantCitySelector extends Component {
  // Render method.
  render() {
    // Mock Array with links.
    const data = [
      {
        url: 0,
        title: 'Sua Cidade'
      },
      {
        url: 'https://tommcfarlin.com/wp-json/wp/v2/posts',
        title: 'Betim'
      }
    ];
    // Building a list of options as React Elements with JSX.
    const links = data.map( ( link, index ) => {
      return (
      <option key={index} value={link.url}>
        {link.title}
      </option>)
    });
    // Returning the select dropdown with all the links as options.
    return (
      <select>
      {links}
      </select>
    )
  }
}

export default 