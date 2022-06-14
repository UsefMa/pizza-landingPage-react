import React from "react";
import "./HeroStyle.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container" id="hero">
        <div className="hero-info">
          <h5>#toujour</h5>  
          <p  className="p-hero">Hot Stone Pizzeria</p>
          <button className="b-tour">Take a Tour</button>
          <button className="b-love">Love't </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
