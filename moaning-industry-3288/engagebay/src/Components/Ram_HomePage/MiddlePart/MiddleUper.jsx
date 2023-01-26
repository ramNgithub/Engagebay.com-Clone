 import React from 'react'
 import "./MiddleUper.css"
 import Aos from "aos"
 import "aos/dist/aos.css"
 import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

 const MiddleUper = () => {
    const navigate=useNavigate();
     useEffect(()=>{
         Aos.init({duration:1000})
     },[])
   return (
     <div >
         <div data-aos="fade-up" className='middle_Uper_Heading'>
         <h1>Single Solution for All Your Activities</h1>
         <p>Identify new opportunities, convert visitors, deliver customer happiness, and more!</p>
         </div>
         <div className='SingleSolution_div'>
             <div data-aos="fade-right" className='SingleSolution_div_one'>
                 <div className='SingleSolution_div_one_ineer'>
                     <div>
                         <p style={{color:"gray"}}> <b style={{fontSize:"20px",color:"black"}}>CRM Software</b><br/><br/>
                         Store unlimited contacts and build stronger<br/> relationships by keeping track of all your customer <br/> details in one place</p>
                     </div>
                     <div>
                        <img style={{width:"125px",marginTop:"15px"}} src="https://cdn5.engagebay.com/new/assets/img/icons/crm.svg" alt="Not-Found" />
                     </div>
                 </div>
            

                <div style={{marginLeft:"40px"}}>
                    <br/>
                    <b style={{color:"black"}}>POPULAR FEATURES</b><br/>
                      <div style={{display:"flex"}}>
                        <div>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Contact Management</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Sales Automation</p>
                            </div>
                        </div>
                        <div style={{marginLeft:"130px"}}>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Deal Management</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Appointment Scheduling</p>
                            </div>
                        </div>
                      </div>
                    <button onClick={()=>navigate("/signup")} style={{marginTop:"30px",padding:"15px 45px",borderRadius:"5px",color:"white",backgroundColor:" rgb(105, 43, 204)",border:"none"}}>Get Started</button>
                </div>

                
             </div>



             <div data-aos="fade-left" className='SingleSolution_div_two'>
                 <div className='SingleSolution_div_one_ineer'>
                     <div>
                         <p style={{color:"gray"}}> <b style={{fontSize:"20px",color:"black"}}>Marketing Automation</b><br/><br/>
                         Save time by automating your marketing processes<br/> and sending personalized messages to target<br/> audiences</p>
                     </div>
                     <div>
                         <img style={{width:"125px",marginTop:"15px"}} src="https://cdn5.engagebay.com/new/assets/img/icons/marketing-automation.svg" alt="Not-Found" />
                     </div>
                 </div>
            

                <div style={{marginLeft:"40px"}}>
                    <br/>
                    <b style={{color:"black"}}>POPULAR FEATURES</b><br/>
                      <div style={{display:"flex"}}>
                        <div>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Form & Landing Pages</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Email Sequences</p>
                            </div>
                        </div>
                        <div style={{marginLeft:"130px"}}>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Marketing Automation</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Email Template Builder</p>
                            </div>
                        </div>
                      </div>
                    <button onClick={()=>navigate("/signup")} style={{marginTop:"30px",padding:"15px 45px",borderRadius:"5px",color:"white",backgroundColor:" rgb(105, 43, 204)",border:"none"}}>Get Started</button>
                </div>

                
            </div>
         </div>



         <div className='SingleSolution_div'>
             <div data-aos="fade-right" className='SingleSolution_div_one'>
                 <div className='SingleSolution_div_one_ineer'>
                     <div>
                         <p style={{color:"gray"}}> <b style={{fontSize:"20px",color:"black"}}>Helpdesk Software</b><br/><br/>
                         Resolve queries faster and deliver exceptional <br/> support to delight your customers </p>
                     </div>
                     <div>
                         <img style={{width:"125px",marginTop:"15px"}} src="https://cdn5.engagebay.com/new/assets/img/icons/helpdesk.svg" alt="Not-Found" />
                     </div>
                 </div>
            

                <div style={{marginLeft:"40px"}}>
                    <br/>
                    <b style={{color:"black"}}>POPULAR FEATURES</b><br/>
                      <div style={{display:"flex"}}>
                        <div>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Instant Support</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Shortcuts</p>
                            </div>
                        </div>
                        <div style={{marginLeft:"130px"}}>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Chat Form Customisation</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Notification</p>
                            </div>
                        </div>
                      </div>
                    <button onClick={()=>navigate("/signup")} style={{marginTop:"30px",padding:"15px 45px",borderRadius:"5px",color:"white",backgroundColor:" rgb(105, 43, 204)",border:"none"}}>Get Started</button>
                </div>

                
             </div>



             <div data-aos="fade-left" className='SingleSolution_div_two'>
                 <div className='SingleSolution_div_one_ineer'>
                     <div>
                         <p style={{color:"gray"}}> <b style={{fontSize:"20px",color:"black"}}>Live Chat Software</b><br/><br/>
                         Boost customer happiness and increase conversions<br/>by offering instant help when your customers need<br/> it</p>
                     </div>
                     <div>
                         <img style={{width:"125px",marginTop:"15px"}} src="https://cdn5.engagebay.com/new/assets/img/icons/livechat.svg" alt="Not-Found" />
                     </div>
                 </div>
            

                <div style={{marginLeft:"40px"}}>
                    <br/>
                    <b style={{color:"black"}}>POPULAR FEATURES</b><br/>
                      <div style={{display:"flex"}}>
                        <div>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Ticket Management</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Macro</p>
                            </div>
                        </div>
                        <div style={{marginLeft:"130px"}}>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Ticket Management</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p style={{color:"gray"}}>Macro</p>
                            </div>
                        </div>
                      </div>
                    <button onClick={()=>navigate("/signup")} style={{marginTop:"30px",padding:"15px 45px",borderRadius:"5px",color:"white",backgroundColor:" rgb(105, 43, 204)",border:"none"}}>Get Started</button>
                </div>

             </div>
         </div>
     </div>
   )
 }

 export default MiddleUper