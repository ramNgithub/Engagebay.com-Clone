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
      shadow="base"
      border="1px solid red"
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
    price: "13.79",
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
    price: "45.99",
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
    n11: "Proposals",
  },
  {
    title: "PRO",
    price: "91.99",
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
    n11: "Phone Support",
  },
];

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const ComparePrice = () => {
  return (
    <Box m="auto" mt="5%">
      <Box w="30%" m="auto">
        <Heading textAlign="center" size={{sm:"md", md:"lg", lg: "xl"}}>Compare Plans</Heading>
        <Text size={{sm:"sm", md:"md", lg: "lg"}} textAlign="center">to help find the perfect fit</Text>
      </Box>

      <Box id="Year" w="95%" m="auto">
      <Stack
        display="grid"
        gridTemplateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }} gap="6"
        textAlign="center" m="auto"
        justify="center"
      >
        {priceData.map((ele) =>
            <PriceWrapper>
              <Box position="sticky" top="0px" background="white" zIndex="3" backgroundColor="lightblue">
                <Text
                  fontWeight="500"
                  fontSize="2rem"
                  borderRadius="25px"
                >
                  {ele.title}
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="2rem" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="2rem" fontWeight="600">
                    {ele.price}
                  </Text>
                  <Text fontSize="2rem" color="gray.500">
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg="white"
              >
                <List spacing={3} textAlign="start" px={{sm:"2", md:"2", lg: "2"}}>
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
                  <Button marginBottom="20px" w="full" colorScheme="red">
                    Start trial
                  </Button>
                </Box>
              </VStack>
            </PriceWrapper>
        )}
      </Stack>
    </Box>
    </Box>
  );
};

export default ComparePrice;