import React from "react";
import "../styles/Resource.css";
import Rgetstart from "./Rgetstart";

const Resource = () => {
  return (
    <div>
      <div className="eng">
        <h1>EngageBay Resources</h1>
        <p>Best practices and helpful guides to grow your business</p>
      </div>
      <div className="ebox">
        <div className="ebox1">
          <div>
            <img src="https://cdn5.engagebay.com/resources/img/landing-page-guide.png"></img>
            <h1>Landing Pages Guide</h1>
            <p>Know everything about landing pages.</p>
            <a href="https://www.engagebay.com/resources/landing-page-guide">
              Read More..
            </a>
          </div>
          <div>
            <img src="https://cdn5.engagebay.com/resources/img/marketing-guide.png"></img>
            <h1>Website Popups Guide</h1>
            <p>
              Know every detail on how to use website popups to generate leads.
            </p>
            <a href="https://www.engagebay.com/resources/landing-page-guide">
              Read More..
            </a>
          </div>
          <div>
            <img src="https://cdn5.engagebay.com/resources/img/web-popup.png"></img>
            <h1>Landing Pages Guide</h1>
            <p>
              Know every detail on how to use website popups to generate leads.
            </p>
            <a href="https://www.engagebay.com/resources/landing-page-guide">
              Read More..
            </a>
          </div>
        </div>
        
        
        
        
        <div className="ebox1">
          <div>
            <img src="https://cdn5.engagebay.com/resources/img/marketing-automation.png"></img>
            <h1>Marketing Automation Guide</h1>
            <p>Email marketing automation tips and best practices.</p>
            <a href="https://www.engagebay.com/resources/landing-page-guide">
              Read More..
            </a>
          </div>
          <div>
            <img src="https://cdn5.engagebay.com/resources/img/email-marketing-auto.png"></img>
            <h1>Email Marketing Guide</h1>
            <p>
            Tips and techniques to do better email marketing
            </p>
            <a href="https://www.engagebay.com/resources/landing-page-guide">
              Read More..
            </a>
          </div>
          <div>
            <img src="https://cdn5.engagebay.com/resources/img/lead-gen-guide.png"></img>
            <h1>Lead Generation Guide</h1>
            <p>
            This handy guide will help you understand everything about lead generation.
            </p>
            <a href="https://www.engagebay.com/resources/landing-page-guide">
              Read More..
            </a>
          </div>
        </div>
       
       
       
        <div className='ebox2'>
            <div>
              <img src='https://cdn5.engagebay.com/resources/img/crm-guide.png'></img>
              <h1>CRM Guide</h1>
              <p>CRM (Customer Relationship Management) tips and best practices.</p>
              <a href='https://www.engagebay.com/resources/landing-page-guide'>Read More..</a>
            </div>
            <div>
              <img src='https://cdn5.engagebay.com/resources/img/helpdesk-guide.png'></img>
              <h1>Helpdesk Guide</h1>
              <p>If a company has decided to use a helpdesk service</p>
              <a href='https://www.engagebay.com/resources/landing-page-guide'>Read More..</a>
            </div>
            
            
          </div>
      </div>
      <Rgetstart/>
     
    </div>
    
  );
};

export default Resource;
