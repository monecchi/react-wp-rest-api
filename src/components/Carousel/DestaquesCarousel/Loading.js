import React from "react";

// Import Flickity
import Flickity from "react-flickity-component";

// Flickity default css
import "flickity/css/flickity.css";
// Component custom scss
import "./styles.scss";

// react-loading-skeleton
//import Skeleton from "react-loading-skeleton";

const flickityOptions = {
  initialIndex: 1,
  draggable: false,
  cellAlign: "center",
  freeScroll: false,
  wrapAround: true,
  contain: false,
  lazyLoad: 0,
  imagesLoaded: false,
  percentPosition: false,
  // disable previous & next buttons and dots
  prevNextButtons: false,
  pageDots: false,
};

//
// DestaquesCarousel Loading Component
//

const WithLoadingCarousel = (Component) => {
  return function WithLoadingCarouselComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    const Id = "";
    return (
      <>
        <Flickity
          className={"carousel nav-outside"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={true} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {[1, 2, 3, 4].map(
            num => (
              (Id = num),
              (
                <div className="carousel-cell">
                  <div className="highlights-carousel__container ph-loading">
                    <figure className={"highlights-carousel__figure"} />
                  </div>
                </div>
              )
            )
          )}
        </Flickity>
      </>
    );
  };
};
export default WithLoadingCarousel;
