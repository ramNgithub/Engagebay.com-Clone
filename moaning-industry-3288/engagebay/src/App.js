


// import Plan from "./Components/Pricing/Plans/Month";


//import { BrowserRouter } from "react-router-dom";
import Resource from './Components/Resource.jsx'

import { AutoDailer } from "./Components/AutoDailer";
import React from 'react'
import Om from "./Components/Pricing/Om";
import Home from './Components/Ram_HomePage/Home.jsx';

const App = () => {
  return (
    <div className="App">
      
      <Home/>
      <Om/>
      <Resource/>
      <AutoDailer/>
   </div>

  );
}
export default App