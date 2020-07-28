import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import Flickity
import Flickity from "react-flickity-component";

// Flickity default css
import "flickity/css/flickity.css";
// Component custom scss
import "./styles.scss";

// Carousel Loading Skeleton Component
//import WithLoadingCarousel from "./Loading";

// Flickity options
const flickityOptions = {
  initialIndex: 2,
  cellAlign: "center",
  freeScroll: false,
  wrapAround: true,
  contain: false,
  lazyLoad: 1,
  imagesLoaded: true,
  percentPosition: false,
  // disable previous & next buttons and dots
  prevNextButtons: false,
  pageDots: false,
  // custom arrows shape
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 70,
    y2: 40,
    x3: 30
  }
};

// enable prev/next buttons at 1200px only
if (matchMedia("screen and (min-width: 1200px)").matches) {
  flickityOptions.prevNextButtons = true;
}

//
// Featured Carousel Component
//
const HomeCarousel = (...props) => {

  props.options = flickityOptions;

  //const CarouselsLoading = WithLoadingCarousel();

  const [componentState, setComponentState] = useState({
    loading: false
  });

  useEffect(() => {

    if (this.flkty) {
      setComponentState({ loading: true });
    }

  }, [setComponentState]);

  return (
    <>
      <Flickity
        className={"carousel nav-outside"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
        flickityRef={c => (this.flkty = c)}
      >
        <div className="carousel-cell">
          <div className="highlights-carousel__container ph-item">
            <Link to="/promocoes">
              <figure className={"highlights-carousel__figure"}>
                <img
                  data-flickity-lazyload="https://raw.githubusercontent.com/monecchi/react-wp-rest-api/master/src/assets/images/ifood-capas-almoco10.png"
                  alt="Almoço bom e barato"
                  className="highlights-carousel__image"
                />
              </figure>
            </Link>
          </div>
        </div>

        <div className="carousel-cell">
          <div className="highlights-carousel__container">
            <a href="#">
              <figure className={"highlights-carousel__figure"}>
                <img
                  data-flickity-lazyload="https://raw.githubusercontent.com/monecchi/react-wp-rest-api/master/src/assets/images/ifood-bebidas.png"
                  alt="Almoço bom e barato"
                  className="highlights-carousel__image"
                />
              </figure>
            </a>
          </div>
        </div>

        <div className="carousel-cell">
          <div className="highlights-carousel__container">
            <a href="#">
              <figure className={"highlights-carousel__figure"}>
                <img
                  data-flickity-lazyload="https://raw.githubusercontent.com/monecchi/react-wp-rest-api/master/src/assets/images/chicken-bacon-promo.png"
                  alt="Oferta Chicken & Bacon"
                  className="highlights-carousel__image"
                />
              </figure>
            </a>
          </div>
        </div>

        <div className="carousel-cell">
          <div className="highlights-carousel__container">
            <a href="#">
              <figure className={"highlights-carousel__figure"}>
                <img
                  data-flickity-lazyload="https://raw.githubusercontent.com/monecchi/react-wp-rest-api/master/src/assets/images/ifood-capas-novas-selecao-ifood.png"
                  alt="Almoço bom e barato"
                  className="highlights-carousel__image"
                />
              </figure>
            </a>
          </div>
        </div>

        <div className="carousel-cell">
          <div className="highlights-carousel__container">
            <a href="#">
              <figure className={"highlights-carousel__figure"}>
                <img
                  data-flickity-lazyload="https://raw.githubusercontent.com/monecchi/react-wp-rest-api/master/src/assets/images/mercado_ifood.png"
                  alt="Almoço bom e barato"
                  className="highlights-carousel__image"
                />
              </figure>
            </a>
          </div>
        </div>
      </Flickity>
    </>
  );
};

export default HomeCarousel;
