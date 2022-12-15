
import { ChakraProvider } from "@chakra-ui/react";
import Plan from "./Components/Pricing/Plans/Month";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Components/Pricing/Routes/AllRoutes";
import Resource from './components/Resource.jsx'
import Head from './Components/Ram_HomePage/HeadPart/Head';
import MiddleCenter from './Components/Ram_HomePage/MiddlePart/MiddleCenter';
import MiddleUper from './Components/Ram_HomePage/MiddlePart/MiddleUper';
import { AutoDailer } from "./Components/AutoDailer";

import React from 'react'

const App = () => {
  return (
    <div className="App">
      <Head/>
      <MiddleUper/>
      <MiddleCenter/>

      <BrowserRouter>
        <ChakraProvider>
          <Plan />
          <AllRoutes/>
        </ChakraProvider>
      </BrowserRouter>

      <Resource/>
      <AutoDailer/>
   </div>
  );
}
export default App