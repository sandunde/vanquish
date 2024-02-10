import React from "react";
import SliderImg from "../../Assets/slider.png";
import "./Slider.css";
import Header from "../Header/Header";

const Slider = () => {
  return (
    <div className="slider-container">
      <Header />
      <img src={SliderImg} alt="Slider" className="slider-image" />
    </div>
  );
};

export default Slider;
