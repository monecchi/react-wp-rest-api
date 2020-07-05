import React, { useEffect, useState } from "react";

const WithImageLoading = ({ src, alt, className }) => {
  const [componentState, setComponentState] = useState({
    imageStatus: "loading"
  });

  useEffect(() => {
    const handleImageLoaded = () => {
      setComponentState({ imageStatus: "loaded" });
    };

    const handleImageErrored = () => {
      setComponentState({ imageStatus: "failed to load" });
    };
  }, [setComponentState]);

  return (
    <div>
      <img
        src={this.props.imageUrl}
        onLoad={this.handleImageLoaded.bind(this)}
        onError={this.handleImageErrored.bind(this)}
      />
      {this.state.imageStatus}
    </div>
  );
};
