import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ServiceBay = () => {
  return (
    <Box w="60%" m="auto" mt="3%" mb="5%">
      <Box m="auto" w="50%" textAlign="center" lineHeight="55px">
        <Heading as="h1" size="lg">
          Service Bay
        </Heading>
        <Text>Free Help Desk & Free Live Chat for support teams</Text>
        <Button colorScheme="blue">Free Forever → </Button>
        <Text>No credit card required.</Text>
      </Box>
    </Box>
  );
};

export default ServiceBay;
