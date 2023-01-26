
import React from 'react'
import "./MiddleCenter.css"
import MarqueeAtuo from './MiddleLower/MarqueeAtuo';
import Tabs from "./Tabs"
import {Link, useNavigate} from "react-router-dom"

 const MiddleCenter = () => {
    const navigate=useNavigate();
   return (
    <div>
         <div className='Happy_Customer_Reviews'>
             <h2>HAPPY CUSTOMERS SHARE GREATE REVIEWS ON G2</h2>
            <div className='Happy_Customer_Reviews_All_Img'>
                 <img data-aos="fade-up-right" style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dKsdLQsBMZegtCcJ3rs5AxN0CICeyDvyGWUGVWL49_CBmdnQikCeYe0x0uLLCAt9bo&usqp=CAU" alt="Not-Found" />
                 <img data-aos="fade-up-right" style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dKsdLQsBMZegtCcJ3rs5AxN0CICeyDvyGWUGVWL49_CBmdnQikCeYe0x0uLLCAt9bo&usqp=CAU" alt="Not-Found" />
                 <img data-aos="fade-up-right" style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dKsdLQsBMZegtCcJ3rs5AxN0CICeyDvyGWUGVWL49_CBmdnQikCeYe0x0uLLCAt9bo&usqp=CAU" alt="Not-Found" />
                 <img data-aos="fade-up-right" style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dKsdLQsBMZegtCcJ3rs5AxN0CICeyDvyGWUGVWL49_CBmdnQikCeYe0x0uLLCAt9bo&usqp=CAU" alt="Not-Found" />
                 <img data-aos="fade-up-right" style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dKsdLQsBMZegtCcJ3rs5AxN0CICeyDvyGWUGVWL49_CBmdnQikCeYe0x0uLLCAt9bo&usqp=CAU" alt="Not-Found" />
                 <img data-aos="fade-up-right" style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dKsdLQsBMZegtCcJ3rs5AxN0CICeyDvyGWUGVWL49_CBmdnQikCeYe0x0uLLCAt9bo&usqp=CAU" alt="Not-Found" />
                 <img data-aos="fade-up-right" style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dKsdLQsBMZegtCcJ3rs5AxN0CICeyDvyGWUGVWL49_CBmdnQikCeYe0x0uLLCAt9bo&usqp=CAU" alt="Not-Found" />
                 <img data-aos="fade-up-right" style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dKsdLQsBMZegtCcJ3rs5AxN0CICeyDvyGWUGVWL49_CBmdnQikCeYe0x0uLLCAt9bo&usqp=CAU" alt="Not-Found" />
                 <img data-aos="fade-up-right" style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dKsdLQsBMZegtCcJ3rs5AxN0CICeyDvyGWUGVWL49_CBmdnQikCeYe0x0uLLCAt9bo&usqp=CAU" alt="Not-Found" />
                 <img data-aos="fade-up-right" style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dKsdLQsBMZegtCcJ3rs5AxN0CICeyDvyGWUGVWL49_CBmdnQikCeYe0x0uLLCAt9bo&usqp=CAU" alt="Not-Found" />
             </div>
         </div>
         <div className='Do_It_All_With_EngageBay'>
            <h1 data-aos="fade-up" style={{fontSize:"40px"}}>Do It All With EngageBay</h1>
            <p data-aos="fade-up" style={{fontSize:"20px",color:"gray",marginTop:"20px"}}>Stop paying thousands of dollars to dozens of marketing, sales, and support software. Experience the world's most <br/> affordable, unified software. EngageBay's all-in-one CRM software is the most comprehensive solution for your <br/> business.</p>
            <div className='Do_It_All_With_EngageBay_Divs'>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/automation.svg" alt="Not-Found"/>
                    <p>
                        <b>Automation</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                <Link to="/dailer">
                    <img style={{width:"70px", margin:"auto", marginTop:"30px"}} src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/calling.svg" alt="Not-Found"/>
                </Link>            
                    <p>
                        <b>Calling</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/company-management.svg" alt="Not-Found"/>
                    <p>
                        <b>Company Management</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/contact-management.svg" alt="Not-Found"/>
                    <p>
                        <b>Contact Management</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/deal-management.svg" alt="Not-Found"/>
                    <p>
                        <b>Deal Management</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-broadcast.svg" alt="Not-Found"/>
                    <p>
                        <b>Email Broadcast</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-sequences.svg" alt="Not-Found"/>
                    <p>
                        <b>Email Sequence</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/email-template-builder.svg" alt="Not-Found"/>
                    <p>
                        <b>Email Template <br/> Builder</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/forms.svg" alt="Not-Found"/>
                    <p>
                        <b>Forms</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/help-desk.svg" alt="Not-Found"/>
                    <p>
                        <b>Help Desk</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/landing-pages.svg" alt="Not-Found"/>
                    <p>
                        <b>Landing Page</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/live-chat.svg" alt="Not-Found"/>
                    <p>
                        <b>Live Chat</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/milestone-tracking.svg" alt="Not-Found"/>
                    <p>
                        <b>Milestone Tracking</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/calendar.svg" alt="Not-Found"/>
                    <p>
                        <b>Calendar</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/products.svg" alt="Not-Found"/>
                    <p>
                        <b>Products</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/proposal.svg" alt="Not-Found"/>
                    <p>
                        <b>Proposal</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/push-notifications.svg" alt="Not-Found"/>
                    <p>
                        <b>Push Notifications</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/segmentation.svg" alt="Not-Found"/>
                    <p>
                        <b>Segmentation</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/site-messaging.svg" alt="Not-Found"/>
                    <p>
                        <b>Site Messaging</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/sms-broadcast.svg" alt="Not-Found"/>
                    <p>
                        <b>SMS Broadcast</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/social-posts-scheduling.svg" alt="Not-Found"/>
                    <p>
                        <b>Social Post <br/> Scheduling</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/social-suite.svg" alt="Not-Found"/>
                    <p>
                        <b>Social Suite</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/sticky-bars.svg" alt="Not-Found"/>
                    <p>
                        <b>Sticky Bars</b>
                        
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/task-management.svg" alt="Not-Found"/>
                    <p>
                        <b>Task Management</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/team-management.svg" alt="Not-Found"/>
                    <p>
                        <b>Team Management</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/video-templates.svg" alt="Not-Found"/>
                    <p>
                        <b>Video Templates</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/site-messaging.svg" alt="Not-Found"/>
                    <p>
                        <b>Web Analytics</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/ab-landing-pages.svg" alt="Not-Found"/>
                    <p>
                        <b>A/B Landing Pages</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/custom-reporting.svg" alt="Not-Found"/>
                    <p>
                        <b>Custom Reporting</b>
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src="https://cdn5.engagebay.com/new/assets/img/icons/eb-features/workflows.svg" alt="Not-Found"/>
                    <p>
                        <b>Workflows</b>
                    </p>
                </div>
            </div>
        </div>



        <div className='All_In_One_CRM'>
             <div >
                 <h2 style={{fontSize:"32px"}}>Simplify Marketing, Sales, & support with the best free</h2>
                 <h1 style={{color:"rgb(188, 0, 239)",fontSize:"30px",marginTop:"10px"}}>All-In-One-CRM software</h1>
             </div>
             <div  className='TopInputNButton'>
                <input  placeholder='Your email address'/>
                <button onClick={()=>navigate("/signup")}>Get Started</button>
              </div>
              {/* <div style={{marginLeft:"600px"}} className='rightIcon'> 
                    <p><img style={{width:"18px",margintop:"10px",marginBottom:"-3px"}} src='https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' alt='Right Icon'/> Free for 15 users</p>
                    <p><img style={{width:"18px",margintop:"10px",marginBottom:"-3px"}} src='https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' alt='Right Icon'/> No Credit Card Required</p>

              </div> */}
               <div style={{marginLeft:"570px"}} className='rightIcon'>
                    <div className="rightIcon_ImgNp">
                        <img  src='https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' alt='Right Icon'/> 
                        <p>Free for 15 users</p>
                    </div>
                    <div className="rightIcon_ImgNp">
                        <img  src='https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' alt='Right Icon'/> 
                        <p>No Credit Card Required</p>
                    </div>
              </div>
        </div>

          <Tabs/>
      <div>
          <MarqueeAtuo/>
      </div>
    </div>
  )
}

export default MiddleCenter;

