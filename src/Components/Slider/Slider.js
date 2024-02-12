import React from "react";
import SliderImg from "../../Assets/slider.png";
import Button from 'react-bootstrap/Button';
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider-container">
      <img src={SliderImg} alt="Slider" className="slider-image" />
      <div className="slider-content">
        <h2 className="slider-text">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</h2>
        <Button variant="primary" className="slider-button">Discover More</Button>
      </div>
    </div>
  );
};

export default Slider;
