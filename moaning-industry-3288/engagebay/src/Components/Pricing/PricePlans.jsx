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
      <Box m="auto" w="90%" mb="3%" textAlign="center">
        <Heading
          as="h1"
          fontSize={{ sm: "1rem", md: "1.5rem", lg: "2rem" }}
          pt="3%"
          color="white"
          fontFamily="Poppins, Arial, sans-serif"
        >
          Get the Whole Stack, or Just the Pieces you Need
        </Heading>
        <Heading
          as="h3"
          fontSize={{ sm: "12px", md: "15px", lg: "20px" }}
          m="auto"
          mt="2%"
          color="white"
          fontFamily='Poppins, "Segoe UI", Arial, sans-serif'
        >
          Completely FREE Migration Service from Any Other Platform. No Hassles.
        </Heading>
      </Box>
      <Flex
        background="white"
        m="auto"
        borderRadius="20px"
        w={{ sm: "30%", md: "50%", lg: "80%" }}
        h={{ sm: "40vh", md: "30vh", lg: "15vh" }}
      >
        <Tabs
          variant="soft-rounded"
          colorScheme="blue"
          fontSize={{sm: "1rem", md: "1.5rem", lg: "2rem" }}
          w="100%"
          h={{ sm: "40vh", md: "30vh", lg: "15vh" }}
          m="auto"
        >
          <TabList
            display="grid"
            h={{ base:"40vh", sm: "40vh", md: "30vh", lg: "15vh" }}
            m="auto"
            gridTemplateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
          >
            {pair4.map((ele) => (
              <Box
                w={{ sm: "90%", md: "90%", lg: "100%" }}
                key={ele.title} m="auto"
              >
                <NavLink to={`${ele.Route}`}>
                  <Tab
                    m="auto"
                    w="100%"
                    onClick={() =>
                      ele.Route === "/service"
                        ? setService(true)
                        : setService(false)
                    }
                  >
                    <VStack>
                      {/* {ele.Route  : ()=>{setService(false)} } */}
                      <Heading
                        as="h4"
                        fontSize={{ sm: "10px", md: "1rem", lg: "1.3rem" }}
                      >
                        {ele.title}
                      </Heading>
                      <Text
                        fontSize={{ sm: "10px", md: "0.8rem", lg: "1rem" }}
                      >
                        {ele.desc}
                      </Text>
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

      {service === false ? (
        <Flex
          background="#37c1f9"
          w="40%"
          m="auto"
          borderRadius="25px"
          mt={{ sm: "3%", md: "5%", lg: "7.7%" }}
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
      ) : (
        <Box></Box>
      )}
    </Box>
  );
};

export default PricePlans;
