import React from "react";

const Carousel = (props) => {
  return (
    <div className="carousel">
      {props.artistData.map((item) => (
        <div
          key={item.id}
          className="img-container"
          style={{ right: item.position + props.position }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
