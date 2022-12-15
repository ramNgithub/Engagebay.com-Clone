import React from 'react'
import "./MiddleUper.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const MiddleUper = () => {
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
            
                <div style={{marginLeft:"40px",marginTop:"45px"}}>
                    <br/>
                    <b>POPULAR FEATURES</b><br/>
                      <div style={{display:"flex"}}>
                        <div>
                            <div style={{display:"flex",gap:"10px"}}>
                                <img style={{width:"18px",height:"20px",marginTop:"19px"}} src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' " alt="Not-Found" />
                                <p>Contact Management</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"-20px"}}>
                                <img style={{width:"18px",height:"20px",marginTop:"19px"}} src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' " alt="Not-Found" />
                                <p>Sales Automation</p>
                            </div>
                        </div>
                        <div style={{marginLeft:"130px"}}>
                            <div style={{display:"flex",gap:"10px"}}>
                                <img style={{width:"18px",height:"20px",marginTop:"19px"}} src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' " alt="Not-Found" />
                                <p>Deal Management</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"-20px"}}>
                                <img style={{width:"18px",height:"20px",marginTop:"19px"}} src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' " alt="Not-Found" />
                                <p>Appointment Scheduling</p>
                            </div>
                        </div>
                      </div>
                    <button style={{marginTop:"30px",padding:"15px 45px",borderRadius:"5px",color:"white",backgroundColor:" rgb(105, 43, 204)",border:"none"}}>Get Started</button>
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
            
                <div style={{marginLeft:"40px",marginTop:"45px"}}>
                    <br/>
                    <b>POPULAR FEATURES</b><br/>
                      <div style={{display:"flex"}}>
                        <div>
                            <div style={{display:"flex",gap:"10px"}}>
                                <img style={{width:"18px",height:"20px",marginTop:"19px"}} src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' " alt="Not-Found" />
                                <p>Forms & Landing Pages</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"-20px"}}>
                                <img style={{width:"18px",height:"20px",marginTop:"19px"}} src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' " alt="Not-Found" />
                                <p>Marketing Automation</p>
                            </div>
                        </div>
                        <div style={{marginLeft:"130px"}}>
                            <div style={{display:"flex",gap:"10px"}}>
                                <img style={{width:"18px",height:"20px",marginTop:"19px"}} src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' " alt="Not-Found" />
                                <p>Email Sequences</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"-20px"}}>
                                <img style={{width:"18px",height:"20px",marginTop:"19px"}} src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' " alt="Not-Found" />
                                <p>Email Template Builder</p>
                            </div>
                        </div>
                      </div>
                    <button style={{marginTop:"30px",padding:"15px 45px",borderRadius:"5px",color:"white",backgroundColor:" rgb(105, 43, 204)",border:"none"}}>Get Started</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default MiddleUper