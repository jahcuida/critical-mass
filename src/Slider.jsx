import React, { useState, useEffect, useRef } from "react";
import "./styles/Carousel.css";
import { imagesList } from "./data/sliderData.js";

export default function Slider() {
  const listRef = useRef();
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[index]

    if(imgNode){
      imgNode.scrollIntoView({
        behavior:"smooth",
        left:"scrollRigth",
      });
    }
  },[index])


  function handleNextClick() {
    if (index < imagesList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
 
  }
  function handlePreviousClick() {
    if (index == 0) {
      setIndex(imagesList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function goToSlide(i){
    setIndex(i);
  }

  return (
    <>
      <div className="main-container">
        <div className="slider-container">
              <div className="leftArrow" onClick={e => {e.preventDefault();handlePreviousClick()}}>&#10092;</div>
              <div className="rightArrow" onClick={handleNextClick}>&#10093;</div>
          <div className="container-images">
            <ul ref={listRef}>
              {imagesList.map((image) => {
                return (
                  <li key={image.id} className="list-images">
                    <img src={image.url}></img>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dots-container">
            {
              imagesList.map((_,i) =>(
                <div key={i} className={`dot-container-item ${i === index ? "active" : ""}`} onClick={()=>goToSlide(i)}>&#9865;</div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
