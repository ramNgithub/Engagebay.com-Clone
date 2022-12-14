import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Plan from "./Components/Pricing/Plans/Month";
import PricePlans from "./Components/Pricing/PricePlans";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Plan />
        {/* <PricePlans/> */}
      </ChakraProvider>
    </div>
  );
}

export default App;
