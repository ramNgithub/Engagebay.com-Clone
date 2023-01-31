import React from 'react'
import Head from './HeadPart/Head'
import MiddleUper from './MiddlePart/MiddleUper'
import Carousele from './MiddlePart/MiddleLower/Carousel';
import MiddleCenter from './MiddlePart/MiddleCenter';
// import Footer from "./Footer/Footer"
import New_Footer from './New_Footer';
const Home = () => {
  return (
    <div>
        <Head/>
        <MiddleUper/>
        <MiddleCenter/>
        <Carousele/>
       
        <New_Footer/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home