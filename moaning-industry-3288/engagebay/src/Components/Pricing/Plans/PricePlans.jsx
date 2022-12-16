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
      w="110%"
      h="100vh"
      border="1px solid red"
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
    title: "FREE",
    price: "0",
    n1: "250 Contacts & Companies",
    n2: "Email Marketing",
    n3: "Autoresponders",
    n4: "Email Broadcast",
    n5: "Sequences",
    n6: "Lead Grabbers",
    n7: "Landing Pages",
    n8: "CRM",
    n9: "Helpdesk",
    n10: "Live Chat",
  },
  {
    title: "BASIC",
    price: "14.99",
    n1: "750 Contacts & Companies",
    n2: "Email Templates",
    n3: "Web Pop-ups",
    n4: "Landing Page Builder",
    n5: "Lead Scoring",
    n6: "SMS Marketing",
    n7: "3rd Party Integrations",
    n8: "Social Suite",
    n9: "Tag Manager",
  },
  {
    title: "GROWTH",
    price: "49.99",
    n1: "5000 Contacts & Companies",
    n2: "Marketing Automation",
    n3: "Push Notifications",
    n4: "Site Messages",
    n5: "TaBroadcast Testingsks",
    n6: "Landing Page Testing",
    n7: "Custom Domain",
    n8: "Call Records",
    n9: "Service Automation",
    n10: "Products",
    n11: "Proposals"
  },
  {
    title: "PRO",
    price: "99.99",
    n1: "Unlimited Contacts & Companies",
    n2: "Marketing Automation",
    n3: "Web Analytics",
    n4: "Proposal Analytics",
    n5: "SSO",
    n6: "Role Management",
    n7: "Goals",
    n8: "Custom Reporting",
    n9: "Account Manager",
    n10: "Uptime SLA",
    n11: "Phone Support"
  },
];

const Month = () => {
  return (
    <Box py={12} id="month" w="80%" m="auto">
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        w="25%"
        m="auto"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {priceData.map((ele) => (
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
                <Text fontSize="3xl" fontWeight="600">
                  {ele.price}
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack bg="white" py={4} borderBottomRadius={"xl"}>
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
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  {ele.n4 || ""}
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  {ele.n5 || ""}
                </ListItem>
                {ele.n6 !== undefined ? (
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {ele.n6}
                  </ListItem>
                ) : (
                  <ListItem>{ele.n6 || " "}</ListItem>
                )}
                {ele.n7 !== undefined ? (
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {ele.n7 || " "}
                  </ListItem>
                ) : (
                  <ListItem visibility="hidden">{"HIII"}</ListItem>
                )}
                {ele.n8 !== undefined ? (
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {ele.n8 || ""}
                  </ListItem>
                ) : (
                  <ListItem visibility="hidden">{"HIII"}</ListItem>
                )}
                {ele.n9 !== undefined ? (
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {ele.n9 || ""}
                  </ListItem>
                ) : (
                  <ListItem visibility="hidden">{"HIII"}</ListItem>
                )}
                {ele.n10 !== undefined ? (
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {ele.n10 || ""}
                  </ListItem>
                ) : (
                  <ListItem visibility="hidden">{"HIII"}</ListItem>
                )}
                {ele.n11 !== undefined ? (
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {ele.n11 || ""}
                  </ListItem>
                ) : (
                  <ListItem visibility="hidden">{"HIII"}</ListItem>
                )}
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red">
                  Start trial
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>
        ))}
      </Stack>
    </Box>
  );
};

export default Month;