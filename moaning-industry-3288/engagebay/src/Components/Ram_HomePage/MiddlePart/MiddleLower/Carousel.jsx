import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
const Carousele = () => {
  return (
    <div>
      <Carousel>
        <Card
          name="Santiago B."
          post="Southern Europe Director, Triptease"
          src="https://cdn5.engagebay.com/img/testimonials/santiago.webp"
          text=" A full-featured marketing platform. With this, you have all you need to get started and succeed. Having all in one platform make any marketer job much easier. "
        />
        <Card
          name="Hongkiat L."
          post="Editor-in-chief"
          src="https://cdn5.engagebay.com/img/testimonials/hongkiat.webp"
          text="EngageBay has everything I need when it comes to managing customer relations and sales activities. The features I most frequently use are automation for sending emails, managing sales, and marketing automation. Plus, having a built-in live chat and help desk tool makes it really easy to engage with customers."
        />
        <Card
          name="Leonardo W."
          post="Founder, Wolff Consultoria"
          src="https://cdn5.engagebay.com/img/testimonials/leonard.webp"
          text=" Engagebay works pretty well with my business. I was using ActiveCampaign but the costs were adding up quite quickly. I tried other platforms but the automation sequence offered by ActiveCampaign is not easy to find, until, I got Engagebay. The platforms offer an awesome automation platform for emails, plus landing pages and forms. It works quite well and can be a perfect substitute. "
        />
        <Card
          name="Shawn L."
          post="Marketing Manager, List Biological Laboratories, Inc"
          src="https://cdn5.engagebay.com/img/testimonials/shawn.webp"
          text=" The software is easy to set up and implement. I feel EngageBay is quickly becoming a marketing automation competitor to the premium SAAS offerings. EngageBay's customer support has been very responsive and helped me resolve an implementation issue almost immediately. "
        />
      </Carousel>
    </div>
  );
};

export default Carousele;
