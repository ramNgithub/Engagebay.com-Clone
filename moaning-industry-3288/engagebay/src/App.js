
import Resource from "./Components/Resource.jsx";

import { AutoDailer } from "./Components/AutoDailer";
import React from "react";
import Om from "./Components/Pricing/Om";
import Home from './Components/Ram_HomePage/Home.jsx';
import Blog from './Components/Blog.jsx';


const App = () => {
  return (
    <div className="App">
      {/* <Head/> */}
      {/* <MiddleUper/> */}
      {/* <MiddleCenter/>
      <Footer/> */}
      <Om/>
      {/* <Resource/> 
      <AutoDailer/>
      <Blog/> */}

      <Home/>
      <Resource/> 
      <AutoDailer/>
      <Blog/>
   </div>

  );
};
export default App;
