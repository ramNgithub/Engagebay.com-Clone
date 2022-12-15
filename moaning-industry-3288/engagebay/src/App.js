import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Plan from "./Components/Pricing/Plans/Month";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Components/Pricing/Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider>
          <Plan />
          <AllRoutes/>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
