


// import Plan from "./Components/Pricing/Plans/Month";


//import { BrowserRouter } from "react-router-dom";
import Resource from './Components/Resource.jsx'
import Head from './Components/Ram_HomePage/HeadPart/Head';
import MiddleCenter from './Components/Ram_HomePage/MiddlePart/MiddleCenter';
import MiddleUper from './Components/Ram_HomePage/MiddlePart/MiddleUper';
import { AutoDailer } from "./Components/AutoDailer";
import React from 'react'
import Om from "./Components/Pricing/Om";
import Footer from "./Components/Ram_HomePage/Footer/Footer"
import Home from './Components/Ram_HomePage/Home.jsx';

const App = () => {
  return (
    <div className="App">
      {/* <Head/>
      <MiddleUper/>
      <MiddleCenter/>
      
      <Footer/> */}
      <Home/>
      {/* <Om/>
      <Resource/>
      <AutoDailer/> */}
   </div>

  );
}
export default App