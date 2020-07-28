import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Slides mock DestaquesCarousel
import { homeslides } from "../../../data/dataArrays";

import { getSlidesByType, findSlidesByType } from '../../../data/MockDataAPI'; // function to get mock data locally

// Import Flickity
import Flickity from "react-flickity-component";

// Flickity css
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
const DestaquesCarouselNew = () => {
  //const CarouselsLoading = WithLoadingCarousel();

  const [componentState, setComponentState] = useState({
    loading: false,
    slides: null
  });

  const slidesHome = [];

  useEffect(() => {
    findSlidesByType("promo").then(response => {
      allSlides = response;
      setComponentState({ loading: true, slides: allSlides });
    });

    setComponentState({ loading: false });
  }, [setComponentState]);

  // loading state

  if (componentState.loading) {
    return "Loading...";
  }

  return (
    <>
      <div>
        {slides &&
          slides.map(slide => {
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
            </div>;
          })}
      </div>

      {/*<CarouselsLoading isLoading={componentState.loading} />*/}
    </>
  );
};

export default DestaquesCarouselNew;
