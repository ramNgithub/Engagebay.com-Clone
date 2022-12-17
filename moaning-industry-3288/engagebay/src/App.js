import Resource from "./Components/Resource.jsx";
import Head from "./Components/Ram_HomePage/HeadPart/Head";
import MiddleCenter from "./Components/Ram_HomePage/MiddlePart/MiddleCenter";
import MiddleUper from "./Components/Ram_HomePage/MiddlePart/MiddleUper";
import { AutoDailer } from "./Components/AutoDailer";
import React from "react";
import Om from "./Components/Pricing/Om";

const App = () => {
  return (
    <div className="App">
      <Head />
      <MiddleUper />
      <MiddleCenter />

      <Footer />
      <Om />
      <Resource />
      <AutoDailer />
    </div>
  );
};
export default App;
