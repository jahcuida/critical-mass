import React, { useState } from "react";
import "./styles/Carousel.css";
import { imagesList } from "./data/sliderData.js";

export default function Slider() {
  const [index, setIndex] = useState(0);

  function nextImage() {
    if (index < imagesList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function previousImage() {
    if (index == 0) {
      setIndex(imagesList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function goToImage(i) {
    setIndex(i);
  }
  // function interval(){
  //   setInterval(nextImage,5000);
  // }
  return (
    <>
      <div className="main-container">
        <div className="slider-container">
          <div className="leftArrow" onClick={previousImage}>
            &#10092;
          </div>
          <div className="rightArrow" onClick={nextImage}>
            &#10093;
          </div>
          <div className="container-images">
            {imagesList.map((image) => {
              return (
                <div
                  className={`list-images ${
                    image.id === index ? "actual" : ""
                  }`}
                >
                  {image.id === index && <img src={image.url}></img>}
                </div>
              );
            })}
          </div>
        </div>
          <div className="dots-container">
            {imagesList.map((_, i) => (
              <div
                key={i}
                className={`dot-container-item ${i === index ? "active" : ""}`}
                onClick={() => goToImage(i)}
              >
                &#9865;
              </div>
            ))}
          </div>
      </div>
    </>
  );
}
