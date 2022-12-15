import React from 'react'
import "./Head.css"

const Head = () => {
  return (
    <div className='Head'>
      <div className='TopHeading' >
        <h1 >Market better. Sell faster.
        <br/>
        Support smarter</h1>
        


        <p >One platform for all your Marketing, Sales, and Support teams</p>
</div>
<div className='TopInputNButton'>
<input  placeholder='Your email address'/>
<button>Get Started</button>
</div>
<div className='rightIcon'>
  <p><img style={{width:"18px",margintop:"10px",marginBottom:"-3px"}} src='https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' alt='Right Icon'/> Free for 15 users</p>
  <p><img style={{width:"18px",margintop:"10px",marginBottom:"-3px"}} src='https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-violette.png' alt='Right Icon'/> No Credit Card Required</p>

</div>
<img className='TopImage' src='https://cdn5.engagebay.com/new/assets/img/banner-image.svg' alt='Header-image'/>
 <div className='TopsevenImage'>
  <img src="https://cdn5.engagebay.com/new/assets/img/p-logos/neilpatel.png" alt="Not-Found" />
  <img src="https://cdn5.engagebay.com/new/assets/img/p-logos/forbs.png" alt="Not-Found" />
  <img src="https://cdn5.engagebay.com/new/assets/img/p-logos/inc.png" alt="Not-Found" />
  <img src="https://cdn5.engagebay.com/new/assets/img/p-logos/enterpreneur.png" alt="Not-Found" />
  <img src="https://cdn5.engagebay.com/new/assets/img/p-logos/techcrunch.png" alt="Not-Found" />
  <img src="https://cdn5.engagebay.com/new/assets/img/p-logos/jeffbullas.png" alt="Not-Found" />
  <img src="https://cdn5.engagebay.com/new/assets/img/p-logos/business.png" alt="Not-Found" />
 </div>
    </div>
  )
}

export default Head