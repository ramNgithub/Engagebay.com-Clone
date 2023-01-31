
import Navbar from "./Components/Navbar"
import MainRoutes from "./Router/MainRoutes"
import React from "react";
import New_Footer from "./Components/New_Footer";



const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes />
      <New_Footer />
   </div>

  );
};
export default App;
