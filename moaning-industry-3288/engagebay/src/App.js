import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Plan from "./Components/Pricing/Plans/Month";
import PricePlans from "./Components/Pricing/PricePlans";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Components/Pricing/Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider>
          <Plan />
          <AllRoutes/>
          {/* <PricePlans/> */}
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
