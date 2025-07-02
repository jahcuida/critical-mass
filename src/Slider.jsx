import React, { useState } from "react";
import "./styles/Carousel.css";
import { useLanguage } from "./context/LanguageContext";

export default function Slider({ darkMode }) {
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();

  const sliderImages = t("sliderImages");

  function nextImage() {
    setIndex((prevIndex) =>
      prevIndex < sliderImages.length - 1 ? prevIndex + 1 : 0
    );
  }

  function previousImage() {
    setIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  }

  function goToImage(i) {
    setIndex(i);
  }

  return (
    <>
  <div className={`main-container ${darkMode ? "dark" : ""}`}>
        <div className="slider-container">
          <div className="leftArrow" onClick={previousImage}>
            &#10092;
          </div>
          <div className="rightArrow" onClick={nextImage}>
            &#10093;
          </div>

          {sliderImages.map((url, i) => (
            <div
              key={i}
              className={`list-images ${i === index ? "actual" : ""}`}
            >
              {i === index && <img src={url} alt={`Slide ${i + 1}`} />}
            </div>
          ))}
        </div>
      </div>
     <div className={`grey ${darkMode ? "dark" : ""}`}></div>

      {/* Cambiamos la clase según darkMode */}
      <div className={`dots-container ${darkMode ? "dark" : ""}`}>
        {sliderImages.map((_, i) => (
          <div
            key={i}
            className={`dot-container-item ${i === index ? "active" : ""}`}
            onClick={() => goToImage(i)}
          >
            &#9865;
          </div>
        ))}
      </div>
    </>
  );
}
