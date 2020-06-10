import React from "react";
// Import Flickity
import Flickity from "react-flickity-component";

import "flickity/css/flickity.css";

const flickityOptions = {
  initialIndex: 0
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

    <a href="#">
      <figure class="highlights-carousel__figure">
        <img src="https://static-images.ifood.com.br/image/upload//discoveries/ifood-capas-almoco10-app-v01-feb2020.png" alt="Almoço bom e barato" className="highlights-carousel__image" />
      </figure>
    </a>

    <a href="#">
      <figure class="highlights-carousel__figure">
        <img src="https://cdn.jsdelivr.net/gh/monecchi/react-wp-rest-api@master/assets/images/ifood-bebidas-50-2.png" alt="Almoço bom e barato" className="highlights-carousel__image" />
      </figure>
    </a>

    <a href="#">
      <figure class="highlights-carousel__figure">
        <img src="https://cdn.jsdelivr.net/gh/monecchi/react-wp-rest-api@master/assets/images/ifood-capas-novas-selecao-ifood.png" alt="Almoço bom e barato" className="highlights-carousel__image" />
      </figure>
    </a>

    <a href="#">
      <figure class="highlights-carousel__figure">
        <img src="https://cdn.jsdelivr.net/gh/monecchi/react-wp-rest-api@master/assets/images/GROC_ifood.png" alt="Almoço bom e barato" className="highlights-carousel__image" />
      </figure>
    </a>

    </Flickity>
  );
}

export default HomeCarousel
