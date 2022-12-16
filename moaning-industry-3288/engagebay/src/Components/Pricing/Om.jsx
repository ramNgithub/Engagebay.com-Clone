import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import Month from "./PricePlans"
// import { BrowserRouter } from "react-router-dom";
// import AllRoutes from "./Routes/AllRoutes"

const Om = () => {
  return (
    <div>
        {/* <BrowserRouter> */}
        <ChakraProvider>
          <Month/>
          {/* <AllRoutes/> */}
        </ChakraProvider>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default Om