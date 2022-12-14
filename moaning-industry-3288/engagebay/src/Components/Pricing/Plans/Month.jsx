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
import { NavLink } from "react-router-dom";

const Month = () => {
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
          <TabList>
            <Tab m="auto" w="25%">
              <VStack>
                <Heading as="h4" size="md">
                  All-in-One
                </Heading>
                <Text>Starts at $12.74 USD</Text>
              </VStack>
            </Tab>
            <Tab m="auto" w="25%">
              <VStack>
                <Heading as="h4" size="md">
                  Marketing
                </Heading>
                <Text>Starts at $11.04 USD</Text>
              </VStack>
            </Tab>
            <Tab m="auto" w="25%">
              <VStack>
                <Heading as="h4" size="md">
                  CRM & Sales Bay
                </Heading>
                <Text>Starts at $11.04 USD</Text>
              </VStack>
            </Tab>
            <Tab m="auto" w="25%">
              <VStack>
                <Heading as="h4" size="md">
                  Service Bay
                </Heading>
                <Text>Free Help Desk</Text>
              </VStack>
            </Tab>
          </TabList>
          {/* <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels> */}
        </Tabs>
      </Flex>

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
            <NavLink to="/year" m="auto">
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
    </Box>
  );
};

export default Month;
