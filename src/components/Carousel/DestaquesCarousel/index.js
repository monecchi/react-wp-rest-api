import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import Flickity
import Flickity from "react-flickity-component";

// Flickity css
import "flickity/css/flickity.css";
// Component custom scss
import "./styles.scss";

// Slides data mock
//import { homeslides } from "../../../data/dataArrays";

import { findSlidesByType } from "../../../data/MockDataAPI"; // function to get mock data locally

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
const DestaquesCarousel = ({ ...props }) => {
  props.options = flickityOptions;

  //const CarouselsLoading = WithLoadingCarousel();

  const [componentState, setComponentState] = useState({
    loading: true,
    slides: []
  });

  useEffect(() => {
    const allSlides = findSlidesByType("promo").then(response => {
      //console.log(response);
      setComponentState({ loading: false, slides: slides.concat(response) });
    });
  }, [setComponentState]);

  //const slides = homeslides;

  const { loading, slides } = componentState;

  console.log("slides from component state " + JSON.stringify(slides));

  if (loading) {
    return "Loading...";
  }

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
        {slides &&
          slides.map(slide => {
            return (
              <div className="carousel-cell" key={slide.id}>
                <div className="highlights-carousel__container ph-item">
                  <Link to={slide.url}>
                    <figure className={"highlights-carousel__figure"}>
                      <img
                        data-flickity-lazyload={slide.photo_url}
                        alt={slide.title}
                        className="highlights-carousel__image"
                      />
                    </figure>
                  </Link>
                </div>
              </div>
            );
          })}
      </Flickity>
      {/*<CarouselsLoading isLoading={componentState.loading} />*/}
    </>
  );
};

export default DestaquesCarousel;
