import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import Month from "./PricePlans"
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes"
import ComparePrice from './Middle/ComparePrice';
import GirlData from './Middle/GirlData';


const Om = () => {
  return (
    <div>
        {/* <BrowserRouter> */}
        <ChakraProvider>
          <Month/>
         <AllRoutes/> 
          <ComparePrice/>
          <GirlData/>
        </ChakraProvider>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default Om