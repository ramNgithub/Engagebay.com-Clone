import React from 'react'
// import "../styles/Rgetstart.css"
import "../styles/Rgestart.css";
const Rgetstart = () => {
    
  return (
    <div className='started'>
      <div className='onestarted'>
          <div className='ub'>
            <h1 className="unli">Unlimited users</h1>
            <h1 className="blu">free forever</h1>
          </div>
          <p>With awesome software backed by a dedicated support team, make every part of your marketing, sales & helpdesk more effective.</p>
      
          <div className='tick'>
          <div class="icon-big feature-description-img lozad">
            <img src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/featured-check.svg" alt="" />
          </div>
            <div> Affordable</div>
            <div class="icon-big feature-description-img lozad">
            <img src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/featured-check.svg" alt="" />
          </div>
            <div>All-in-one Software</div>
            <div class="icon-big feature-description-img lozad">
            <img src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/featured-check.svg" alt="" />
          </div>

            <div> Free Onboarding Sessions</div>
          </div>

          <div className='sis'>
            <img src='https://cdn5.engagebay.com/images/engagebay-capterra.png'/>
            <img src='https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/eb-supreme-software-new.png'/>
            <img className='thh' src='https://cdn5.engagebay.com/img/engagebay-saasworthy.png'/>
            <img  src='https://cdn5.engagebay.com/images/engagebay-g2crowd.png'/>
            <img src='https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/eb-expert-choice-new.png'/>
          </div>
      </div>
      <div className='twostarted'>
        <h1>GET STARTED</h1>
        <form className='inp'>
            <input placeholder='Name'></input>
            <input placeholder='Email'></input>
            <input placeholder='Password'></input>
            <input className='org' placeholder='SIGNUP FOR FREE'></input>
            <input className='last' placeholder='SCHEDULE A CALL'></input>
             
        </form>
      </div>
    </div>
  )
}

export default Rgetstart
