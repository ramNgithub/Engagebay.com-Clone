
import { useState } from "react";
import "./Tabs.css";
import Aos from "aos";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs" }
          onClick={() => toggleTab(1)}
        >
          Marketing Software
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Free CRM Features
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Sales Software

        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div data-aos="fade-right"  style={{color:"gray"}}>
             <h1 style={{fontWeight:"bold",fontSize:"35px",color:"black"}}>Market Your Business Like the <br/> World's Best Companies</h1>
             <hr style={{border:"2px solid ",color:" rgb(105, 43, 204)",borderRadius:"5px",marginTop:"20px",marginBottom:"20px"}}/>
             <p>With our comprehensive set of Marketing tools, including Email<br/> Marketing, Marketing Automation, Email Template Builder, Landing Page <br/>  Builder, Lead Generation tools, Social Suite & more, your marketing team <br/> can take things to the next level.</p>
             <div style={{marginTop:"-400px"}}>
                    <br/>
                    <b style={{color:"black"}}>POPULAR FEATURES</b><br/>
                      <div style={{display:"flex"}}>
                        <div>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p>Ticket Management</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p>Macro</p>
                            </div>
                        </div>
                        <div style={{marginLeft:"130px"}}>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p>Ticket Management</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p>Macro</p>
                            </div>
                        </div>
                      </div>
                    <button style={{marginTop:"30px",padding:"15px 45px",borderRadius:"5px",color:"white",backgroundColor:" rgb(105, 43, 204)",border:"none"}}>Explore Free CRM Features</button>
                </div>
          </div>
          <div data-aos="fade-left" className="Market-your-business" >
            <img  style={{width:"450px",marginTop:"80px"}} src="https://cdn5.engagebay.com/new/assets/img/tabs/home/marketing_software.png" alt="Not-Found" />
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         <div data-aos="fade-right"  style={{color:"gray"}}>
             <h1 style={{fontWeight:"bold",fontSize:"35px",color:"black"}}>Build Lasting Customer <br/> Relationships</h1>
             <hr style={{border:"2px solid ",color:" rgb(105, 43, 204)",borderRadius:"5px",marginTop:"20px",marginBottom:"20px"}}/>
             <p>Along with a full stack of software for marketing, sales, and customer<br/>service, EngageBay also offers a completely free CRM at its core. While <br/> together.</p>
             <div style={{marginTop:"-400px"}}>
                    <br/>
                    <b style={{color:"black"}}>POPULAR FEATURES</b><br/>
                      <div style={{display:"flex"}}>
                        <div>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p>Contact Management</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p>Tasks</p>
                            </div>
                        </div>
                        <div style={{marginLeft:"130px"}}>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p>Deal Pipeline</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p>Appointment Scheduling</p>
                            </div>
                        </div>
                      </div>
                    <button style={{marginTop:"30px",padding:"15px 45px",borderRadius:"5px",color:"white",backgroundColor:" rgb(105, 43, 204)",border:"none"}}>Explore Free CRM Features</button>
                </div>
          </div>
          <div data-aos="fade-left" className="Market-your-business" >
            <img  style={{width:"450px",marginTop:"80px"}} src="https://cdn5.engagebay.com/new/assets/img/tabs/home/free_crm_features.png" alt="Not-Found" />
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div  data-aos="fade-right" style={{color:"gray"}}>
             <h1 style={{fontWeight:"bold",fontSize:"35px",color:"black"}}>Sell Like the Pros</h1>
             <hr style={{border:"2px solid ",color:" rgb(105, 43, 204)",borderRadius:"5px",marginTop:"20px",marginBottom:"20px"}}/>
             <p>With our exhaustive set of Sales tools such as Contact Management, Email<br/> Tracking, Telephony, Appointment Scheduling, Project Management, <br/>  Gamification.</p>
             <div style={{marginTop:"-400px"}}>
                    <br/>
                    <b style={{color:"black"}}>POPULAR SALES AUTOMATION FEATURES</b><br/>
                      <div style={{display:"flex"}}>
                        <div>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p>Telephony</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p>Sales Automation</p>
                            </div>
                        </div>
                        <div style={{marginLeft:"130px"}}>
                            <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p>Multiple Deal Pipelines</p>
                            </div>

                            <div style={{display:"flex",gap:"10px",marginTop:"12px"}}>
                                <img style={{width:"18px",height:"20px"}} src="https://www.catherine-capaldo.com/wp-content/uploads/2019/01/check-300x300.png' " alt="Not-Found" />
                                <p>Email Sequences</p>
                            </div>
                        </div>
                      </div>
                    <button style={{marginTop:"30px",padding:"15px 45px",borderRadius:"5px",color:"white",backgroundColor:" rgb(105, 43, 204)",border:"none"}}>Explore Free CRM Features</button>
                </div>
          </div>
          <div data-aos="fade-left" className="Market-your-business" >
            <img  style={{width:"450px",marginTop:"80px"}} src="https://cdn5.engagebay.com/new/assets/img/tabs/home/sales_software.png" alt="Not-Found" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;