import React from "react";
import "./ContactStyle.css";
import {AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineHeart} from 'react-icons/ai'

const Contact = () => {
  return (
    <>
      <div className="contact-container" id="contact">
        <div className="footer">
          <div className="about">
            <h1>About </h1>
            <p>pizza World</p>
            <p>Countries</p>
            <p>More Love</p>
          </div>
        </div>

        <div className="footer">
          <div className="shop">
            <h1> shop</h1>
            <p>Goals</p>
            <p>Technologies</p>
            <p>Support us</p>
          </div>
        </div>

        <div className="footer">
          <div className="media">
            <h1> media</h1>
            <AiFillFacebook className="m-icons"/>
            <AiFillInstagram className="m-icons"/>
            <AiFillYoutube className="m-icons"/>
            
          </div>
        </div>
      <p className="love-msg">Made With love <AiOutlineHeart className="heart-icon"/> </p>
      </div>
      
    </>
  );
};

export default Contact;
