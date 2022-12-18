
import Resource from "./Components/Resource.jsx";
import Navbar from "./Components/Navbar"
import MainRoutes from "./Router/MainRoutes"
import { AutoDailer } from "./Components/AutoDailer";
import React from "react";
import Om from "./Components/Pricing/Om";
import Home from './Components/Ram_HomePage/Home.jsx';
import Blog from './Components/Blog.jsx';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes />
   </div>

  );
};
export default App;
