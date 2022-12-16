import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box ,Text} from '@chakra-ui/react';
import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='Footer'>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,224C384,203,480,117,576,117.3C672,117,768,203,864,197.3C960,192,1056,96,1152,80C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1" d="M0,128L40,138.7C80,149,160,171,240,160C320,149,400,107,480,122.7C560,139,640,213,720,213.3C800,213,880,139,960,122.7C1040,107,1120,149,1200,149.3C1280,149,1360,107,1400,85.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
            </path>
        </svg>    
        
        <div className='Footer_ImgNinput_div'>
          <img style={{width:"400px",marginLeft:"120px",marginTop:"-50px"}} src="https://cdn5.engagebay.com/new/assets/img/cta-img.svg" alt="Lady-Image-Not-Found" />
          <div className='Get_Started'>
            <h2 style={{color:"white",fontSize:"30px"}}>Get Started</h2>
            <div >
              <div style={{marginBottom:"20px"}}>
                <input className='Footer_input' placeholder='Name'/>
                <input style={{marginLeft:"20px"}} className='Footer_input' placeholder='Website URL'/>
              </div>
              <div style={{marginBottom:"35px"}}>
                <input className='Footer_input' placeholder='Username'/>
                <input style={{marginLeft:"20px"}} className='Footer_input' placeholder='Password'/>
              </div>
            </div>
            <button style={{padding:"12px 20px",fontWeight:"bold",color:"white",cursor:"pointer",backgroundColor:"rgb(255, 80, 0)",border:"none",borderRadius:"5px"}}>SIGNUP FOR FREE</button>
            <button style={{padding:"12px 20px",fontWeight:"bold",marginLeft:"20px",cursor:"pointer",backgroundColor:"white",borderRadius:"5px"}}>SCHEDULE A CALL</button>
          </div>
        </div>



        <div className='Footer_Multi_Options'>
          <div>
            <h5>Attract web visitor</h5>
            <p>Email Marketing</p>
            <p>Email Templates</p>
            <p>Email Broadcast</p>
            <p>Double Opt-In Email</p>
            <p>Autoresponder Email</p>
            <p>Email A/B Testing</p>
            <p> RSS-to-Email</p>
            {/* <button>Show More </button> */}
            <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box color="white" flex='0.8' textAlign='left'>
                    Show More
                  </Box>
                  <AccordionIcon style={{fontSize:"25px",color:"white"}} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text color="white" lineHeight="35px" fontSize='lg'>Opt-in Email</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-BroadCast</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-Marketing</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Template-Email</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-Autoresponder</Text>

              </AccordionPanel>
            </AccordionItem>
            </Accordion>
          </div>
          <div>
            
            <h5>Integrations</h5>
            <p>Zapier Integration</p>
            <p>PieSync Integration</p>
            <p>Xero Integration</p>
            <p>Mailgun Integration</p>
            <p>Mandrill Integration</p>
            <p>Postmark Integration</p>
            <p>Sendgrid Integration</p>
            {/* <button>Show More </button> */}
            <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box color="white" flex='0.8' textAlign='left'>
                    Show More
                  </Box>
                  <AccordionIcon style={{fontSize:"25px",color:"white"}} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text color="white" lineHeight="35px" fontSize='lg'>Opt-in Email</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-BroadCast</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-Marketing</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Template-Email</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-Autoresponder</Text>

              </AccordionPanel>
            </AccordionItem>
            </Accordion>
          </div>
          <div>
            <h5>Alternatives</h5>
            <p>Infusionsoft Alternative</p>
            <p>Drip Alternative</p>
            <p>ActiveCampaign Alternative</p>
            <p>Insightly Alternative</p>
            <p>AWeber Alternative</p>
            <p>HubSpot Alternative</p>
            <p>Agile CRM Alternative</p>
            {/* <button>Show more</button> */}
            <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box color="white" flex='0.6' textAlign='left'>
                    Show More
                  </Box>
                  <AccordionIcon style={{fontSize:"25px",color:"white"}} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text color="white" lineHeight="35px" fontSize='lg'>Opt-in Email</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-BroadCast</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-Marketing</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Template-Email</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-Autoresponder</Text>

              </AccordionPanel>
            </AccordionItem>
            </Accordion>
          </div>
          <div>
            <h5>Solution</h5>
            <p>Wordpress Plugin</p>
            <p>Email Tracker</p>
            <p>Real Estate CRM</p>
            <p>CRM for Non-profits</p>
            <p>Call Center CRM</p>
            <p>Cloud CRM</p>
            <p>Developers</p>
            {/* <button>Show more</button> */}
            <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box color="white" flex='0.8' textAlign='left'>
                    Show More
                  </Box>
                  <AccordionIcon style={{fontSize:"25px",color:"white"}} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text color="white" lineHeight="35px" fontSize='lg'>Opt-in Email</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-BroadCast</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-Marketing</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Template-Email</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-Autoresponder</Text>

              </AccordionPanel>
            </AccordionItem>
            </Accordion>
          </div>
          <div>
            <h5>Sales & Engage Prospects</h5>
            <p>Email Sequences</p>
            <p>Web Forms</p>
            <p>Landing Pages</p>
            <p>Marketing Automation</p>
            <p>Push Notification</p>
            <p>Video Marketing Templates</p>
            <p>Glossary</p>
            {/* <button>Show more</button> */}
            <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box color="white" flex='0.5' textAlign='left'>
                    Show More
                  </Box>
                  <AccordionIcon style={{fontSize:"25px",color:"white"}} />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text color="white" lineHeight="35px" fontSize='lg'>Opt-in Email</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-BroadCast</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-Marketing</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Template-Email</Text>
              <Text color="white" lineHeight="35px" fontSize='lg'>Email-Autoresponder</Text>

              </AccordionPanel>
            </AccordionItem>
            </Accordion>
          </div>
        </div>
        <br/>
        
        __________________________________________________________________________________________________________________________________________________________________________
     
        <div className='Footer-Footer-Section'>
          <div>
            <img style={{width:"185px",marginBottom:"15px"}} src="https://cdn5.engagebay.com/new/assets/img/engagebay-logo-white.svg" alt="Footer-Logo-Not-Found" />
            <p>One platform for all your Marketing, Sales, and Support teams.</p>
            <div className='Footer_Social_Logo'>
              <img style={{width:"40px"}} src="https://cdn-icons-png.flaticon.com/128/2374/2374467.png" alt="Social-Logo" />
              <img style={{width:"40px"}} src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="Social-Logo" />
              <img style={{width:"40px"}} src="https://cdn-icons-png.flaticon.com/128/2168/2168336.png" alt="Social-Logo" />
              <img style={{width:"40px"}} src="https://cdn-icons-png.flaticon.com/128/1384/1384012.png" alt="Social-Logo" />
              <img style={{width:"40px"}} src="https://cdn-icons-png.flaticon.com/128/3670/3670274.png" alt="Social-Logo" />
              <p>Legal | Terms of Service | Privacy Policy</p>
            </div>
            <div style={{display:"flex",marginTop:"30px",gap:"20px"}}>
            <img style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png" alt="Not-Found" />
            <img style={{width:"30px"}} src="https://cdn-icons-png.flaticon.com/128/3893/3893258.png" alt="Not-Found" />
            </div>
            
          </div>
          <div >
            <p style={{fontSize:"12px"}}>
            EngageBay Inc.,1007 North Orange Street 4th Floor #180 Wilmington, DE 19801
            <br/> support@engagebay.com , +1.(877).509.3570
            <br/> © EngageBay 2022. All Rights Reserved.
            </p>
          </div>
        </div>
      {/* <div style={{height:"800px" }}></div> */}
    </div>
  )
}

export default Footer