import { Heading } from "@chakra-ui/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Head.css";

const Head = () => {
  const navigate = useNavigate();
  return (
    <div className="Head">
      <div className="TopHeading">
        <Heading pt="5%" fontSize={{sm:"30px", md:"60px", lg:"80px"}} >Market better. Sell faster. Support smarter</Heading>

        <p>One platform for all your Marketing, Sales, and Support teams</p>
      </div>
      <div className="TopInputNButton">
        <input placeholder="Your email address" />
        <button onClick={() => navigate("/login")}>Get Started</button>
      </div>
      <div className="rightIcon">
        <div className="rightIcon_ImgNp">
          <img
            src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png"
            alt="Right Icon"
          />
          <p>Free for 15 users</p>
        </div>
        <div className="rightIcon_ImgNp">
          <img
            src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png"
            alt="Right Icon"
          />
          <p>No Credit Card Required</p>
        </div>
      </div>
      <img
        className="TopImage"
        src="https://cdn5.engagebay.com/new/assets/img/banner-image.svg"
        alt="Header-image"
      />
      <div className="TopsevenImage">
        <img
          src="https://cdn5.engagebay.com/new/assets/img/p-logos/neilpatel.png"
          alt="Not-Found"
        />
        <img
          src="https://cdn5.engagebay.com/new/assets/img/p-logos/forbs.png"
          alt="Not-Found"
        />
        <img
          src="https://cdn5.engagebay.com/new/assets/img/p-logos/inc.png"
          alt="Not-Found"
        />
        <img
          src="https://cdn5.engagebay.com/new/assets/img/p-logos/enterpreneur.png"
          alt="Not-Found"
        />
        <img
          src="https://cdn5.engagebay.com/new/assets/img/p-logos/techcrunch.png"
          alt="Not-Found"
        />
        <img
          src="https://cdn5.engagebay.com/new/assets/img/p-logos/jeffbullas.png"
          alt="Not-Found"
        />
        <img
          src="https://cdn5.engagebay.com/new/assets/img/p-logos/business.png"
          alt="Not-Found"
        />
      </div>
    </div>
  );
};

export default Head;
