import React from "react";
import "./Product.css";
import hero from "../../images/hero.jpg";
import pizza1 from "../../images/pizza1.jpg";
import pizza2 from "../../images/pizza2.jpg";
import pizza3 from "../../images/pizza3.jpg";
import pizza4 from "../../images/pizza4.jpg";
import pizza5 from "../../images/pizza5.jpg";




const Product = () => {

  return (
    <>
      <div className="product-container" id="product">
        <h1 className="intr-text">
          Welcome to the <span style={{ color: "orange" }}>Pizza</span> World
        </h1>
        <p className="intr-paragraph">
          here You will find all kinds of pizza some of them you already know
          and there's other's You dont'
        </p>
        
        <div className="products-img" >
          <img  src={hero} alt="" className="prd-image" prdId="1" />
          <img src={pizza1} alt="" className="prd-image" prdId="2" />
          <img src={pizza2} alt="" className="prd-image" prdId="3" />
          <img src={pizza3} alt="" className="prd-image" prdId="4" />
          <img src={pizza4} alt="" className="prd-image" prdId="5" />
          <img src={pizza5} alt="" className="prd-image" prdId="6" />
        </div>
        
        
      </div>
    </>
  );
};

export default Product;
