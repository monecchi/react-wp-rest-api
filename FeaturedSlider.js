import React from "react";
// Import Flickity
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 2
};

function HomeCarousel() {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src="./assets/images/ifood-bebidas-50-2.png" />
      <img src="./assets/images/ifood-capas-novas-retirar.webp" />
      <img src="./assets/images/ifood-capas-novas-selecao-ifood.webp" />
    </Flickity>
  );
}

export default HomeCarousel
