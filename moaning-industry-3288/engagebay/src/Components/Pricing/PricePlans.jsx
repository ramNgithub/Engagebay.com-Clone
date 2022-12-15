import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Box,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const pair4 = [
  { title: "All-in-One", desc: "Starts at $12.74 USD", Route: "/" },
  { title: "Marketing", desc: "Starts at $11.04 USD", Route: "/marketing" },
  { title: "CRM & Sales Bay", desc: "Starts at $11.04 USD", Route: "/" },
  { title: "Service Bay", desc: "Free Help Desk", Route: "/service" },
];

const PricePlans = () => {

  const [service, setService] = useState(false);

  return (
    <Box w="100%" h="60vh" background="#335eea">
      <Box m="auto" w="60%" mb="3%" textAlign="center">
        <Heading
          as="h1"
          lineHeight="80px"
          size="lg"
          pt="3%"
          color="white"
          fontFamily="Poppins, Arial, sans-serif"
        >
          Get the Whole Stack, or Just the Pieces you Need
        </Heading>
        <Heading
          as="h1"
          size="md"
          m="auto"
          color="white"
          fontFamily='Poppins, "Segoe UI", Arial, sans-serif'
        >
          Completely FREE Migration Service from Any Other Platform. No Hassles.
        </Heading>
      </Box>
      <Flex background="white" w="80%" m="auto" borderRadius="20px">
        <Tabs
          variant="soft-rounded"
          colorScheme="blue"
          size="lg"
          m="auto"
          w="100%"
          p="20px" 
        >
          <TabList >
            {pair4.map((ele) => (
                <Box w="25%" key={ele.title} border="1px solid red">
                <NavLink to={`${ele.Route}`}>
              <Tab w="100%" m="auto" onClick={ ()=> ele.Route === "/service" ? setService(true): setService(false) }>
                  <VStack>
              {/* {ele.Route  : ()=>{setService(false)} } */}
                    <Heading as="h4" size="md">
                      {ele.title}
                    </Heading>
                    <Text>{ele.desc}</Text>
                  </VStack>
              </Tab>
                </NavLink>
              </Box>
            ))}
          </TabList>
          {/* <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
          </TabPanels> */}
        </Tabs>
      </Flex>

        {service === false ?
      <Flex
        background="#37c1f9"
        w="40%"
        m="auto"
        borderRadius="25px"
        mt="5.7%"
        h="6.2vh"
      >
        <Tabs variant="soft-rounded" colorScheme="green" color="red" w="100%">
          <TabList>
            <Box m="left" w="33%">
              <NavLink to="/" m="auto">
                <Tab m="auto" w="100%" color="white">
                  Monthly
                </Tab>
              </NavLink>
            </Box>

            <Box m="auto" w="33%">
              <NavLink to="/year" m="auto">
                <Tab m="auto" color="white" w="100%">
                  Yearly (8% off)
                </Tab>
              </NavLink>
            </Box>

            <Box m="right" w="33%">
              <NavLink to="/biennial" m="auto">
                <Tab m="right" color="white" w="100%">
                  Biennial (15% off)
                </Tab>
              </NavLink>
            </Box>
          </TabList>
          {/* <TabPanels >
            <TabPanel>
            </TabPanel>
          </TabPanels> */}
        </Tabs>
      </Flex>
        : <Box></Box>}
    </Box>
  );
};

export default PricePlans;
