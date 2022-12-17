
import Resource from "./Components/Resource.jsx";
// import Plan from "./Components/Pricing/Plans/Month";
//import { BrowserRouter } from "react-router-dom";
import { AutoDailer } from "./Components/AutoDailer";
import React from "react";
import Om from "./Components/Pricing/Om";
import Home from './Components/Ram_HomePage/Home.jsx';
import Blog from './Components/Blog.jsx';


const App = () => {
  return (
    <div className="App">

      
      <Home/>

      <Om/>
      <Resource/> 
      <AutoDailer/>
      <Blog/>
   </div>

  );
};
export default App;
