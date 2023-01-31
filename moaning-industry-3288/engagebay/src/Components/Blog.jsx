import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Blog.css"
import Footer from './Ram_HomePage/Footer/Footer'
const Blog = () => {
  const navigate=useNavigate();
  return (
    <>
    <div>
       <div className='he'>
        <img src="https://www.appvizer.com/media/application/26457/cover/108457/cover-engagebay" alt="" />
       </div>
    </div>
    <div className='started'>
    <div className='one'>
        <img src='https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/12/real-estate-email-marketing-tips.pngw3.webp'/>
       
    </div>
    <div className='twostarted'>
      <h1>GET STARTED</h1>
      <form className='inp'>
          <input placeholder='Name'></input>
          <input placeholder='Email'></input>
          <input placeholder='Password'></input>
          
          <input onClick={()=>alert("We will connect to your team as soon as possible")} className='last' placeholder='SCHEDULE A CALL'></input>
          <input onClick={()=>navigate("/signup")} className='org' placeholder='SIGNUP FOR FREE'></input>
      </form>
    </div>
  </div>
  <div className='divv'>
    <div><div><img src='https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/12/bigcommerce-vs-magento.pngw3.webp' /><a href='https://www.engagebay.com/blog/bigcommerce-vs-magento/'><h3>BigCommerce vs Magento: Features, Pricing, and More Compared</h3></a></div></div>
    <div><div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OSvnVHXKKuExTZwB9l2UhcANNjMibXYO3QTwksfWfKx5JkwV8pOdt7JQwJMBXfgKPik&usqp=CAU' /><a href='https://www.engagebay.com/blog/bigcommerce-vs-magento/'><h3>The Challenger Sales Model: A 5-Min Guide to Close More Deals</h3></a></div></div>
    <div><div><img src='https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/12/project-milestones.pngw3.webp' /><a href='https://www.engagebay.com/blog/bigcommerce-vs-magento/'><h3>Definition and Importance of Project Milestones (+ Examples)</h3></a></div></div>


  </div>
 <div className='gg'>
    <h1>Discover the latest in...</h1>
 </div>
 <div className='wp' >
    <div>
        <h1>Marketing Bay</h1>
        <h2>view all posts..</h2>
    </div>
    
 </div>
 <div className='divv'>
    <div><div><img src='https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/12/plumbing-marketing.pngw3.webp' /><a href='https://www.engagebay.com/blog/bigcommerce-vs-magento/'><h3>15 Simple Steps To Achieve Plumbing Marketing Mastery</h3></a></div></div>
    <div><div><img src='https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/11/holiday-newsletter-ideas.pngw3.webp' /><a href='https://www.engagebay.com/blog/bigcommerce-vs-magento/'><h3>The Challenger Sales Model: A 5-Min Guide to Close More Deals</h3></a></div></div>
    <div><div><img src='https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/11/christmas-email.pngw3.webp' /><a href='https://www.engagebay.com/blog/bigcommerce-vs-magento/'><h3>How To Write The Perfect Christmas Email [+ Fresh Subject Lines]</h3></a></div></div>


  </div>
  <div className='wp' >
    <div>
        <h1>Sales Bay</h1>
        <h2>view all posts..</h2>
    </div>
    
 </div>
 <div className='divv'>
    <div><div><img src='https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/11/sales-volume.pngw3.webp' /><a href='https://www.engagebay.com/blog/bigcommerce-vs-magento/'><h3>What Is Sales Volume? 8 Strategies to Boost Your Revenue</h3></a></div></div>
    <div><div><img src='https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/10/spin-selling.pngw3.webp' /><h3>A Guide to SPIN Selling: Definition, Tips, and Best Practices</h3></div></div>
    <div><div><img src='https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/09/strategic-selling.pngw3.webp' /><h3>You Understand What Strategic Selling Means? It Is Not What You Think</h3></div></div>


  </div>
  <div className='wp' >
    <div>
        <h1>Services Bay</h1>
        <h2>view all posts..</h2>
    </div>
    
 </div>
 <div className='divv'>
    <div><div><img src='https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/11/sorry-for-the-inconvenience.pngw3.webp' /><h3>The Right Way Of Saying ‘Sorry for the Inconvenience’</h3></div></div>
    <div><div><img src='https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/01/customer-service-tips-1.pngw3.webp' /><h3>12 Customer Service Tips for Phenomenal Success</h3></div></div>
    <div><div><img src='https://www.engagebay.com/blog/wp-content/w3-webp/uploads/2022/09/strategic-selling.pngw3.webp' /><h3>You Understand What Strategic Selling Means? It Is Not What You Think</h3></div></div>


  </div>
  <Footer/>
  </>
  )
}

export default Blog