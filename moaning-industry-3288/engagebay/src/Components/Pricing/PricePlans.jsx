import React from "react";
import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

const priceData = [
  {
    title: "Free",
    price: "0",
    n1: "250 Contacts & Companies",
    n2: "Contact Management",
    n3: "360 Degree Contact View",
    n4: "Deals",
    n5: "Tasks",
    n6: "Email Tracking",
    n7: "Appointment Scheduling",
    n8: "Gsuite Intergrstion",
    n9: "Live Chat",
  },
  {
    title: "Free",
    price: "0",
    n1: "250 Contacts & Companies",
    n2: "Contact Management",
    n3: "360 Degree Contact View",
    n4: "Deals",
    n5: "Tasks",
    n6: "Email Tracking",
    n7: "Appointment Scheduling",
    n8: "Gsuite Intergrstion",
    n9: "Live Chat",
  },
  {
    title: "Free",
    price: "0",
    n1: "250 Contacts & Companies",
    n2: "Contact Management",
    n3: "360 Degree Contact View",
    n4: "Deals",
    n5: "Tasks",
    n6: "Email Tracking",
    n7: "Appointment Scheduling",
    n8: "Gsuite Intergrstion",
    n9: "Live Chat",
  },
  {
    title: "Free",
    price: "0",
    n1: "250 Contacts & Companies",
    n2: "Contact Management",
    n3: "360 Degree Contact View",
    n4: "Deals",
    n5: "Tasks",
    n6: "Email Tracking",
    n7: "Appointment Scheduling",
    n8: "Gsuite Intergrstion",
    n9: "Live Chat",
  },
];

const PricePlans = () => {
  return (
    <Box py={12} id="month">
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center" w="90%" m="auto"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {priceData.map((ele) =>
            <PriceWrapper>
              <Box py={4} px={12}>
                <Text
                  fontWeight="500"
                  fontSize="2xl"
                  background="lightblue"
                  borderRadius="25px"
                >
                  {ele.title}
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="600">
                    {ele.price}
                  </Text>
                  <Text fontSize="3xl" color="gray.500">
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg="white"
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={10}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {ele.n1}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {ele.n2}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {ele.n3}
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="red">
                    Start trial
                  </Button>
                </Box>
              </VStack>
            </PriceWrapper>
        )}
      </Stack>
    </Box>
  );
};

export default PricePlans;
