import React from "react";
import "./MarqueAuto.css";
import Marquee from "react-fast-marquee";

const MarqueeAtuo = () => {
  return (
    <div className="Marquee-container">
      <h1>Our Integration Partners</h1>
      <p>Stay connected to your favorite apps using EngageBay’s integrations</p>

      <Marquee pauseOnHover={true} speed={100}>
        <div className="Auto-slide-row-one">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/zapier.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-one">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/xero.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-one">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/amazon.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-one">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/justcall.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-one">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/jot.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-one">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/digioh.png"
            alt="Not-found"
          />
        </div>
      </Marquee>

      <Marquee pauseOnHover={true} speed={100}>
        <div className="Auto-slide-row-two">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/mailgun.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-two">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/shopify.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-two">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/stripe.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-two">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/twiloo.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-two">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/bulksms.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-two">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/call-hippo.png"
            alt="Not-found"
          />
        </div>
      </Marquee>

      <Marquee pauseOnHover={true} speed={100}>
        <div className="Auto-slide-row-three">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/linkedin.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-three">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/voxvalley.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-three">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/piesync.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-three">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/sendgrid.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-three">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/mandrill.png"
            alt="Not-found"
          />
        </div>
        <div className="Auto-slide-row-three">
          <img
            src="https://cdn5.engagebay.com/new/assets/img/integrations/docusign.png"
            alt="Not-found"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeAtuo;
